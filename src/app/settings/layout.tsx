
import React from 'react';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
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
  { title: 'Home', url: '/settings/home', icon: Home },
  { title: 'Profile', url: '/settings/profile', icon: Settings },
  { title: 'Billing', url: '/settings/billing', icon: Inbox },
  { title: 'API Keys', url: '/settings/api', icon: Calendar },
  { title: 'Dashboard', url: '/settings/dashboard', icon: Search },
];

export const metadata = {
  title: 'Settings - MyApp',
};

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="shrink-0">
      
        <Sidebar className='mt-16'>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8 overflow-auto">
        <SidebarTrigger />
        {children}
      </main>
    </div>
    </SidebarProvider>
  );
}