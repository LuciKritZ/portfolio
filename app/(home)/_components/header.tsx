import ToggleTheme from '@/components/toggle-theme';
import { Social } from '@/typings';

import Navbar from './navbar';
import SmNavbar from './sm-navbar';
import Socials from './socials';

const Header = () => (
  <header className='z-50 sticky top-0 w-full flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
    <div className='section-container h-14 container'>
      <Navbar />
      <div className='flex flex-1 items-center justify-end'>
        <nav className='flex items-center'>
          {/* Render Nav Icons */}
          <Socials className='hide-in-small-devices' />

          {/* Change theme */}
          <ToggleTheme />

          {/* Navbar for smaller devices */}
          <SmNavbar />
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
