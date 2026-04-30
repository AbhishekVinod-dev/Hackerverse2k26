import { useState, useEffect } from 'react';

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = (el) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
  };
  return [ref, isVisible];
}

export default useScrollReveal;