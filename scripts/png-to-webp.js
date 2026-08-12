const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src', 'assets');
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.png$/i.test(entry.name) && fs.statSync(full).size >= 90 * 1024) {
      targets.push(full);
    }
  }
}

walk(root);

(async () => {
  for (const file of targets) {
    const before = fs.statSync(file).size;
    const out = file.replace(/\.png$/i, '.webp');
    const meta = await sharp(file).metadata();
    let pipeline = sharp(file).rotate();
    const maxW = before > 250 * 1024 ? 1200 : 1400;
    if ((meta.width || 0) > maxW) {
      pipeline = pipeline.resize({ width: maxW, withoutEnlargement: true, fit: 'inside' });
    }
    await pipeline.webp({ quality: 78, effort: 6 }).toFile(out);
    const after = fs.statSync(out).size;
    console.log(
      path.relative(root, file),
      `${Math.round(before / 1024)}KB ->`,
      path.basename(out),
      `${Math.round(after / 1024)}KB`
    );
  }
})();
