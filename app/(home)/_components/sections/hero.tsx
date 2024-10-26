'use client';

import { DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import { MyInfo } from '@/typings';

interface HeroProps {
  myInfo: MyInfo;
}

function Hero({ myInfo }: HeroProps) {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Coffee <3'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className='section-container justify-center rounded-sm flex-col relative overflow-hidden min-h-[400px] mt-6'>
      <div className='flex flex-col md:flex-row-reverse'>
        <div className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative rounded-full mx-auto'>
          <Image
            alt='Hero Image'
            src={myInfo?.heroImageURL ?? ''}
            width={300}
            height={300}
            className='top-0 rounded-full'
          />
          <div className='bg-green-300 w-[28px] h-[28px] rounded-full absolute right-[36px] top-[82%]' />
          <div className='bg-green-300 w-[28px] h-[28px] rounded-full absolute right-[36px] top-[82%] animate-ping' />
        </div>

        <div className='flex flex-col flex-none md:flex-1 w-full justify-center items-start my-10 text-start space-y-4 pr-4'>
          <div className='flex flex-row items-center space-x-2'>
            <p className='text-foreground text-3xl md:text-2xl font-bold tracking-tighter'>
              {siteConfig.fullName}
            </p>
            <Link
              href={siteConfig.resumeDoc}
              target='_blank'
              referrerPolicy='no-referrer'
              className={cn(
                'flex items-center justify-start rounded-full h-6 w-6 p-0'
              )}
            >
              <div
                style={{ width: 'fit-content' }}
                className='flex items-center justify-start group/resume-link hover:w-[240px] w-[50px] transition-all duration-300 ease-in'
              >
                <DownloadIcon className='h-5 w-5' />
                <span className='group-hover/resume-link:opacity-100 opacity-0 ml-2 transition-opacity duration-300 ease-in-out'>
                  Resume&nbsp;
                </span>
              </div>
            </Link>
          </div>
          <p className='text-lg md:text-md'>{siteConfig.description}</p>
          <p className='text-lg md:text-md relative z-20 bg-secondary-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-secondary-foreground/60 text-primary-foreground'>
            <span className=''>{text}</span>
            <Cursor />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
