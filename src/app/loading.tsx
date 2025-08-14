'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import V from '../../public/icons/vision-logo/v.svg';
import I from '../../public/icons/vision-logo/I2.svg';
import S from '../../public/icons/vision-logo/S.svg';
import I2 from '../../public/icons/vision-logo/i.svg';
import O from '../../public/icons/vision-logo/O.svg';
import N from '../../public/icons/vision-logo/N.svg';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Vision5 Logo Animation */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={V} alt="V" width={80} height={80} />
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={I2} alt="I" width={15} height={15} />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={S} alt="S" width={120} height={120} />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={I} alt="I" width={15} height={15} />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={O} alt="O" width={90} height={90} />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={N} alt="N" width={60} height={60} />
        </motion.div>
      </div>
    </div>
  );
}