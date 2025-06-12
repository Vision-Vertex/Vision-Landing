import React from 'react';
import Tentative from '../../../public/landing.svg';
import Image from 'next/image';

function hero() {
  return (
    <>
      <div className="bg-accent  w-full p-4 md:px-14 md:py-7 h-[70vh] flex flex-col align-items-center justify-between">
        <Image
          src={Tentative}
          width={900}
          height={900}
          alt={''}
          className="mx-auto my-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 p-4 md:px-14 md:py-7">
        <h1 className="text-4xl font-bold">
          Cutting Costs, Elevating Quality: Your Global Tech Partner
        </h1>
        <div className=''>
          At Vision5 Tech, we help businesses cut costs and scale faster with
          expert offshore development teams and tailored technology solutions.
          From Microsoft Power Platform to secure full stack development, we
          deliver innovation you can trust — at a fraction of the cost.
        </div>
      </div>
    </>
  );
}

export default hero;
