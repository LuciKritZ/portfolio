import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Nav from './nav/index.nav';
import { SmNav } from './nav/sm.nav';

const Header = () => {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-2xl items-center mx-auto'>
        <Nav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            {/* Render Nav Icons */}
            {siteConfig.socialLinks.map(
              ({ href, icon: Icon, name, srTitle }) => (
                <Link
                  className='hide-in-small-devices'
                  key={name}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'w-10 px-0'
                    )}
                  >
                    <Icon className='h-4 w-4' />
                    <span className='sr-only'>{srTitle}</span>
                  </div>
                </Link>
              )
            )}

            {/* Navbar for smaller devices */}
            <SmNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
