
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShoppingBag, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Settings,
  User,
  BookOpen
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-white shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">Campus Connect</span>
        </div>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        <NavItem icon={<Home size={20} />} label="Home" to="/" />
        <NavItem icon={<Users size={20} />} label="Communities" to="/communities" />
        <NavItem icon={<ShoppingBag size={20} />} label="Marketplace" to="/marketplace" />
        <NavItem icon={<Calendar size={20} />} label="Events" to="/events" />
        <NavItem icon={<MessageSquare size={20} />} label="Messages" to="/messages" />
        <NavItem icon={<Bell size={20} />} label="Notifications" to="/notifications" />
        
        <div className="pt-4 mt-4 border-t">
          <NavItem icon={<User size={20} />} label="Profile" to="/profile" />
          <NavItem icon={<Settings size={20} />} label="Settings" to="/settings" />
        </div>
      </nav>
      
      <div className="p-4 border-t mt-auto">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
            <User size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Computer Science</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center py-2 px-3 rounded-lg transition-colors ${
          isActive 
            ? 'bg-primary/10 text-primary font-medium' 
            : 'text-foreground hover:bg-secondary'
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      {label}
    </NavLink>
  );
};

export default Sidebar;
