import { CSSProperties, HTMLAttributes } from 'react';

import { SocialIcon } from 'react-social-icons';

import { siteConfig } from '@/config';

interface SocialsProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const Socials = ({
  className = '',
  width = '2.25rem',
  height = '2.25rem',
}: SocialsProps) => (
  <>
    {siteConfig.socialLinks.map(({ link, title, _id }) => (
      <SocialIcon
        key={_id}
        href={link}
        target='_blank'
        network={title.toLowerCase().trim()}
        bgColor='transparent'
        className={className}
        style={{ width, height }}
      />
    ))}
  </>
);

export default Socials;
