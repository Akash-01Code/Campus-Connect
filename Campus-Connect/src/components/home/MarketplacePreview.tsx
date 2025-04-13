
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for marketplace listings
const listingsData = [
  {
    id: 1,
    title: "Textbooks for Computer Science",
    price: 75,
    condition: "Like New",
    seller: {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "2 days ago"
  },
  {
    id: 2,
    title: "Desk Lamp - Adjustable LED",
    price: 25,
    condition: "Good",
    seller: {
      name: "Sarah Miller",
      image: "https://i.pravatar.cc/150?img=2"
    },
    image: "https://images.unsplash.com/photo-1534131270927-b0704a572b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "1 week ago"
  },
  {
    id: 3,
    title: "Graphing Calculator TI-84",
    price: 60,
    condition: "Used",
    seller: {
      name: "David Chen",
      image: "https://i.pravatar.cc/150?img=3"
    },
    image: "https://images.unsplash.com/photo-1595925889916-5e6f9f2e16dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    time: "3 days ago"
  }
];

export const MarketplacePreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Marketplace</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/marketplace">View All</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listingsData.map((listing) => (
          <Card key={listing.id} className="hover-lift overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            
            <CardHeader className="pb-2 pt-3">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="font-normal">
                  {listing.condition}
                </Badge>
                <div className="flex items-center text-lg font-semibold">
                  <DollarSign size={16} className="mr-[2px]" />
                  {listing.price}
                </div>
              </div>
              <CardTitle className="text-base mt-1">{listing.title}</CardTitle>
            </CardHeader>
            
            <CardFooter className="pt-0 flex justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={listing.seller.image} alt={listing.seller.name} />
                  <AvatarFallback>{listing.seller.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{listing.time}</span>
              </div>
              <Button size="sm" variant="outline" className="h-8">
                <MessageSquare size={14} className="mr-1" />
                Contact
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
