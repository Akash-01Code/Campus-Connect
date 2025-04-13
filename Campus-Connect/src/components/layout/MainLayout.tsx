
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {!isMobile && <Sidebar />}
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 pb-6 pt-2 md:px-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
