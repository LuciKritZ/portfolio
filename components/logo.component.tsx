import { Source_Code_Pro } from 'next/font/google';

import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

const Logo = ({
  className = '',
  ...props
}: Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>) => {
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
