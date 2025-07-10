'use client';
import React, {useRef, useState, useEffect} from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import TestmonialIcon from '../../../public/assets/Group 1000001788.svg';
import { testmonial as testimonialList } from '@/constants/data';


function testmonial() {
    const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };


  return (
    <div className="h-screen grid grid-cols-1 gap-8 lg:grid-cols-2 md:gap-24 px-6 ld:px-28 ">
      <div className="space-y-2 ml-10 md:m-10">
        <div className="font-medium text-secondary uppercase">Testmonials</div>
        <div className="text-4xl text-primary font-medium">
          See what our client have to say about us
        </div>
        <div className="text-sm">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful.{' '}
        </div>
        <Button variant={'secondary'}>Become our client</Button>
      </div>
      <div className="relative">
        <Image
          src={TestmonialIcon}
          alt="Icon"
          className="w-full h-[40rem] absolute -z-10 lg:block hidden"
          width={200}
          height={150}
        />
      
        <div className="relative  ml-12 md:px-8 md:py-24">
  <div
       ref={scrollRef}
        onScroll={handleScroll}
         className="flex gap-12 overflow-x-auto px-4" style={{scrollbarWidth:"none"}}>
          
    {testimonialList.map((testimonial, index) => (
      <div key={index} className="flex items-start gap-4 max-w-[90%] md:ml-10 flex-shrink-0">
        <div className="hidden md:flex flex-col items-center">
          <Image
            src={testimonial.image}
            alt="Client Avatar"
            className="bg-white rounded-full shadow-md mb-4 object-fill "
          />
          <div className="h-30 w-1 bg-secondary"></div>
        </div>

        <div
          className="md:text-white text-sm leading-relaxed max-w-full max-h-[10rem] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <p className="italic">"{testimonial.quote}"</p>
          <p className="text-secondary text-right font-bold mt-4">– {testimonial.name}</p>
        </div>
      </div>

    ))}
  </div>
          <div className="flex justify-center mt-2 space-x-2 mb-6">
            {testimonialList.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-secondary' : 'bg-accent'
                }`}
              />
            ))}
          </div>
      </div>
    </div>
    </div>
  );
}

export default testmonial;
