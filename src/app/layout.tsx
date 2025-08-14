import type { Metadata, Viewport } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/navbar';
import PageContainer from '@/components/layout/page-container';
import Footer from '@/components/layout/footer';

const robotoRegular = Roboto({
  weight: '500',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
});

const robotoBold = Roboto({
  weight: '600',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: false,
});

const robotoExtraBold = Roboto({
  weight: '700',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Vision5 Tech - Global Technology Solutions',
  icons: {
    icon: '/logos/logo.svg',
  },
  description: 'Cutting Costs, Elevating Quality: Your Global Tech Partner. Expert offshore development teams and tailored technology solutions.',
  keywords: 'technology solutions, offshore development, Microsoft Power Platform, full stack development, AI solutions',
  authors: [{ name: 'Vision5 Tech' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Vision5 Tech - Global Technology Solutions',
    description: 'Cutting Costs, Elevating Quality: Your Global Tech Partner',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision5 Tech - Global Technology Solutions',
    description: 'Cutting Costs, Elevating Quality: Your Global Tech Partner',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#17215b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body className={`${robotoRegular.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
