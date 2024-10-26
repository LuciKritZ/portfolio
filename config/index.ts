import { Icons } from '@/components/icons.component';

const links = {
  twitter: 'https://x.com/lucikritz',
  github: 'https://github.com/LuciKritZ',
  website: 'https://krishalshah.in',
};

export const siteConfig = {
  name: '<Krishal />',
  fullName: 'Krishal Shah',
  url: 'https://krishalshah.in',
  description:
    'I am a Full Stack Software Engineer dedicated to creating seamless digital experiences. With a strong foundation in JavaScript and its ecosystem — including Next.js, React, Express, and React Native for mobile development — I offer a versatile skill set to drive impactful solutions.',
  author: 'Krishal',
  links,
  navigationMenuOptions: [
    {
      name: 'Blogs',
      href: '/blogs',
    },
  ],
  socialLinks: [
    {
      link: 'https://twitter.com/lucikritz',
      _id: '1826a7ff-b0ac-426a-a0cf-65d3e882e4cd',
      title: 'X',
    },
    {
      link: 'https://linkedin.com/in/krishal-shah',
      _id: '37bba0c4-d717-464d-8740-7ba6b60c2ce2',
      title: 'LinkedIn',
    },
    {
      _id: '86dc6c6f-add8-4025-96cf-e07b7aa907b2',
      title: 'Github',
      link: 'https://github.com/LuciKritZ',
    },
    {
      link: 'https://instagram.com/lucikritz',
      _id: 'ae975201-8802-4f3f-8b90-9a862f1ecdde',
      title: 'Instagram',
    },
  ],
  loadingTexts: [
    ' (•◡•) /',
    'ᕦ(⩾﹏⩽)ᕥ',
    '◕‿↼',
    '(◕‿◕✿)',
    '(•̀ᴗ•́)و ̑̑',
    '【≽ܫ≼】',
    'ᶘ ᵒᴥᵒᶅ',
    '┌( ಠ_ಠ)┘',
    '¯_( ͡° ͜ʖ ͡°)_/¯',
  ],
  resumeDoc:
    'https://docs.google.com/document/d/1L9vqJXg33BBBuceWqZSsKmsw-56PMOFQKDgCBfLqmz0',
};

export type SiteConfig = typeof siteConfig;
