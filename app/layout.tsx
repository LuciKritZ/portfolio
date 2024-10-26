import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Fira_Code } from 'next/font/google';

import { TooltipProvider } from '@/components/ui/tooltip';
import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/providers/theme.provider';

const Footer = dynamic(() => import('./(home)/_components/footer'));

import './globals.css';

import Header from './(home)/_components/header';

const FiraCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(FiraCode.className, 'antialiased')}>
        <ThemeProvider>
          <TooltipProvider>
            <div className='relative flex min-h-screen flex-col max-w-screen'>
              <Header />
              <main className='flex-1 h-screen-without-navbar'>{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
