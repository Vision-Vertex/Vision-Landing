'use client';
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; 
import VisionVertex from '../../../public/logos/Vision5 Logo_R_O12.svg';
import { services } from '@/constants/data';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const handleClick = (index: number, slug: string) => {
    setActiveIndex(index);
    router.push(`/services/${slug}`);
  };
  
  return (
     
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start text-sm">
        
        {/* Column 1: Logo and Description */}
        <div>
          <Image
            src={VisionVertex}
            width={200}
            height={200}
            alt="Vision5 Tech Logo"
            className=""
          />
          <p className="text-xs leading-relaxed max-w-[260px]">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore
            development teams and tailored technology solutions. From Microsoft Power Platform
            to secure full stack development, we deliver innovation you can trust — at a fraction
            of the cost.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className='md:col-span-2'>
          <h3 className="text-white text-lg font-semibold mb-4 text-start md:text-center w-full md:pr-20 ">Services</h3>
  
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs ">
        {services.map((service, index) => (
          <li
            key={service.slug}
            // className={index === activeIndex ? 'font-bold text-[17215c]' : ''}
          >
            <button
              onClick={() => handleClick(index, service.slug)}
              className="hover:cursor-pointer text-left w-full"
            >
              {service.headline}
            </button>
          </li>
        ))}
      </ul>

        </div>

        {/* Column 3: Socials (visible on md and up) */}
        <div className="flex flex-col items-start ">
          <h3 className="text-white text-lg font-semibold mb-4 md:mx-20">Our Socials</h3>
            <div className="flex space-x-4 text-xl md:mx-20">
            <a href="#" aria-label="Twitter" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/vision5-tech" aria-label="LinkedIn" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 text-sm gap-y-4">
        <div className="flex space-x-6 justify-center sm:justify-start">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
        

