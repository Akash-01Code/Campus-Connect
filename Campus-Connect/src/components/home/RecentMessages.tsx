
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock data for messages
const messagesData = [
  {
    id: 1,
    sender: {
      name: "Maria Garcia",
      image: "https://i.pravatar.cc/150?img=4",
      online: true
    },
    preview: "Hey, are you interested in joining our study group for the finals?",
    time: "10:25 AM",
    unread: true
  },
  {
    id: 2,
    sender: {
      name: "David Chen",
      image: "https://i.pravatar.cc/150?img=3",
      online: false
    },
    preview: "I've shared the project files with you. Let me know what you think!",
    time: "Yesterday",
    unread: false
  },
  {
    id: 3,
    sender: {
      name: "Sarah Miller",
      image: "https://i.pravatar.cc/150?img=2",
      online: true
    },
    preview: "Is the desk lamp still available? I'd like to buy it.",
    time: "2 days ago",
    unread: false
  }
];

export const RecentMessages = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Recent Messages</CardTitle>
          <Badge className="rounded-full px-2 py-0 text-xs font-normal">2 new</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          {messagesData.map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start space-x-3 p-2 rounded-md transition-colors ${message.unread ? 'bg-secondary' : 'hover:bg-muted/50'}`}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={message.sender.image} alt={message.sender.name} />
                  <AvatarFallback>{message.sender.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {message.sender.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-background"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-medium truncate">{message.sender.name}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{message.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full">View All Messages</Button>
      </CardFooter>
    </Card>
  );
};
