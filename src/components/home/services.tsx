'use client';
import React, { useState, useEffect } from 'react';
import { services } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

function ServicesList() {
  // Only use the first 5 services
  const visibleServices = services.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIconClick = (index: number): void => {
    setActiveIndex(index);
    // No scroll needed since only one section is rendered
  };

  return (
    <div className="relative lg:mb-15">
      <div className="min-h-screen flex items-center px-4 md:px-14 py-0">
        <div className="w-full">
          <h1 className="text-3xl text-primary font-bold text-center mb-5">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4 md:row-start-1">
              <div className="flex items-center gap-2">
                <div className="bg-primary w-2 h-5" />
                <div className="text-secondary font-medium text-sm sm:text-base">
                  {visibleServices[activeIndex].headline}
                </div>
              </div>
              <div className="w-full h-[300px] sm:h-[350px] md:h-[320px] ">
                <Image
                  src={visibleServices[activeIndex].image}
                  alt={visibleServices[activeIndex].headline}
                  className="w-fit h-full rounded-xl object-cover"
                  width={500}
                  height={400}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-primary text-lg px-2 leading-relaxed text-left break-words">
                  {visibleServices[activeIndex].small_description}
                </div>
                <div className="text-base text-gray-700 leading-relaxed px-2 text-left break-words">
                  {visibleServices[activeIndex].description}
                </div>
                <Button variant="link" className="p-0 w-fit">
                  <Link
                    href={`/services/${visibleServices[activeIndex].slug}`}
                    className="flex items-center gap-2 text-base"
                  >
                    Learn More <ChevronRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-5 col-span-4 items-end mr-2 ">
              {visibleServices.map((serv, index) => (
                <div
                  key={index}
                  onClick={() => handleIconClick(index)}
                  className={`cursor-pointer transition-all duration-200 flex items-center justify-center
                   ${
                     activeIndex === index
                       ? 'scale-110 bg-primary rounded-lg p-2 shadow-lg'
                       : 'scale-100 bg-transparent border rounded-lg border-secondary'
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
                       