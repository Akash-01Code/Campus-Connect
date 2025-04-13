
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings, Check, MessageSquare, Calendar, Users, ShoppingBag } from 'lucide-react';

// Mock data for notifications
const notificationsData = [
  {
    id: 1,
    type: "message",
    user: {
      name: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    content: "sent you a new message",
    time: "5 minutes ago",
    read: false
  },
  {
    id: 2,
    type: "event",
    user: {
      name: "Computer Science Club",
      avatar: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    content: "added a new event: Annual Hackathon",
    time: "2 hours ago",
    read: false
  },
  {
    id: 3,
    type: "community",
    user: {
      name: "Photography Society",
      avatar: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    content: "approved your membership request",
    time: "1 day ago",
    read: true
  },
  {
    id: 4,
    type: "marketplace",
    user: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "is interested in your 'Desk Lamp' listing",
    time: "2 days ago",
    read: true
  },
  {
    id: 5,
    type: "message",
    user: {
      name: "Sarah Miller",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    content: "sent you a new message",
    time: "3 days ago",
    read: true
  }
];

export default function Notifications() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground mt-1">
              Stay updated with activities and interactions
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Notification Settings
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm">
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          </div>
          
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {notificationsData.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`flex items-start p-3 rounded-lg ${notification.read ? "" : "bg-secondary"}`}
                    >
                      <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                        <AvatarImage src={notification.user.avatar} />
                        <AvatarFallback>{notification.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium">{notification.user.name}</span>
                          <span className="text-muted-foreground">{notification.content}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          {!notification.read && (
                            <Badge className="ml-2 px-1.5 py-0 text-xs" variant="default">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Icon based on notification type */}
                      <div className="ml-2 bg-muted h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {notification.type === "message" && <MessageSquare className="h-4 w-4 text-blue-500" />}
                        {notification.type === "event" && <Calendar className="h-4 w-4 text-green-500" />}
                        {notification.type === "community" && <Users className="h-4 w-4 text-purple-500" />}
                        {notification.type === "marketplace" && <ShoppingBag className="h-4 w-4 text-amber-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="unread" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Unread Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {notificationsData.filter(n => !n.read).map((notification) => (
                    <div 
                      key={notification.id} 
                      className="flex items-start p-3 rounded-lg bg-secondary"
                    >
                      <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                        <AvatarImage src={notification.user.avatar} />
                        <AvatarFallback>{notification.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium">{notification.user.name}</span>
                          <span className="text-muted-foreground">{notification.content}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          <Badge className="ml-2 px-1.5 py-0 text-xs" variant="default">
                            New
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Icon based on notification type */}
                      <div className="ml-2 bg-muted h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {notification.type === "message" && <MessageSquare className="h-4 w-4 text-blue-500" />}
                        {notification.type === "event" && <Calendar className="h-4 w-4 text-green-500" />}
                        {notification.type === "community" && <Users className="h-4 w-4 text-purple-500" />}
                        {notification.type === "marketplace" && <ShoppingBag className="h-4 w-4 text-amber-500" />}
                      </div>
                    </div>
                  ))}
                  
                  {notificationsData.filter(n => !n.read).length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                      <p className="text-muted-foreground">You have no unread notifications.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
