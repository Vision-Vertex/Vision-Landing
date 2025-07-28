'use client';
import React, { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants/data';
import { useCountUp } from '@/hooks/useCountUp';

function Stat() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setStart(true);
          hasAnimated = true;
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-accent w-screen grid grid-cols-1 md:grid-cols-2 px-6 md:px-14 py-14 lg:py-20 md:gap-28 lg:gap-20 gap-10 justify-between mb-16 mt-8">
      <div>
        <div className="text-4xl lg:text-4xl md:text-2xl">
          Helping local & international{' '}
          <span className="text-secondary">business reinvent themselves</span>
        </div>
        <div className='md:text-sm lg:text-lg text-lg'>We reached here with our hard work and dedication</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2 ">
        {stats.map((stat, i) => {
  const count = useCountUp(stat.number, start, 1500);
  const isLast = i === stats.length - 1;

  return (
    <div className="flex items-center" key={i}>
      {<stat.icon size={24} />}
      <div className='text-gray-600'>
        <div className='lg:text-4xl text-2xl sm:text-2xl'>
          {count.toLocaleString()}{isLast && '%'}
        </div>
        <div className='text-sm font-light'>{stat.name}</div>
      </div>
    </div>
  );
})}

      </div>
    </div>
  );
}

export default Stat;
