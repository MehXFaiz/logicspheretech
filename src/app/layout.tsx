import type { Metadata } from 'next';
import { Poppins, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import { WhatsAppFloatingBtn } from '@/components/common/WhatsAppFloatingBtn';
import { LiveChatWidget } from '@/components/common/LiveChatWidget';
import { CookieConsent } from '@/components/common/CookieConsent';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'LOGICSPHERE TECH | Custom Software, AI & Web Development House',
    template: '%s | LOGICSPHERE TECH',
  },
  description:
    'We design and develop websites, mobile applications, custom software, AI solutions, and digital products for startups and enterprises worldwide.',
  keywords: [
    'LogicSphere Tech',
    'Software House',
    'Custom Software Development',
    'Web Development',
    'AI Solutions',
    'Mobile App Development',
    'Next.js 16 Agency',
    'SaaS Development',
    'UI UX Design',
    'Enterprise RAG Copilot',
  ],
  authors: [{ name: 'LOGICSPHERE TECH Engineering Team' }],
  creator: 'LOGICSPHERE TECH',
  publisher: 'LOGICSPHERE TECH',
  metadataBase: new URL('https://logicspheretech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logicspheretech.com',
    title: 'LOGICSPHERE TECH | Premier Software & AI Engineering House',
    description:
      'We build digital solutions that grow your business. Custom web, mobile, AI, and cloud architectures engineered by senior specialists.',
    siteName: 'LOGICSPHERE TECH',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'LOGICSPHERE TECH Software House Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOGICSPHERE TECH | Software House & AI Engineering',
    description:
      'We build digital solutions that grow your business. Custom web, mobile, AI, and cloud architectures engineered by senior specialists.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LOGICSPHERE TECH',
  url: 'https://logicspheretech.com',
  logo: 'https://logicspheretech.com/logo.png',
  description:
    'Premier software house engineering custom websites, web applications, mobile apps, AI solutions, and SaaS platforms.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '100 Innovation Way, Suite 800',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-415-555-0199',
    contactType: 'customer service',
    email: 'contact@logicspheretech.com',
    availableLanguage: ['English'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#050816] text-slate-100 font-sans antialiased selection:bg-[#06b6d4] selection:text-slate-950">
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
          <WhatsAppFloatingBtn />
          <LiveChatWidget />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
