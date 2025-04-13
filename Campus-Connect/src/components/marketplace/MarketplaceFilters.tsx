
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

export const MarketplaceFilters = () => {
  const isMobile = useIsMobile();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    condition: '',
    priceRange: [0, 500]
  });

  // Price formatter
  const formatPrice = (value: number) => `$${value}`;

  // Filter badges
  const getActiveFilterBadges = () => {
    const badges = [];
    
    if (activeFilters.category) {
      badges.push({ key: 'category', label: `Category: ${activeFilters.category}` });
    }
    
    if (activeFilters.condition) {
      badges.push({ key: 'condition', label: `Condition: ${activeFilters.condition}` });
    }
    
    if (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 500) {
      badges.push({ 
        key: 'price', 
        label: `Price: ${formatPrice(activeFilters.priceRange[0])} - ${formatPrice(activeFilters.priceRange[1])}` 
      });
    }
    
    return badges;
  };

  const clearFilters = () => {
    setActiveFilters({
      category: '',
      condition: '',
      priceRange: [0, 500]
    });
  };

  const renderFilterContent = () => (
    <>
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="font-medium">Category</h3>
          <Select value={activeFilters.category} onValueChange={(value) => setActiveFilters({...activeFilters, category: value})}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="textbooks">Textbooks</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Condition</h3>
          <Select value={activeFilters.condition} onValueChange={(value) => setActiveFilters({...activeFilters, condition: value})}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
              <SelectItem value="poor">Poor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Price Range</h3>
            <span className="text-sm text-muted-foreground">
              {formatPrice(activeFilters.priceRange[0])} - {formatPrice(activeFilters.priceRange[1])}
            </span>
          </div>
          <Slider
            defaultValue={[0, 500]}
            min={0}
            max={500}
            step={10}
            value={activeFilters.priceRange}
            onValueChange={(value) => setActiveFilters({...activeFilters, priceRange: value as [number, number]})}
          />
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search marketplace..."
            className="pl-9 pr-12"
          />
          <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                {renderFilterContent()}
              </div>
              <SheetFooter className="flex-row gap-3 sm:flex-row">
                <SheetClose asChild>
                  <Button variant="outline" onClick={clearFilters} className="w-full">
                    Reset filters
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full">Apply filters</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {getActiveFilterBadges().length > 0 && (
          <div className="flex flex-wrap gap-2">
            {getActiveFilterBadges().map((badge) => (
              <Badge key={badge.key} variant="secondary" className="gap-1">
                {badge.label}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => {
                    if (badge.key === 'price') {
                      setActiveFilters({...activeFilters, priceRange: [0, 500]});
                    } else {
                      setActiveFilters({...activeFilters, [badge.key]: ''});
                    }
                  }}
                />
              </Badge>
            ))}
            {getActiveFilterBadges().length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={clearFilters}
              >
                Clear all
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for items..."
            className="pl-9"
          />
        </div>

        <div className="flex items-center gap-2">
          <Select value={activeFilters.category} onValueChange={(value) => setActiveFilters({...activeFilters, category: value})}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="textbooks">Textbooks</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={activeFilters.condition} onValueChange={(value) => setActiveFilters({...activeFilters, condition: value})}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
              <SelectItem value="poor">Poor</SelectItem>
            </SelectContent>
          </Select>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                More filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                {renderFilterContent()}
              </div>
              <SheetFooter className="flex-row gap-3 sm:flex-row">
                <SheetClose asChild>
                  <Button variant="outline" onClick={clearFilters} className="w-full">
                    Reset filters
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full">Apply filters</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {getActiveFilterBadges().length > 0 && (
        <div className="flex flex-wrap gap-2">
          {getActiveFilterBadges().map((badge) => (
            <Badge key={badge.key} variant="secondary" className="gap-1">
              {badge.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => {
                  if (badge.key === 'price') {
                    setActiveFilters({...activeFilters, priceRange: [0, 500]});
                  } else {
                    setActiveFilters({...activeFilters, [badge.key]: ''});
                  }
                }}
              />
            </Badge>
          ))}
          {getActiveFilterBadges().length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs"
              onClick={clearFilters}
            >
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
