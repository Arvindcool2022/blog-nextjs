import { useEffect, useRef, useState } from 'react';

const useCountUp = (limit = 10, duration = 3000) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const start = performance.now();

    const updateCount = timestamp => {
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      const increment = limit * progress;
      setCount(Math.min(Math.ceil(increment), limit));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCount);
      }
    };

    animationRef.current = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationRef.current);
  }, [limit, duration]);

  return count;
};

export default useCountUp;
