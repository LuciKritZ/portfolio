import type { Metadata, Viewport } from 'next';
import { Fira_Code } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header.component';
import Providers from '@/providers/index.provider';
import './globals.css';
import { siteConfig } from '@/config/site.config';

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
    <html lang='en' className='scroll-pt-[3.5rem]'>
      <body
        className={cn(
          FiraCode.className,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        <Providers>
          <div className='relative flex min-h-dvh flex-col bg-background'>
            <Header />
            <main className='flex-1'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
