import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { Source_Code_Pro } from 'next/font/google';
import { HTMLAttributes } from 'react';

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

const Logo = ({
  className = '',
  ...props
}: Omit<HTMLAttributes<HTMLSpanElement>, 'children'>) => {
  return (
    <span
      className={cn('font-semibold', SourceCodePro.className, className)}
      {...props}
    >
      {siteConfig.name}
    </span>
  );
};

export default Logo;
