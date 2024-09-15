import { siteConfig } from '@/config/site.config';
import { Mail } from 'lucide-react';
import { Icons } from './icons.component';

const Footer = () => {
  return (
    <footer>
      <div className='mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:lucikritz@icloud.com'
          >
            <span className='sr-only'>Mail</span>
            <Mail className='h-6 w-6' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.twitter}>
            <span className='sr-only'>Twitter</span>
            <Icons.twitter className='h-6 w-6' />
          </a>
          <a target='_blank' rel='noreferrer' href={siteConfig.links.twitter}>
            <span className='sr-only'>Github</span>
            <Icons.gitHub className='h-6 w-6' />
          </a>
        </div>

        <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
          <a href={siteConfig.links.website} target='_blank'>
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
