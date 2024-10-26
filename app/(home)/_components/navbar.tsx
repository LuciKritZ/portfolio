'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';

import Logo from '@/components/logo.component';
import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';

const Nav = () => {
  const [highlightPath, setHighlightPath] = useState<string>(
    window.location.hash
  );

  return (
    <nav className='flex items-center spacing-x-4 lg:spacing-x-6'>
      <Link
        href='/'
        className={cn('mr-6 flex items-center spacing-x-2')}
        onClick={() => setHighlightPath('')}
      >
        <Logo className='-mt-1' />
      </Link>

      {/* Links */}
      {siteConfig.navigationMenuOptions.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary capitalize hide-in-small-devices mx-2',
            highlightPath === href
              ? 'text-primary underline decoration-wavy'
              : 'text-foreground/80'
          )}
          onClick={() => {
            setHighlightPath(href);
          }}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
