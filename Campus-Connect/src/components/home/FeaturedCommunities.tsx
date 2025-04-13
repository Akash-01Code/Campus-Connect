
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { BadgeGroup } from "@/components/ui/badge-group";
import { Users } from 'lucide-react';

// Mock data for communities
const communitiesData = [
  {
    id: 1,
    name: "Computer Science Club",
    description: "A community for CS students to collaborate and learn together.",
    memberCount: 248,
    topics: ["Programming", "Algorithms", "Web Dev", "AI", "Machine Learning"],
    members: [
      { name: "Alex Johnson", image: "https://i.pravatar.cc/150?img=1" },
      { name: "Sarah Miller", image: "https://i.pravatar.cc/150?img=2" },
      { name: "David Chen", image: "https://i.pravatar.cc/150?img=3" },
      { name: "Maria Garcia", image: "https://i.pravatar.cc/150?img=4" },
      { name: "James Wilson", image: "https://i.pravatar.cc/150?img=5" },
      { name: "Emma Davis", image: "https://i.pravatar.cc/150?img=6" },
    ]
  },
  {
    id: 2,
    name: "Business & Entrepreneurship",
    description: "Connect with future entrepreneurs and business leaders.",
    memberCount: 187,
    topics: ["Startups", "Marketing", "Finance", "Leadership"],
    members: [
      { name: "Michael Brown", image: "https://i.pravatar.cc/150?img=7" },
      { name: "Emily White", image: "https://i.pravatar.cc/150?img=8" },
      { name: "Daniel Lee", image: "https://i.pravatar.cc/150?img=9" },
      { name: "Olivia Martin", image: "https://i.pravatar.cc/150?img=10" },
    ]
  },
  {
    id: 3,
    name: "Art & Design Collective",
    description: "A space for creative minds to share their work and inspirations.",
    memberCount: 132,
    topics: ["Graphic Design", "Illustration", "Photography", "UI/UX"],
    members: [
      { name: "Sophia Clark", image: "https://i.pravatar.cc/150?img=11" },
      { name: "Noah Rodriguez", image: "https://i.pravatar.cc/150?img=12" },
      { name: "Ava Thompson", image: "https://i.pravatar.cc/150?img=13" },
    ]
  }
];

export const FeaturedCommunities = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Featured Communities</h2>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {communitiesData.map((community) => (
          <Card key={community.id} className="hover-lift overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{community.name}</CardTitle>
              <BadgeGroup 
                badges={community.topics.map(topic => ({ label: topic }))} 
                className="mt-1.5"
              />
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {community.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <Users size={14} className="mr-1.5" />
                {community.memberCount} members
              </div>
              <AvatarGroup users={community.members} max={3} size="sm" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
