
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BadgeGroup } from "@/components/ui/badge-group";
import { Heart, MessageSquare, Share2 } from 'lucide-react';

// Mock data for posts
const postsData = [
  {
    id: 1,
    author: {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1",
      role: "Computer Science Student"
    },
    community: "Computer Science Club",
    content: "Just finished my first machine learning project! It's a model that predicts student performance based on study habits. Check out the GitHub repo in the comments!",
    images: ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"],
    likes: 24,
    comments: 8,
    time: "2 hours ago",
    topics: ["Machine Learning", "Student Projects"]
  },
  {
    id: 2,
    author: {
      name: "Maria Garcia",
      image: "https://i.pravatar.cc/150?img=4",
      role: "Biology Major"
    },
    community: "Pre-Med Society",
    content: "Study group for the upcoming Anatomy exam this Friday at the Science Library, Room 302 at 6pm. Bring your notes and questions!",
    likes: 15,
    comments: 12,
    time: "4 hours ago",
    topics: ["Study Group", "Anatomy", "Exam Prep"]
  },
  {
    id: 3,
    author: {
      name: "David Chen",
      image: "https://i.pravatar.cc/150?img=3",
      role: "UI/UX Designer"
    },
    community: "Art & Design Collective",
    content: "Just completed my portfolio redesign. Looking for feedback from fellow designers! I've implemented the new glassmorphism style and focused on minimalist navigation.",
    images: ["https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"],
    likes: 32,
    comments: 9,
    time: "8 hours ago",
    topics: ["Portfolio", "UI Design", "Feedback"]
  }
];

export const NewsFeed = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">News Feed</h2>
      
      <div className="space-y-4">
        {postsData.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="pb-2 flex flex-row items-start space-y-0 space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{post.author.name}</span>
                    <span className="text-sm text-muted-foreground"> · {post.time}</span>
                  </div>
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-muted-foreground">{post.author.role}</span>
                  <span className="text-primary font-medium">in {post.community}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pb-3">
              <p className="text-sm mb-3">{post.content}</p>
              
              {post.images && post.images.length > 0 && (
                <div className="mt-2 rounded-md overflow-hidden">
                  <img 
                    src={post.images[0]} 
                    alt="Post attachment" 
                    className="w-full h-auto object-cover max-h-[300px]"
                  />
                </div>
              )}
              
              {post.topics && (
                <BadgeGroup 
                  badges={post.topics.map(topic => ({ label: topic }))} 
                  className="mt-3"
                />
              )}
            </CardContent>
            
            <CardFooter className="pt-0 pb-3 flex justify-between border-t pt-3">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-8 px-2">
                  <Heart size={18} className="text-muted-foreground" />
                  <span className="text-xs">{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-8 px-2">
                  <MessageSquare size={18} className="text-muted-foreground" />
                  <span className="text-xs">{post.comments}</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Share2 size={18} className="text-muted-foreground" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
