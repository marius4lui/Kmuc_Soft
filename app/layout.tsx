import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { env } from '@/lib/env';

export const metadata: Metadata = {
  title: {
    default: env.COMPANY_NAME,
    template: `%s | ${env.COMPANY_NAME}`,
  },
  description: env.COMPANY_CONTENT,
  openGraph: {
    title: env.COMPANY_NAME,
    description: env.COMPANY_CONTENT,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
