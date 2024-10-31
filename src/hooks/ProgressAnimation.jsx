import { useState, useEffect } from "react";

export const useProgressAnimation = (targetValue, speed = 50) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetValue) {
          clearInterval(interval);
          return targetValue;
        }
        return prevProgress + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [targetValue, speed]);

  return progress;
};
