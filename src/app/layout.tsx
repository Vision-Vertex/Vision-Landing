import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/navbar';
import PageContainer from '@/components/layout/page-container';

const poppinsRegular = Poppins({
  weight: '500',
  subsets: ['latin', 'latin-ext'],
});

const poppinsBold = Poppins({
  weight: '600',
  subsets: ['latin', 'latin-ext'],
});

const poppinsExtraBold = Poppins({
  weight: '700',
  subsets: ['latin', 'latin-ext'],
});

//TODO:Update Metadata and favicon
export const metadata: Metadata = {
  title: 'Vison 5',
  description: 'Vision 5 description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.className} `}>
        {/* <PageContainer> */}
          <NavBar />

          {children}
        {/* </PageContainer> */}
      </body>
    </html>
  );
}
