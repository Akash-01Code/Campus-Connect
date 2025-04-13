
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for user's communities
const userCommunitiesData = [
  {
    id: 1,
    name: "Computer Science Club",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    role: "Member",
    unreadPosts: 3
  },
  {
    id: 2,
    name: "Photography Society",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    role: "Moderator",
    unreadPosts: 0
  },
  {
    id: 3,
    name: "Campus Debate Team",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    role: "Member",
    unreadPosts: 5
  }
];

export const YourCommunities = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Communities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-2">
        {userCommunitiesData.map((community) => (
          <div key={community.id} className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 rounded-md">
              <AvatarImage src={community.image} alt={community.name} />
              <AvatarFallback className="rounded-md">{community.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <h4 className="font-medium truncate">{community.name}</h4>
                {community.unreadPosts > 0 && (
                  <Badge variant="secondary" className="ml-2 font-normal">
                    {community.unreadPosts} new
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{community.role}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full">View All Communities</Button>
      </CardFooter>
    </Card>
  );
};
