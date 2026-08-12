import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import { initAos } from '../../utils/initAos';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    initAos();
    const timer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
