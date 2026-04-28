import { useState, useEffect } from 'react';

export function useTimelineProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const fill = document.getElementById('timeline-fill');
      const section = document.getElementById('timeline');
      if (!fill || !section) return;
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const visible = Math.min(Math.max(0, (window.innerHeight - rect.top) / (sectionH + window.innerHeight)), 1);
      setProgress(visible * 100);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return progress;
}

export default useTimelineProgress;