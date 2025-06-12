import React from 'react';
import { partners as partneritems } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';

function partners() {
  return (
    <div className="h-screen grid grid-cols-2 gap-10 p-4 md:px-14 md:py-7 items-center">
      <div className="rounded-sm bg-primary w-full h-full flex flex-col space-y-4  justify-center px-10">
        <div className='space-y-2'>
        <div className="pre-header-secondary uppercase font-bold">
          Our Partners
        </div>
        <div className="text-3xl text-white">Meet our trusted partners</div>
        <div className='text-white'>
          At Vision5 Tech, we help businesses cut costs and scale faster with
          expert offshore development teams and tailored technology solutions.
          From Microsoft Power Platform to secure full stack development, we
          deliver innovation you can trust — at a fraction of the cost.
        </div>
        </div>
        <Button className='bg-secondary text-white w-fit text-md'>Become our partner</Button>
      </div>
      <div className="grid grid-cols-3 gap-3 mx-5">
        {partneritems.map((partner) => (
          <div className="odd:bg-accent odd:rounded-xl">
            <Image
              src={partner.path}
              alt={partner.alt}
              className="py-4 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default partners;
