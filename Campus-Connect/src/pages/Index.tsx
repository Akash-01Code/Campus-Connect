
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { NewsFeed } from '@/components/home/NewsFeed';
import { FeaturedCommunities } from '@/components/home/FeaturedCommunities';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { MarketplacePreview } from '@/components/home/MarketplacePreview';
import { QuickActions } from '@/components/home/QuickActions';
import { RecentMessages } from '@/components/home/RecentMessages';
import { YourCommunities } from '@/components/home/YourCommunities';
import { Bell, Search, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Banner */}
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-0 overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">Welcome to Campus Connect</h1>
              <CardDescription className="text-base max-w-md">
                Connect with your college community, join groups, buy & sell items, and discover events.
              </CardDescription>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <Button size="sm">
                  <Search size={16} className="mr-2" />
                  Explore Communities
                </Button>
                <Button size="sm" variant="outline">
                  <Bell size={16} className="mr-2" />
                  Configure Notifications
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 bg-primary/20 rounded-full p-4">
              <BookOpen size={60} className="text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <RecentMessages />
            <YourCommunities />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <NewsFeed />
            <FeaturedCommunities />
            <UpcomingEvents />
            <MarketplacePreview />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
