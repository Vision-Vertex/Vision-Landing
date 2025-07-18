'use client';
import React, { useState, useEffect, useRef } from 'react';
import { services } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

function ServicesList() {
  // Only use the first 5 services
  const visibleServices = services.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionCount = visibleServices.length;
  const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        // Horizontal scroll for small screens
        const container = containerRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const sectionWidth = container.offsetWidth;
        let newIndex = Math.floor(scrollLeft / sectionWidth);
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= sectionCount) newIndex = sectionCount - 1;
        setActiveIndex(newIndex);
      } else {
        // Vertical scroll for md and up
        const section = document.getElementById('services-section');
        if (!section) return;
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY;
        let relativeScroll = scrollPosition - sectionTop;
        if (relativeScroll <= 0) {
          setActiveIndex(0);
          return;
        }
        let newIndex = Math.floor(relativeScroll / sectionHeight);
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= sectionCount) newIndex = sectionCount - 1;
        setActiveIndex(newIndex);
      }
    };

    if (window.innerWidth < 768) {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => {
          container.removeEventListener('scroll', handleScroll);
        };
      }
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [sectionCount, sectionHeight]);

  const handleIconClick = (index: number): void => {
    setActiveIndex(index);
    if (window.innerWidth < 768) {
      // Horizontal scroll for small screens
      const container = containerRef.current;
      if (container) {
        container.scrollTo({
          left: index * container.offsetWidth,
          behavior: 'smooth',
        });
      }
    } else {
      // Vertical scroll for md and up
      window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      id="services-section"
      className="relative"
      style={{ height: `calc(${visibleServices.length} * 100vh)` }}
    >
      {/* Horizontal scroll for small screens */}
      <div
        ref={containerRef}
        className="block md:hidden w-full overflow-x-auto scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex w-full" style={{ width: `${visibleServices.length * 100}vw` }}>
          {visibleServices.map((serv, index) => (
            <div
              key={index}
              className="flex-none w-screen px-4 py-8"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary w-2 h-5" />
                <div className="text-secondary font-medium text-sm sm:text-base">
                  {serv.headline}
                </div>
              </div>
              <div className="w-full h-[300px] sm:h-[350px]">
                <Image
                  src={serv.image}
                  alt={serv.headline}
                  className="w-full h-full rounded-xl object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="text-primary text-lg px-2 leading-relaxed text-left break-words mt-4">
                {serv.small_description}
              </div>
              <div className="text-base text-gray-700 leading-relaxed px-2 text-left break-words">
                {serv.description}
              </div>
              <Button variant="link" className="p-0 w-fit px-2 mt-2">
                <Link
                  href={`/services/${serv.slug}`}
                  className="flex items-center gap-2 text-base"
                >
                  Learn More <ChevronRight size={18} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* ...existing code for md and up... */}
      <div
        className="sticky top-0 min-h-screen bg-white flex items-center px-4 md:px-14 py-0 z-10 hidden md:flex"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.01)' }}
      >
        <div className="w-full">
        <h1 className="text-3xl text-primary font-bold text-center mb-5">
          Our Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className=" md:col-span-1 lg:col-span-5 flex flex-col gap-4 md:row-start-1 h-full">
              <div className="flex items-center gap-2">
                <div className="bg-primary w-2 h-5" />
                <div className="text-secondary font-medium text-sm sm:text-base">
                  {services[activeIndex].headline}
                </div>
                              
              </div>
<div className="w-full h-[300px] sm:h-[350px] md:h-[320px] ">
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].headline}
                  className="w-full h-full rounded-xl object-cover"
                  width={600}
                  height={400}
                />
              </div>


              
            </div>
            <div className='md:col-span-10 lg:col-span-6 justify-end flex flex-col gap-3 h-full'>
                            
                <div className="text-primary text-lg px-2 leading-relaxed text-left break-words">
                  {services[activeIndex].small_description}
                </div>

                <div className="text-base text-gray-700 leading-relaxed px-2 text-left break-words">
                  {services[activeIndex].description}
                </div>

                <Button variant="link" className="p-0 w-fit px-2">
                  <Link
                    href={`/services/${services[activeIndex].slug}`}
                    className="flex items-center gap-2 text-base"
                  >
                    Learn More <ChevronRight size={18} />
                  </Link>
                </Button>
             
            </div>
          <div className="hidden lg:flex flex-col gap-5 col-span-1 items-end mr-2 ">
            {visibleServices.map((serv, index) => (
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
    </div>
  );
}

export default ServicesList;
