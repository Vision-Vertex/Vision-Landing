import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

function ad() {
  return (
    <div className="bg-primary  rounded-2xl sm:rounded-3xl flex items-center  justify-between px-4 sm:px-10 py-3 sm:py-5  mx-auto my-20 sm:my-28 md:my-10 lg:my-10 lg:mt-60">
      <div>
        <div className="text-secondary font-bold uppercase text-base">Join Us Now</div>
        <div className='text-white text-base'>Ready to get our services?</div>
      </div>
      <div>
        <Button variant="secondary" className='text-white text-xs sm:text-base'>
          <Link href="/contact-us">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}

export default ad;
