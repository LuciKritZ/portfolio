'use client';

import Link, { LinkProps } from 'next/link';
import React, { HTMLAttributes, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from '../logo.component';
import { siteConfig } from '@/config/site.config';

interface SmNavLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: HTMLAttributes<HTMLAnchorElement>['className'];
}

const SmNavLink = ({ href, onOpenChange, ...props }: SmNavLinkProps) => {
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

export const SmNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Menu</span>
        </Button>
      </SheetTrigger>

      {/* Content */}
      <SheetContent side='right'>
        {/* @see https://stackoverflow.com/a/78728118 */}
        <SheetDescription className='hidden'>Navigation Menu</SheetDescription>
        <SheetTitle>
          <SmNavLink href='/' className='flex items-center'>
            <Logo />
          </SmNavLink>
        </SheetTitle>

        {/* Links */}
        <div className='flex flex-col gap-3 mt-3'>
          {siteConfig.navigationMenuOptions.map(({ href, name }) => (
            <SmNavLink key={name} onOpenChange={setOpen} href={href}>
              {name}
            </SmNavLink>
          ))}

          {/* Social Links */}
          {siteConfig.socialLinks.map(({ href, name }) => (
            <Link key={name} rel='noreferrer' href={href}>
              {name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
