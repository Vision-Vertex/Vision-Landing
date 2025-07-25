import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-52px)]'>
          <div className=' p-4 md:px-14 md:py-7'>{children}</div>
        </ScrollArea>
      ) : (
        <div className=' p-4 md:px-14 md:py-7'>{children}</div>
      )}
    </>
  );
}