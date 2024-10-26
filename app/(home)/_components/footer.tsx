import { siteConfig } from '@/config';

import Socials from './socials';

const Footer = () => (
  <footer>
    <div className='section-container mb-6 mt-14 flex-col'>
      <div className='mb-3 flex space-x-4'>
        <Socials width='2.5rem' height='2.5rem' />
      </div>
      <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
        Made with 🩵 by&nbsp;
        <a href={siteConfig.links.website} target='_blank'>
          {siteConfig.author}
        </a>
      </div>
      <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
        <span className='sr-only'>India</span>
        🇮🇳
      </div>
    </div>
  </footer>
);

export default Footer;
