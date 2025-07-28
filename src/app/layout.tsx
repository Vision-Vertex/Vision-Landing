import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/navbar';
import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/layout/footer';

const robotoRegular = Roboto({
  weight: '500',
  subsets: ['latin', 'latin-ext'],
});

const robotoBold = Roboto({
  weight: '600',
  subsets: ['latin', 'latin-ext'],
});

const robotoExtraBold = Roboto({
  weight: '700',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Vison 5',
  icons: {
    icon: '/logos/logo.svg',},
  description: 'Vision 5 description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoRegular.className} `}>
        {/* <PageContainer> */}
          <NavBar />

          {children}
          <Footer />
        {/* </PageContainer> */}
      </body>
    </html>
  );
}
