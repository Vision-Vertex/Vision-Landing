"use client";
import React from 'react';
import { services } from '@/constants/data';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ServiceProps } from '@/types/index';



function ServicesPage({ params }: ServiceProps) {

  const service = services.find((s) => s.slug === params.slug);

  const router = useRouter();
  if (!service) return notFound();

  return (
    <div className="font-sans bg-white min-h-screen py-10">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto gap-8 px-4">
        {/* Left */}
        <div className="flex-1 min-w-[320px] max-w-[540px]">
          <div className="text-[#F26522] font-semibold text-[15px] mb-2">{service.headline}</div>
          <h1 className="text-[#1A2669] font-bold text-3xl md:text-4xl mb-4 leading-tight">
            {service.small_description}
          </h1>
          <p className="text-[#222] text-base mb-6">
            {service.description}
          </p>
          <div className="flex gap-6 items-center mb-4">
            <button className="bg-[#1A2669] text-white rounded-lg px-6 py-2 font-semibold text-base hover:bg-[#16205a] transition" onClick={() => router.push(service.button1)}>Get in touch</button>
            <button className="text-[#F26522] font-semibold text-base hover:underline">Start Now &gt;</button>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 min-w-[320px] max-w-[420px] flex justify-center">
          <img src={service.image} alt="Team working" className="w-full rounded-xl object-cover h-[260px] md:h-[300px]" />
          
        </div>
      </div>

      {/* Logo Row */}
      <div className="flex justify-center items-center gap-8 mt-12 mb-8 flex-wrap">
        {service.partners?.map((partner,i) => (
          <img
            key={i}
            src={partner.path}
            alt={partner.alt}
            className="h-8 w-auto opacity-90"
            onClick={() => partner.link && window.open(partner.link, '_blank')}
          />
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-8">
        <h2 className="text-[#1A2669] font-bold text-2xl md:text-3xl mb-2">{service.second_headline}</h2>
        <p className="text-[#222] text-base">{service.second_description}</p>
      </div>

      
    </div>
  );
}

export default ServicesPage;
