import AccountButtons from './AccountButtons';
import GlobalSearch from './GlobalSearch';
import { Button } from '../ui/button';

const Navbar = () => {
   return (
      <header className="mx-auto px-10 max-sm:px-5 w-full fixed-center-x max-w-360">
         <div className="px-[clamp(0px,calc((100vw-1024px)*0.1538),64px)] py-9 max-sm:py-5 flex items-center gap-10 max-md:gap-6">
            <nav className="flex items-center gap-6 max-sm:gap-4 flex-1 ">
               <p className="h3-bold-black">
                  Psy<span className="max-md:hidden">lence</span>
               </p>
               <GlobalSearch />
            </nav>
            <nav className="flex gap-6 items-center">
               <Button className="max-md:hidden bg-transparent h-full hover:bg-transparent cursor-pointer shadow-none text-text-100 px-0 py-0 animated-underline ">
                  Стать психологом
               </Button>
               <AccountButtons autorized={false} />
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
