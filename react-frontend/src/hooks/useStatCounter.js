import { useState, useEffect, useRef } from 'react';

export function useStatCounter(count, suffix) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const end = count;
          const dur = 2000;
          const start = performance.now();

          function step(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * end));
            if (p < 1) requestAnimationFrame(step);
            else setValue(end);
          }
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, suffix]);

  return { ref, value, suffix };
}

export default useStatCounter;