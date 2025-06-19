'use client';
import React, { useState, useEffect } from 'react';
import { services } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionCount = services.length;
  const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIndex = Math.floor(scrollPosition / sectionHeight);
      if (newIndex >= 0 && newIndex < sectionCount) {
        setActiveIndex(newIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionCount, sectionHeight]);

  const handleIconClick = (index: number): void => {
    setActiveIndex(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="relative"
      style={{ height: `calc(${services.length} * 100vh)` }}
    >
      <div
        className="sticky top-0 h-screen px-28 py-10 bg-white z-10"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.01)' }}
      >
        <h1 className="text-3xl text-primary font-bold text-center mb-5">
          Our Services
        </h1>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9">
            <div className="flex gap-2 items-center mb-2">
              <div className="bg-primary w-2 h-5"></div>
              <div className="text-secondary font-medium">
                {services[activeIndex].headline}
              </div>
            </div>
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].headline}
              className="w-full"
              width={100}
              height={100}
            />
            <div className="space-y-1 mt-5">
              <div className="text-primary">
                {services[activeIndex].small_description}
              </div>
              <div className="text-sm">{services[activeIndex].description}</div>
              <Button variant={'link'}>
                <Link href={services[activeIndex].slug} className='flex items-center gap-2 '>Learn More <ChevronRight /></Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 col-span-3 items-end">
            {services.map((serv, index) => (
              <div
                key={index}
                onClick={() => handleIconClick(index)}
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center
                 ${
                   activeIndex === index
                     ? 'scale-110 bg-primary rounded-lg p-2 shadow-lg'
                     : 'scale-100 bg-transparent'
                 }
               `}
                style={{ width: 56, height: 56 }}
              >
                <Image
                  src={serv.icon}
                  alt={serv.headline}
                  className={`transition-all duration-200 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-60'
                  }`}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
