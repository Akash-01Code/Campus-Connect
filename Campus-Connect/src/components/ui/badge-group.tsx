
import React, { ReactNode } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface BadgeGroupProps {
  badges: {
    label: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
  }[];
  className?: string;
  limit?: number;
}

export const BadgeGroup = ({ 
  badges, 
  className,
  limit = 3
}: BadgeGroupProps) => {
  const displayBadges = badges.slice(0, limit);
  const remaining = badges.length - limit;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {displayBadges.map((badge, index) => (
        <Badge 
          key={index} 
          variant={badge.variant || "secondary"}
          className="text-xs font-normal"
        >
          {badge.label}
        </Badge>
      ))}
      
      {remaining > 0 && (
        <Badge variant="outline" className="text-xs font-normal">
          +{remaining} more
        </Badge>
      )}
    </div>
  );
};
