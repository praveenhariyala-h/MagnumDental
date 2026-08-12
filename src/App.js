import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import StickyContact from './components/StickyContact/StickyContact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const SingleBlog = lazy(() => import('./pages/SingleBlog/SingleBlog'));
const Contactus = lazy(() => import('./pages/Contact/Contactus'));

const PageFallback = () => (
  <div className="page-loading" role="status" aria-live="polite">
    Loading…
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleservice" element={<Services />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:url" element={<SingleBlog />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </Suspense>
      <StickyContact />
    </>
  );
}

export default App;
