'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Logo from '../logo.component';
import { siteConfig } from '@/config/site.config';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center spacing-x-4 lg:spacing-x-6'>
      <Link href='/' className={cn('mr-6 flex items-center spacing-x-2')}>
        <Logo className='-mt-1' />
      </Link>

      {/* Links */}
      {siteConfig.navigationMenuOptions.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary capitalize hide-in-small-devices mx-2',
            pathname === href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
