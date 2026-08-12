import AOS from 'aos';

let initialized = false;

export const initAos = () => {
  if (initialized || typeof window === 'undefined') {
    return;
  }

  AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic',
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });

  initialized = true;
};
