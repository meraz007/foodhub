import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FoodHub - Premium Imported Food Products in Bangladesh',
  description: 'Shop the finest imported food products and international brands in Bangladesh. Chocolate, Coffee, Snacks, Ramen, and more.',
  keywords: 'imported food, international brands, chocolate, coffee, snacks, Bangladesh, online shopping',
  authors: [{ name: 'FoodHub' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: { url: '/apple-icon.png', type: 'image/png' },
  },
  metadataBase: new URL('https://foodhub.com'),
  openGraph: {
    title: 'FoodHub - Premium Imported Food Products',
    description: 'Shop the finest imported food products and international brands in Bangladesh',
    url: 'https://foodhub.com',
    siteName: 'FoodHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FoodHub - Premium Food Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoodHub - Premium Imported Food Products',
    description: 'Shop the finest imported food products and international brands in Bangladesh',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


