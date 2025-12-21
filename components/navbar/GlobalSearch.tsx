'use client';

import Image from 'next/image';
import React from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

const GlobalSearch = () => {
   return (
      <div className="border border-text-300 rounded-xl flex items-center justify-center gap-1 flex-1 max-w-[50%]">
         <Input
            className="border-none! focus:outline-none target:border-none outline-none! shadow-none py-3 text-[14px]/[24px]!"
            name="search"
            placeholder="Найти на странице..."
         />
         <Button className="bg-transparent px-4 py-3 cursor-pointer">
            <Image
               src={'/icons/search.svg'}
               alt="search"
               width={24}
               height={24}
            />
         </Button>
      </div>
   );
};

export default GlobalSearch;
