import { useState, useEffect } from 'react';

export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime();

  const pad = (n) => (n < 10 ? '0' + n : '' + n);

  const getTime = () => {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    return {
      days: pad(Math.floor(diff / 86400000)),
      hours: pad(Math.floor((diff % 86400000) / 3600000)),
      mins: pad(Math.floor((diff % 3600000) / 60000)),
      secs: pad(Math.floor((diff % 60000) / 1000)),
    };
  };

  const [time, setTime] = useState(getTime);
  const [flipMap, setFlipMap] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const next = getTime();
        const newFlip = {};
        if (prev.days !== next.days) newFlip.days = true;
        if (prev.hours !== next.hours) newFlip.hours = true;
        if (prev.mins !== next.mins) newFlip.mins = true;
        if (prev.secs !== next.secs) newFlip.secs = true;
        if (Object.keys(newFlip).length) {
          setFlipMap(newFlip);
          setTimeout(() => setFlipMap({}), 400);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return { time, flipMap };
}

export default useCountdown;