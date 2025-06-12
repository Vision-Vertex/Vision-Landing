"use client"
import React, { useState, useEffect } from 'react';
import { services } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight; // assuming each section takes full viewport height
    const newIndex = Math.floor(scrollPosition / sectionHeight);
    if (newIndex >= 0 && newIndex < services.length) {
      setActiveIndex(newIndex);
    }
  };

  const handleIconClick = (index) => {
    setActiveIndex(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen px-28 py-10">
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
          />
          <div className="space-y-1 mt-5">
            <div className="text-primary">{services[activeIndex].small_description}</div>
            <div className="text-sm">{services[activeIndex].description}</div>
            <Button variant={'link'}>
              <Link href={services[activeIndex].button}>Book Us Now</Link>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-5 col-span-3'>
          {services.map((serv, index) => (
            <div key={index} onClick={() => handleIconClick(index)}>
              <Image src={serv.icon} alt={serv.headline} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesList;