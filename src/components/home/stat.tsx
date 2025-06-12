import React from 'react';
import { stats } from '@/constants/data';

function stat() {
  return (
    <div className="bg-accent w-screen grid grid-cols-2 px-40 py-20 gap-20 justify-between">
      <div>
        <div className="text-4xl">
          Helping local & international{' '}
          <span className="text-secondary">business reinvent themselves</span>
        </div>
        <div>We reached here with our hard work and dedication</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat) => (
          <div className="flex gap-2 items-center">
            {<stat.icon size={24} />}
            <div className='text-gray-600'>
              <div className='text-4xl '>{stat.number.toLocaleString()}</div>
              <div className='text-sm font-light'>{stat.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default stat;
