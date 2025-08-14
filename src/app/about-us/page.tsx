
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Picture1 from '../../../public/assets/team/image 9.png';
import Picture2 from '../../../public/assets/team/image.png';
import { Button } from '@/components/ui/button';
import { company_values, team } from '@/constants/data';
import { BsEnvelopeAtFill, BsLinkedin } from 'react-icons/bs';

function AboutUsPage() {
 return (
   <div className="px-6 md:px-16 py-10 space-y-3 lg:space-y-10">
            <div className="mt-10 mb-10 lg:mb-0 lg:hidden">
          <div className="hidden lg:block w-20 h-28 bg-primary mx-auto"></div>
          <div className="text-center text-primary uppercase font-bold text-5xl mt-2">
            About Us
          </div>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 ">
        <Image 
          src={Picture1} 
          alt="Picture1" 
          className="hidden lg:block"
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="text-base space-y-4">
          <div className="text-secondary uppercase font-bold text-lg">
            It started with a vision
          </div>
          <div>
            <p>Our story began with five friends seasoned IT professionals from
            diverse fields like scientific research, HR, and accounting, with
            experience across both government and private sectors. What brought
            us together was a shared purpose: to solve a problem we saw in our
            own communities. Too many students were graduating with technical
            degrees but struggling to land their first job as developers. The
            gap between education and real-world employment was wide, and we set
            out to close it.</p>
          </div>
          <div>
            <p>We started by offering affordable training programs and
            scholarships, equipping aspiring developers with job readiness
            workshops, technical interview preparation, and guidance for
            stepping into their first roles. As our impact grew, so did our
            ambition. To scale our efforts and reach more people, we founded
            Vision5 Tech LLC, launching professional Microsoft 365 training
            programs for individuals & organizations.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mt-1 lg:gap-2">
        <div className="mt-20 hidden lg:block">
          <div className="w-20 h-28 bg-primary mx-auto"></div>
          <div className="text-center text-primary uppercase font-bold text-5xl mt-2">
            About Us
          </div>
        </div>
        <Image 
          src={Picture2} 
          alt="Picture2" 
          className="hidden lg:block"
          loading="lazy"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="text-base space-y-4 lg:mt-3 ">
          <div>
           <p> Recognizing the untapped potential of global talent, we expanded our
            focus to cultivating skilled developers in Ethiopia and India,
            connecting them with guided job opportunities. What began with small
            freelance projects evolved into a thriving outsourcing operation,
            offering services in cloud computing, full-stack development, AI
            solutions, automation, and more.</p>
          </div>

          <div>
           <p> Today, Vision5 Tech operates as a lean, global team across the
            United States, Ethiopia, and India. We continue to provide
            accessible, high-quality technical training and consultation while
            delivering scalable, cost-effective technology solutions for clients
            in the U.S. and beyond.</p>
          </div>
          <Button>
            <Link href="/contact-us">Book Us Now</Link>
          </Button>
        </div>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 mt-8">
  {company_values.map((value) => {
    const lowerTitle = value.title.toLowerCase();

    const bgColor =
      lowerTitle === 'mission'
        ? 'bg-[#17215c]'
        : lowerTitle === 'vision'
        ? 'bg-[#f45929]'
        : 'bg-primary';

    const titleColor =
      lowerTitle === 'mission'
        ? 'text-[#f45929]'
        : lowerTitle === 'vision'
        ? 'text-[#17215c]'
        : 'text-white';

    return (
      <div
        key={value.title}
        className={`${bgColor} p-8 rounded-lg shadow-lg transition-colors duration-300 mb-10`}
      >
        <h3 className={`uppercase font-bold text-lg ${titleColor}`}>{value.title}</h3>
        <h4 className="text-white text-2xl mb-2 ">{value.small_description}</h4>
        <p className="text-white/90 text-base">{value.description}</p>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default AboutUsPage;
