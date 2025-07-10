import React from 'react';
import { partners as partneritems } from '@/constants/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

function partners() {
  return (
    <div className="md:h-screen grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:px-14 md:py-7 items-center">
      <div className="rounded-sm bg-primary py-5 w-full h-full flex flex-col space-y-4  justify-center px-10">
        <div className="space-y-2">
          <div className="pre-header-secondary uppercase font-bold">
            Our Partners
          </div>
          <div className="text-3xl text-white">Meet our trusted partners</div>
          <div className="text-white text-sm">
            At the core of our success is a network of trusted partners who
            share our commitment to innovation and excellence. These strategic
            alliances enhance our ability to deliver exceptional IT solutions,
            as each partner brings unique expertise and resources.
            <br className='my-1'></br>
            By collaborating with industry leaders, we leverage their strengths
            to provide cutting-edge technologies and tailored consulting
            services that meet our clients' evolving needs. This approach allows
            us to stay ahead of technological trends, ensuring our clients
            benefit from the latest advancements.
            <br className='my-1'></br>
            Together with our partners, we foster a dynamic environment where
            collaboration thrives, leading to transformative solutions that
            elevate business performance and drive lasting impact.
          </div>
        </div>
        <Button className="bg-secondary text-white w-fit text-md">
          <Link href="/contact-us">Become our partner</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-3 mx-5">
        {partneritems.map((partner, index) => (
          <div className="odd:bg-accent odd:rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300 flex items-center justify-center py-6" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={partner.path} alt={partner.alt} width={80} height={80}
                className="transition duration-300 hover:filter hover:brightness-75 hover:sepia hover:hue-rotate-180" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default partners;
