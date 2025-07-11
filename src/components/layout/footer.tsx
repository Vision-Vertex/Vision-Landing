'use client';
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; 
import VisionVertex from '../../../public/logos/Vision5 Logo_R_O12.svg';
import { services } from '@/constants/data';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter} from 'next/router';

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
   const handleClick = (index: number, slug: string) => {
    setActiveIndex(index);
    router.push(`/services/${slug}`);
  };
           const services = [
  { label:'Data Analytics', slug: 'data-analytics'},
  { label: 'Microsoft Ecosystem Solutions', slug: 'power-platform' },
  { label: 'Full Stack Agile Development', slug: 'full-stack' },
  { label: 'Cloud & DevSecOps', slug: 'cloud-devsecops' },
  { label: 'IT Consulting & Strategy', slug: 'it-consulting' },
  { label: 'Cybersecurity Solutions', slug: 'cybersecurity' },
  { label: 'AI & Automation', slug: 'ai-automation' },
  { label: 'App Development', slug: 'app-development' },
  { label: 'Training & Upskilling', slug: 'training-upskilling' },
  { label: 'Freelancing & Outsourcing', slug: 'freelancing-outsourcing' }
];
  return (
     
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start text-sm">
        
        {/* Column 1: Logo and Description */}
        <div>
          <Image
            src={VisionVertex}
            width={200}
            height={200}
            alt="Vision5 Tech Logo"
            className="mb-4"
          />
          <p className="text-xs leading-relaxed max-w-[260px]">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore
            development teams and tailored technology solutions. From Microsoft Power Platform
            to secure full stack development, we deliver innovation you can trust — at a fraction
            of the cost.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 text-center">Services</h3>
  
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white ">
        {services.map((service, index) => (
          <li
            key={service.slug}
            className={index === activeIndex ? 'font-bold text-[17215c]' : ''}
          >
            <button
              onClick={() => handleClick(index, service.slug)}
              className="hover:underline text-left w-full"
            >
              {service.label}
            </button>
          </li>
        ))}
      </ul>

        </div>

        {/* Column 3: Socials (visible on md and up) */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-4 mx-24">Our Socials</h3>
          <div className="flex space-x-4 text-xl mx-24">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
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

