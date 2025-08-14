'use client';
import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
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

      // Log performance metrics
      console.log('🚀 Performance Monitor Active');
      console.log('📊 Monitor image loading times in console');
      console.log('🔍 Use Lighthouse for Core Web Vitals');
    }
  }, []);

  return null;
}
