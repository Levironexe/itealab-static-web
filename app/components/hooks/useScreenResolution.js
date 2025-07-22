// hooks/useScreenResolution.js
import { useState, useEffect } from 'react';

export const useScreenResolution = () => {
  const [resolution, setResolution] = useState({
    width: 0,
    height: 0,
    resolution: '0x0'
  });

  useEffect(() => {
    const updateResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const resolutionString = `${width}x${height}`;

      setResolution({
        width,
        height,
        resolution: resolutionString
      });
    };

    updateResolution();
    window.addEventListener('resize', updateResolution);
    return () => window.removeEventListener('resize', updateResolution);
  }, []);

  return resolution;
};