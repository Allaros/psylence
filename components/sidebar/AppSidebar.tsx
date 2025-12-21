import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';

// Menu items.
const items = [
   {
      title: 'Главная',
      url: '#',
      icon: Home,
   },
   {
      title: 'Тесты',
      url: '#',
      icon: Inbox,
   },
   {
      title: 'Профиль',
      url: '#',
      icon: Calendar,
   },
   {
      title: 'Статьи',
      url: '#',
      icon: Search,
   },
];

export default function AppSidebar() {
   return (
      <Sidebar>
         <SidebarContent className='className="flex flex-col bg-primary-dark text-text-500 '>
            <SidebarGroup className="flex-1">
               <SidebarGroupLabel className="mt-8">
                  <p className="h3-bold-white">Psylence</p>
               </SidebarGroupLabel>
               <SidebarGroupContent className="flex-1 mt-6">
                  <SidebarMenu>
                     {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton
                              asChild
                              className=" transition-colors duration-100 py-6! hover:text-text-400 hover:bg-[#ffffff22]"
                           >
                              <a href={item.url} className="text-xl">
                                 <item.icon className="size-5!" />
                                 <span>{item.title}</span>
                              </a>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="pb-6">
               <SidebarGroupContent>
                  <SidebarMenu>
                     <SidebarMenuItem>
                        <SidebarMenuButton className=" transition-colors duration-100 py-6! hover:text-text-400 hover:bg-[#ffffff22]">
                           <a
                              href="#"
                              className="text-body flex items-center gap-2 text-xl!"
                           >
                              <Settings className="size-6" />
                              Настройки
                           </a>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarContent>
      </Sidebar>
   );
}
