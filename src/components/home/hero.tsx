'use client'
import React from 'react';
import Tentative from '../../../public/landing.svg';
import Image from 'next/image';
import V from '../../../public/icons/vision-logo/v.svg';
import I from '../../../public/icons/vision-logo/I (1).svg';
import S from '../../../public/icons/vision-logo/S.svg';
import I2 from '../../../public/icons/vision-logo/i.svg';
import O from '../../../public/icons/vision-logo/O.svg';
import N from '../../../public/icons/vision-logo/N.svg';
import { motion } from 'framer-motion';

function hero() {
  return (
    <>
      <div className="bg-accent  w-full p-4 md:px-14 md:py-7 h-[70vh] flex items-center gap-10 justify-center ">
        {/* <Image
          src={Tentative}
          width={900}
          height={900}
          alt={''}
          className="mx-auto my-auto"
        /> */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          <Image src={V} alt='V' width={150} height={150} />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Image src={I2} alt='I' width={25} height={25} />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image src={S} alt='S' width={220} height={220} />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Image src={I} alt='I' width={25} height={25} />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Image src={O} alt='O' width={170} height={170} />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image src={N} alt='N' width={110} height={110} />
        </motion.div>
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
