import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants/routes';

import { Button } from '../ui/button';

const AccountButtons = ({ autorized }: { autorized: boolean }) => {
   return (
      <div>
         {autorized ? (
            <div>Account</div>
         ) : (
            <>
               <div className="flex items-center justify-center gap-4 max-md:hidden">
                  <Link href={ROUTES.SIGN_IN}>
                     <Button className="bg-transparent hover:bg-primary-dark hover:text-text-400 text-text-dark shadow-none border border-primary-dark cursor-pointer  ">
                        Вход
                     </Button>
                  </Link>{' '}
                  <Link href={ROUTES.SIGN_UP}>
                     <Button className="bg-primary-pink hover:bg-primary-pinkHover cursor-pointer">
                        Регистрация
                     </Button>
                  </Link>
               </div>
               <div className="flex md:hidden items-center justify-center gap-4">
                  <Button className="bg-transparent p-3 hover:bg-primary-dark hover:text-text-400 text-text-dark shadow-none border border-primary-dark cursor-pointer  ">
                     <CircleUserRound />
                  </Button>{' '}
               </div>
            </>
         )}
      </div>
   );
};

export default AccountButtons;
