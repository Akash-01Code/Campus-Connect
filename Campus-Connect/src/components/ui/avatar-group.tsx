
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

interface AvatarGroupProps {
  users: {
    name: string;
    image?: string;
  }[];
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AvatarGroup = ({ 
  users, 
  max = 4, 
  size = 'md',
  className
}: AvatarGroupProps) => {
  const displayUsers = users.slice(0, max);
  const remainingCount = users.length - max;
  
  const sizeClasses = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base'
  };
  
  const borderWidth = {
    sm: '-ml-1.5',
    md: '-ml-2',
    lg: '-ml-2.5'
  };

  return (
    <div className={cn("flex items-center", className)}>
      {displayUsers.map((user, index) => (
        <Avatar 
          key={index} 
          className={cn(
            sizeClasses[size], 
            "ring-2 ring-background", 
            index !== 0 && borderWidth[size]
          )}
        >
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      
      {remainingCount > 0 && (
        <div className={cn(
          sizeClasses[size],
          "rounded-full bg-muted flex items-center justify-center font-medium",
          borderWidth[size],
          "ring-2 ring-background"
        )}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
