import React, { JSX } from 'react';
import { services } from '@/constants/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';

async function ServicesPage(props: any) {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="font-sans bg-white min-h-screen py-6 md:py-10">
 <div className="flex flex-col md:flex-row  w-full md:px-16 items-center mx-auto px-4 lg:space-x-20 md:space-x-10 md:mb-20">
        <div className="flex flex-col  md:w-full lg:max-w-[540px] space-y-6">
          <div
  className="relative inline-block font-semibold text-[15px] mb-2 overflow-hidden text-[#F26522]"
>
  <span>{service.headline}</span>
  {/* <span
    className="absolute top-0 left-[-75%] w-1/2 h-full"
    style={{
      background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
      transform: 'skewX(-25deg)',
      animation: 'shine 2.5s infinite',
    }}/> */}
   </div>

    <h1 className="relative text-[#1A2669] font-bold text-3xl md:text-4xl mb-6 leading-tight overflow-hidden">
      <span className="relative z-10">{service.small_description}</span>
        {/* <span
         className="absolute top-0 left-[-100%] w-1/2 h-full"
           style={{
           background:
           'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
            transform: 'skewX(-2deg)',
            animation: 'shine 1.5s infinite',}}/> */}
      </h1>
        <div className="md:hidden lg:w-full">
    <Image
      src={service.image}
      alt="Team working"
      className="w-full object-cover rounded-xl md:h-[300px]"
      width={1400}
      height={1000}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
          <p className="text-[#222] text-lg mb-6">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                        <a
              className="bg-[#1A2669] text-white rounded-lg px-6 py-2 font-semibold text-base hover:bg-[#16205a] transition w-full sm:w-auto text-center"
              href={service.button1}
            >
              Get in touch
            </a>
            {/* <button className="text-[#F26522] font-semibold text-base hover:underline w-full sm:w-auto">Start Now &gt;</button> */}
          </div>
          </div>
        <div className="hidden md:block  min-w-[340px] flex justify-center">
  <div className=" w-full">
    <Image
      src={service.image}
      alt="Team working"
      className="w-full object-cover rounded-xl md:h-[300px]"
      width={1400}
      height={1000}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</div>

        </div>
      {/* <div className="flex justify-center items-center gap-6 md:gap-8 mt-10 md:mt-12 mb-6 md:mb-8 flex-wrap">
        {service.partners?.map((partner,i) => (
          <img
            key={i}
            src={partner.path}
            alt={partner.alt}
            className="h-8 w-auto opacity-90"
            
            // onClick={() => partner.link && window.open(partner.link, '_blank')}
          />
        ))}
      </div> */}
      <div className="mx-auto px-4 md:px-16 mt-6 mb-8">
        <h2 className="text-[#1A2669] font-bold text-2xl md:text-3xl mb-2">{service.second_headline}</h2>
        <p className="text-[#222] text-base">{service.second_description}</p>
      </div>
      <div className="p-3 md:py-6 md:px-16 bg-white mx-auto px-2 md:px-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:min-h-[456px]">
          <div className="md:col-span-2 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-accent p-6 pt-10 rounded">
                <div className='text-secondary mb-2'><Icon icon="fluent:calendar-clock-32-filled" width="40" height="40" /></div>
                <h3 className="font-bold text-xl mb-2">{service.cards[0].title}</h3>
                <p className="text-base text-gray-700">
                  {service.cards[0].description}
                </p>
              </div>
              <div className="bg-accent p-6 pt-10 rounded">
                <div className='text-secondary mb-2'><Icon icon="bi:person-fill" width="40" height="40" /></div>
                <h3 className="font-bold text-xl mb-2">{service.cards[1].title}</h3>
                <p className="text-base text-gray-700">
                  {service.cards[1].description}
                </p>
              </div>
            </div>
            <div className="bg-accent p-6 pt-10 rounded">
              <div className='text-secondary mb-2'><Icon icon="solar:scale-bold" width="40" height="40" /></div>
                <h3 className="font-bold text-xl mb-2">{service.cards[2].title}</h3>
              <p className="text-base text-gray-700">
                {service.cards[2].description}
              </p>
            </div>
          </div>
          <div className="bg-accent p-6 pt-10 rounded flex flex-col justify-between min-h-full">
            <div className='mb-6 md:mb-10'>
              <div className='text-secondary mb-2'><Icon icon="streamline-freehand:saving-piggy-bank" width="40" height="40" /></div>
                
              <h3 className="font-bold text-xl mb-2">{service.cards[3].title}</h3>
              <p className="text-base text-gray-700">
                {service.cards[3].description}
                <br /><br />
                Leverage global time zones to keep your projects moving around the clock.
              </p>
            </div>
            <Button className='bg-primary text-white w-fit text-md rounded-2xl px-6 w-36 md:w-44 mt-auto' ><Link href='/contact-us'> Contact Us </Link></Button>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-16 py-8 bg-white mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Case Studies</h2>
        <div className="bg-primary text-white rounded-2xl px-4 md:px-6 py-10 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {service.caseStudies?.map((caseStudy, index) => (<React.Fragment key={index}>
            <div  className='flex flex-col px-2 gap-2'>   
            <div className='text-2xl font-semibold text-secondary'>{caseStudy.title}
              </div>       
              <div className="md:w-full text-base leading-relaxed ">

            {caseStudy.description}
          </div>
          
          </div><div className="hidden md:block w-2 h-10 bg-secondary mx-6" /></React.Fragment>))}
          
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;


