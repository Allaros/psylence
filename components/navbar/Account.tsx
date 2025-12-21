import React from 'react';

import { Button } from '../ui/button';

const Account = ({ autorized }: { autorized: boolean }) => {
   return (
      <div>
         {autorized ? (
            <div>Account</div>
         ) : (
            <div className="flex items-center justify-center gap-4">
               <Button className="bg-transparent hover:bg-primary-dark hover:text-text-400 text-text-dark shadow-none border border-primary-dark cursor-pointer  ">
                  Вход
               </Button>{' '}
               <Button className="bg-primary-pink hover:bg-primary-pinkHover cursor-pointer">
                  Регистрация
               </Button>
            </div>
         )}
      </div>
   );
};

export default Account;
