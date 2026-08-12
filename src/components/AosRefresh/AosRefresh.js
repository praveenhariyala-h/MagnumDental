import { useEffect } from 'react';
import AOS from 'aos';
import { initAos } from '../../utils/initAos';

const AosRefresh = () => {
  useEffect(() => {
    initAos();
    const timer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
};

export default AosRefresh;
