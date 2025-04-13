
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bell, 
  MessageSquare, 
  Search as SearchIcon, 
  Menu, 
  X, 
  User,
  Home,
  BookOpen,
  ShoppingBag,
  Calendar,
  Users,
  Moon,
  Sun,
  LogOut
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavLink } from 'react-router-dom';
import { GlobalSearch } from '@/components/common/GlobalSearch';
import { useTheme } from '@/contexts/theme-context';
import { useAuth } from '@/contexts/auth-context';
import { AuthModal } from '@/components/auth/AuthModal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleProfileClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    toast("You have been logged out", {
      description: "Come back soon!",
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-10 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-all">
        <div className="flex h-16 items-center px-4 md:px-6">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold">Campus Connect</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <MobileNavItem icon={<Home className="mr-2 h-4 w-4" />} label="Home" to="/" />
                    <MobileNavItem icon={<Users className="mr-2 h-4 w-4" />} label="Communities" to="/communities" />
                    <MobileNavItem icon={<ShoppingBag className="mr-2 h-4 w-4" />} label="Marketplace" to="/marketplace" />
                    <MobileNavItem icon={<Calendar className="mr-2 h-4 w-4" />} label="Events" to="/events" />
                    <MobileNavItem icon={<MessageSquare className="mr-2 h-4 w-4" />} label="Messages" to="/messages" />
                    <MobileNavItem icon={<User className="mr-2 h-4 w-4" />} label="Profile" to="/profile" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Logo - only show on large screens or when search is closed on mobile */}
          {(!isMobile || !isSearchOpen) && (
            <div className="flex items-center gap-2 mr-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold hidden md:block">Campus Connect</span>
            </div>
          )}

          {/* Search bar - adaptive */}
          <div className={`${isSearchOpen ? 'flex-1' : 'hidden md:flex md:flex-1 max-w-md mx-4'}`}>
            {isMobile && isSearchOpen ? (
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for communities, marketplace items, events..." 
                  className="w-full pl-9 py-2 pr-4 rounded-full bg-secondary border-none"
                />
              </div>
            ) : (
              <GlobalSearch />
            )}
          </div>

          {/* Mobile: Search toggle button */}
          {isMobile && !isSearchOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto mr-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          {/* Mobile: Close search button */}
          {isMobile && isSearchOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close search</span>
            </Button>
          )}

          {/* Action buttons */}
          {(!isMobile || !isSearchOpen) && (
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="animate-fade-in">
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative" onClick={() => toast("Notifications", {description: "You have 3 new notifications"})}>
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                <span className="sr-only">Notifications</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative" onClick={() => toast("Messages", {description: "You have 2 unread messages"})}>
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                <span className="sr-only">Messages</span>
              </Button>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full overflow-hidden">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-muted" onClick={handleProfileClick}>
                  <User className="h-4 w-4" />
                  <span className="sr-only">Profile</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </nav>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

const MobileNavItem = ({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center py-2 px-3 rounded-md transition-all duration-200 ${isActive ? 'bg-secondary text-primary font-medium' : 'text-foreground hover:bg-secondary/50'}`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default Navbar;
