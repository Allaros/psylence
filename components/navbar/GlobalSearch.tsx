'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { formUrlQuery, removeKeysFromQuery } from '@/lib/url';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

const GlobalSearch = () => {
   const router = useRouter();

   const searchParams = useSearchParams();
   const query = searchParams.get('query') || '';

   const [searchQuery, setSearchQuery] = useState(query);

   useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
         if (searchQuery) {
            const newUrl = formUrlQuery({
               params: searchParams.toString(),
               key: 'query',
               value: searchQuery,
            });

            router.push(newUrl, { scroll: false });
         } else {
            const newUrl = removeKeysFromQuery({
               params: searchParams.toString(),
               keysToRemove: ['query'],
            });

            router.push(newUrl, { scroll: false });
         }
      }, 500);

      return () => clearTimeout(delayDebounceFn);
   }, [searchQuery, router]);

   return (
      <div className="border border-text-300 rounded-[6px] flex items-center justify-center gap-1 flex-1 lg:max-w-[50%]">
         <Input
            className="border-none! focus:outline-none target:border-none outline-none! shadow-none py-3 text-[14px]/[24px]!"
            name="search"
            placeholder="Найти на странице..."
            onChange={(e) => setSearchQuery(e.target.value)}
         />
         <Button className="bg-transparent px-4 py-3 cursor-pointer shadow-none max-sm:p-3 hover:bg-primary-dark rounded-[6px]">
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
