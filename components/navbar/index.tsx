import Image from 'next/image';

import Account from './Account';
import GlobalSearch from './GlobalSearch';
import { Button } from '../ui/button';

const Navbar = () => {
   return (
      <header className="mx-auto px-10 w-full fixed">
         <div className="px-16 py-9 flex items-center gap-10">
            <nav className="flex items-center gap-6 flex-1">
               <Image
                  src={'/images/Logo.svg'}
                  alt="Logo"
                  width={160}
                  height={32}
               />
               <GlobalSearch />
            </nav>
            <nav className="flex gap-6 items-center">
               <Button className="bg-transparent h-full hover:bg-transparent cursor-pointer shadow-none text-text-100 px-0 py-0 animated-underline ">
                  Стать психологом
               </Button>
               <Account autorized={false} />
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
