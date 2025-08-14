'use client';
import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor image loading performance
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const startTime = performance.now();
        img.addEventListener('load', () => {
          const loadTime = performance.now() - startTime;
          if (loadTime > 1000) {
            console.warn(`Slow image load: ${img.src} took ${loadTime.toFixed(2)}ms`);
          }
        });
      });
    }
  }, []);

  return null;
}
