import React from 'react';

import Navbar from '@/components/navbar';
import AppSidebar from '@/components/sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const Layout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar />
         <SidebarProvider>
            <AppSidebar />
            <main>
               <SidebarTrigger className="fixed translate-x-5 translate-y-[-50%] bottom-0 bg-primary-dark text-text-500 hover:bg-text-100 hover:text-text-500 transition-colors duration-300 cursor-pointer rounded-full p-5" />
               {children}
            </main>
         </SidebarProvider>
         <footer>footer</footer>
      </div>
   );
};

export default Layout;
