
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { MarketplaceListings } from '@/components/marketplace/MarketplaceListings';
import { MarketplaceFilters } from '@/components/marketplace/MarketplaceFilters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Marketplace() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Marketplace</h1>
            <p className="text-muted-foreground mt-1">
              Buy and sell items within your campus community
            </p>
          </div>
          <Button>
            <Plus className="mr-1.5 h-4 w-4" />
            List an item
          </Button>
        </div>

        <MarketplaceFilters />
        <MarketplaceListings />
      </div>
    </MainLayout>
  );
}
