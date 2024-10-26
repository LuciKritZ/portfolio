'use client';

import { HTMLAttributes, useState } from 'react';

import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/components/logo.component';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/config';

interface SmNavbarLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: HTMLAttributes<HTMLAnchorElement>['className'];
}

const SmNavbarLink = ({ href, onOpenChange, ...props }: SmNavbarLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());

        // Closes the open menu dialog box
        onOpenChange?.(false);
      }}
      {...props}
    />
  );
};

const SmNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='w-10 px-0 md:hidden outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
        >
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Menu</span>
        </Button>
      </SheetTrigger>

      {/* Content */}
      <SheetContent side='right' className='w-full border-none'>
        {/* @see https://stackoverflow.com/a/78728118 */}
        <SheetDescription className='hidden'>Navigation Menu</SheetDescription>
        <SheetTitle>
          <SmNavbarLink
            href='/'
            className='flex items-center'
            onClick={() => setOpen(false)}
          >
            <Logo />
          </SmNavbarLink>
        </SheetTitle>

        {/* Links */}
        <div className='flex flex-col gap-3 mt-3'>
          {siteConfig.navigationMenuOptions.map(({ href, name }) => (
            <SmNavbarLink key={name} onOpenChange={setOpen} href={href}>
              {name}
            </SmNavbarLink>
          ))}

          {/* Social Links */}
          {siteConfig.socialLinks.map(({ _id, link, title }) => (
            <Link key={_id} rel='noreferrer' href={link}>
              {title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SmNavbar;
