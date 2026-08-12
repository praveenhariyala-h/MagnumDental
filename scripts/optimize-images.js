const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src', 'assets');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(full);
  }
}

walk(root);

(async () => {
  let saved = 0;

  for (const file of files) {
    const before = fs.statSync(file).size;
    if (before < 80 * 1024) continue;

    const ext = path.extname(file).toLowerCase();
    const tmp = `${file}.opt.tmp`;

    try {
      const meta = await sharp(file).metadata();
      const maxWidth = before > 200 * 1024 ? 1100 : 1300;

      let pipeline = sharp(file).rotate();
      if ((meta.width || 0) > maxWidth) {
        pipeline = pipeline.resize({
          width: maxWidth,
          withoutEnlargement: true,
          fit: 'inside',
        });
      }

      if (ext === '.png') {
        // Quantized PNG drastically reduces photo-like assets
        await pipeline
          .png({
            quality: 70,
            compressionLevel: 9,
            palette: true,
            colors: 128,
          })
          .toFile(tmp);
      } else {
        await pipeline.jpeg({ quality: 72, mozjpeg: true }).toFile(tmp);
      }

      const after = fs.statSync(tmp).size;
      if (after < before * 0.95) {
        fs.renameSync(tmp, file);
        saved += before - after;
        console.log(
          'OK',
          path.relative(root, file),
          `${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`
        );
      } else {
        fs.unlinkSync(tmp);
        console.log('SKIP', path.relative(root, file), `${Math.round(before / 1024)}KB`);
      }
    } catch (err) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.log('FAIL', path.relative(root, file), err.message);
    }
  }

  console.log('Total saved KB:', Math.round(saved / 1024));
})();
