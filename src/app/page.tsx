import Hero from '@/components/home/hero';
import Partners from '@/components/home/partners';
import Stat from '@/components/home/stat';
import Services from '@/components/home/services';
import Testmonial from '@/components/home/testmonial';
import AdBanner from '@/components/home/ad';

export default function Home() {
  return (
    <div className='flex flex-col gap-0'>
      <Hero />
        <Partners />
        <Services/>
        <Stat/>
        <Testmonial/>
        <div className='px-4 md:px-14'>
        <AdBanner/>
</div>
      {/* <PageContainer>
      </PageContainer> */}
    </div>
  );
}
