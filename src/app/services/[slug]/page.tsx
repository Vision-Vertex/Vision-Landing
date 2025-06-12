"use client";
import React from 'react';
import { services } from '@/constants/data';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ServiceProps } from '@/types/index';
import { Button } from '@/components/ui/button';



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

      {/* Cards Section */}
      <div className="p-6 bg-white max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[456px]">
        {/* Left Column (2/3 width) */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4">
          {/* Top Row with 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-[#E1EAF9] p-6 rounded-lg">
              <div className="text-red-500 text-2xl mb-2">💰</div>
              <h3 className="font-bold text-lg mb-2">{service.cards[0].title}</h3>
              <p className="text-sm text-gray-700">
                {service.cards[0].description}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E1EAF9] p-6 rounded-lg">
              <div className="text-orange-500 text-2xl mb-2">👥</div>
              <h3 className="font-bold text-lg mb-2">{service.cards[1].title}</h3>
              <p className="text-sm text-gray-700">
                {service.cards[1].description}
              </p>
            </div>
          </div>

          {/* Bottom Row Wide Card */}
          <div className="bg-[#E1EAF9] p-6 rounded-lg">
            <div className="text-orange-500 text-2xl mb-2">📝</div>
            <h3 className="font-bold text-lg mb-2">{service.cards[2].title}</h3>
            <p className="text-sm text-gray-700">
              {service.cards[2].description}
              </p>
          </div>
        </div>

        {/* Right Column (1/3 width) */}
        <div className="bg-[#E1EAF9] p-6 rounded-lg flex flex-col ">
          <div className='mb-10'>
            <div className="text-orange-500 text-2xl mb-2">💰</div>
            <h3 className="font-bold text-lg mb-2">{service.cards[3].title}</h3>
            <p className="text-sm text-gray-700">
              {service.cards[3].description}
              <br /><br />
              Leverage global time zones to keep your projects moving around the clock.
            </p>
          </div>
<Button className='bg-primary text-white w-fit text-md rounded-2xl px-6 w-44' variant={'outline'}>Contact Us </Button>
        </div>
      </div>
    </div>

      {/* Case Studies Section */}
      <div className="px-6 py-8 bg-white max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-8">Case Studies</h2>

      <div className="bg-primary text-white rounded-2xl px-6 py-20 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        
        <div className="md:w-1/3 text-sm leading-relaxed px-6">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
        </div>

        
        <div className="hidden md:block w-px bg-secondary mx-6" />

        
        <div className="md:w-1/3 text-sm leading-relaxed px-6">
          For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
        </div>

        
        <div className="hidden md:block w-px bg-secondary mx-6" />

        
        <div className="md:w-1/3 text-sm leading-relaxed px-6">
          For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServicesPage;
