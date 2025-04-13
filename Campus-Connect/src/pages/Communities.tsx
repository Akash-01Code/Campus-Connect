
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Users, Search, Plus, Filter, Heart } from 'lucide-react';
import { toast } from "sonner";
import { useAuth } from '@/contexts/auth-context';
import { AuthModal } from '@/components/auth/AuthModal';

// Mock data for communities with added "liked" status
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
  },
  {
    id: 4,
    name: "Psychology Society",
    description: "Exploring the human mind and behavior through discussions and research.",
    memberCount: 156,
    topics: ["Mental Health", "Research", "Behavioral Science", "Neuroscience"],
    members: [
      { name: "William Johnson", image: "https://i.pravatar.cc/150?img=14" },
      { name: "Isabella Martinez", image: "https://i.pravatar.cc/150?img=15" },
      { name: "Benjamin Taylor", image: "https://i.pravatar.cc/150?img=16" },
    ]
  },
  {
    id: 5,
    name: "Environmental Action",
    description: "Students working together to promote sustainability on campus and beyond.",
    memberCount: 98,
    topics: ["Sustainability", "Climate Change", "Conservation", "Recycling"],
    members: [
      { name: "Charlotte Walker", image: "https://i.pravatar.cc/150?img=17" },
      { name: "Ethan Harris", image: "https://i.pravatar.cc/150?img=18" },
      { name: "Amelia Scott", image: "https://i.pravatar.cc/150?img=19" },
    ]
  },
  {
    id: 6,
    name: "Fitness & Wellness",
    description: "Supporting physical and mental wellbeing through activities and discussions.",
    memberCount: 165,
    topics: ["Exercise", "Nutrition", "Mindfulness", "Sports"],
    members: [
      { name: "Lucas King", image: "https://i.pravatar.cc/150?img=20" },
      { name: "Mia Adams", image: "https://i.pravatar.cc/150?img=21" },
      { name: "Henry Nelson", image: "https://i.pravatar.cc/150?img=22" },
    ]
  }
];

export default function Communities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedCommunities, setLikedCommunities] = useState<number[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const filteredCommunities = communitiesData.filter(community => 
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleLike = (communityId: number) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    if (likedCommunities.includes(communityId)) {
      setLikedCommunities(prev => prev.filter(id => id !== communityId));
      toast("Community unliked", {
        description: "Removed from your favorites"
      });
    } else {
      setLikedCommunities(prev => [...prev, communityId]);
      toast("Community liked", {
        description: "Added to your favorites"
      });
    }
  };

  const handleJoinCommunity = (communityName: string) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    toast(`Joined ${communityName}`, {
      description: "You are now a member of this community"
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6 pb-10 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Communities</h1>
            <p className="text-muted-foreground mt-1">
              Join and participate in communities that interest you
            </p>
          </div>
          <Button className="hover-scale">
            <Plus className="mr-1.5 h-4 w-4" />
            Create Community
          </Button>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search communities..." 
              className="w-full pl-9 py-2 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCommunities.map((community) => (
            <Card key={community.id} className="hover-scale overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{community.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${likedCommunities.includes(community.id) ? 'text-red-500' : ''}`}
                    onClick={() => handleLike(community.id)}
                  >
                    <Heart
                      size={18}
                      className={`transition-all duration-300 ${likedCommunities.includes(community.id) ? 'fill-current' : ''}`}
                    />
                    <span className="sr-only">Like</span>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {community.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {topic}
                    </Badge>
                  ))}
                  {community.topics.length > 3 && (
                    <Badge variant="outline" className="font-normal text-xs">
                      +{community.topics.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {community.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users size={14} className="mr-1.5" />
                    {community.memberCount} members
                  </div>
                  <AvatarGroup users={community.members} max={3} size="sm" />
                </div>
                <Button 
                  className="w-full mt-4 transition-all duration-300 hover:bg-primary/90" 
                  variant="secondary"
                  onClick={() => handleJoinCommunity(community.name)}
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </MainLayout>
  );
}
