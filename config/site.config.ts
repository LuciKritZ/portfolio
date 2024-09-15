import { Icons } from '@/components/icons.component';

const links = {
  twitter: 'https://x.com/lucikritz',
  github: 'https://github.com/LuciKritZ',
  website: 'https://krishalshah.in',
};

export const siteConfig = {
  name: '<LuciBytes />',
  url: 'https://krishalshah.in',
  description:
    "I'm a Full Stack Software Engineer passionate about crafting seamless digital experiences. With a robust background in JavaScript and its ecosystem — from Next, React, & Express to React Native for mobile development — I bring a versatile skill set to the table.",
  author: 'Krishal',
  links,
  navigationMenuOptions: [
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'About',
      href: '/about',
    },
  ],
  socialLinks: [
    {
      name: 'Github',
      href: links.github,
      srTitle: 'Github Link',
      icon: Icons.gitHub,
    },
    {
      name: 'Twitter',
      href: links.twitter,
      srTitle: 'Twitter Link',
      icon: Icons.twitter,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
