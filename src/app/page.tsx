import Hero from '@/components/home/hero';
import Partners from '@/components/home/partners';
import Stat from '@/components/home/stat';
import Services from '@/components/home/services';
import Testmonial from '@/components/home/testmonial';

export default function Home() {
  return (
    <div>
      <Hero />
        <Partners />
        <Services/>
        <Stat/>
        <Testmonial/>

      {/* <PageContainer>
      </PageContainer> */}
    </div>
  );
}
