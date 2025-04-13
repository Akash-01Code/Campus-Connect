
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, DollarSign, Heart } from 'lucide-react';

// Extended mock data for marketplace listings
const listingsData = [
  {
    id: 1,
    title: "Textbooks for Computer Science",
    description: "Collection of computer science textbooks in excellent condition. Includes algorithms, data structures, and programming fundamentals.",
    price: 75,
    condition: "Like New",
    seller: {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "2 days ago",
    category: "Textbooks",
    likes: 5
  },
  {
    id: 2,
    title: "Desk Lamp - Adjustable LED",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for dorm rooms and study spaces.",
    price: 25,
    condition: "Good",
    seller: {
      name: "Sarah Miller",
      image: "https://i.pravatar.cc/150?img=2"
    },
    image: "https://images.unsplash.com/photo-1534131270927-b0704a572b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "1 week ago",
    category: "Electronics",
    likes: 3
  },
  {
    id: 3,
    title: "Graphing Calculator TI-84",
    description: "TI-84 Plus graphing calculator. Essential for calculus, statistics, and engineering courses. Includes batteries and case.",
    price: 60,
    condition: "Used",
    seller: {
      name: "David Chen",
      image: "https://i.pravatar.cc/150?img=3"
    },
    image: "https://images.unsplash.com/photo-1595925889916-5e6f9f2e16dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    time: "3 days ago",
    category: "Electronics",
    likes: 2
  },
  {
    id: 4,
    title: "Dorm Room Mini Fridge",
    description: "Compact mini refrigerator, perfect for dorm rooms. 2.7 cubic feet with a small freezer compartment. Energy efficient.",
    price: 95,
    condition: "Good",
    seller: {
      name: "Jessica Wang",
      image: "https://i.pravatar.cc/150?img=4"
    },
    image: "https://images.unsplash.com/photo-1567127913085-b2c27efe5110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    time: "5 days ago",
    category: "Appliances",
    likes: 7
  },
  {
    id: 5,
    title: "MacBook Air 2021",
    description: "MacBook Air M1 (2021) with 8GB RAM and 256GB SSD. Barely used, comes with charger and protective case.",
    price: 750,
    condition: "Like New",
    seller: {
      name: "Mike Thompson",
      image: "https://i.pravatar.cc/150?img=5"
    },
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "1 day ago",
    category: "Electronics",
    likes: 12
  },
  {
    id: 6,
    title: "Bicycle - Campus Commuter",
    description: "Reliable commuter bike, perfect for getting around campus. Includes lock, lights, and a rear rack for carrying books.",
    price: 120,
    condition: "Good",
    seller: {
      name: "Emma Rodriguez",
      image: "https://i.pravatar.cc/150?img=6"
    },
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "6 days ago",
    category: "Transportation",
    likes: 8
  },
  {
    id: 7,
    title: "Psychology Textbooks Bundle",
    description: "Complete set of psychology textbooks for introductory and intermediate courses. Includes notes and study guides.",
    price: 85,
    condition: "Fair",
    seller: {
      name: "Tyler Adams",
      image: "https://i.pravatar.cc/150?img=7"
    },
    image: "https://images.unsplash.com/photo-1603122693040-b2c6f7bf3431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "1 week ago",
    category: "Textbooks",
    likes: 4
  },
  {
    id: 8,
    title: "Dorm Room Furniture Set",
    description: "Complete dorm room furniture set: desk, chair, small bookshelf, and bedside table. All matching in espresso finish.",
    price: 200,
    condition: "Used",
    seller: {
      name: "Sophia Garcia",
      image: "https://i.pravatar.cc/150?img=8"
    },
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    time: "2 weeks ago",
    category: "Furniture",
    likes: 10
  }
];

export const MarketplaceListings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {listingsData.map((listing) => (
        <Card key={listing.id} className="hover-lift overflow-hidden h-full flex flex-col">
          <div className="aspect-square w-full overflow-hidden">
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
            <p className="text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
          </CardHeader>
          
          <CardFooter className="pt-0 mt-auto flex justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={listing.seller.image} alt={listing.seller.name} />
                <AvatarFallback>{listing.seller.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{listing.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart size={16} />
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                <MessageSquare size={14} className="mr-1" />
                Contact
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
