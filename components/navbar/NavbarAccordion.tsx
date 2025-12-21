import Image from 'next/image';
import React from 'react';

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';

const Variant = ({ children }: { children: React.ReactNode }) => {
   return (
      <p className="line-clamp-1 text-[14px]/[30px] hover:bg-text-300 cursor-pointer p-2">
         {children}
      </p>
   );
};

const NavbarAccordion = () => {
   return (
      <div className="">
         <Accordion
            type="single"
            collapsible
            className="flex items-center justify-center text-text-100 "
         >
            <AccordionItem value="item-1" className="border-none relative">
               <AccordionTrigger className="p-0 cursor-pointer no-underline! font-bold [&>svg]:hidden [&[data-state=open]>div]:opacity-100 [&[data-state=closed]>div]:opacity-0 [&[data-state=open]>img]:rotate-180">
                  <p className="animated-underline pr-1">Категории</p>
                  <Image
                     src={'/icons/triangle-down.svg'}
                     alt="open"
                     width={10}
                     height={5}
                     className="transition-transform duration-300"
                  />
               </AccordionTrigger>
               <AccordionContent className="flex flex-col transition-all duration-500 gap-2 pb-0 mt-3 text-balance absolute border w-max max-w-40">
                  <Variant>Категория 1</Variant>
                  <Variant>Категория 2</Variant>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default NavbarAccordion;
