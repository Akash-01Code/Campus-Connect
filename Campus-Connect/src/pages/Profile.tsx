
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Camera, Edit, MapPin, Calendar, BookOpen, Briefcase, Link, Mail, Settings } from 'lucide-react';

export default function Profile() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-10">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg overflow-hidden">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-12 px-4 md:px-6">
            <Avatar className="h-32 w-32 rounded-full border-4 border-background">
              <AvatarImage src="https://i.pravatar.cc/150?img=1" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            
            <div className="mt-4 md:mt-0 md:ml-6 md:mb-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Computer Science Student</p>
                </div>
                <Button className="mt-4 md:mt-0" variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Tabs */}
        <Tabs defaultValue="about">
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">About Me</h3>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Computer Science student passionate about web development and AI. 
                      I love to code, learn new technologies, and collaborate on interesting projects.
                      In my free time, I enjoy hiking, reading, and playing the guitar.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start">
                        <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">Joined</h4>
                          <p className="text-sm text-muted-foreground">September 2022</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <BookOpen className="mr-2 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">Education</h4>
                          <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Briefcase className="mr-2 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">Work</h4>
                          <p className="text-sm text-muted-foreground">Intern at Tech Solutions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Programming</Badge>
                        <Badge>Web Development</Badge>
                        <Badge>Artificial Intelligence</Badge>
                        <Badge>Hiking</Badge>
                        <Badge>Reading</Badge>
                        <Badge>Guitar</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-medium">Recent Activity</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-6">
                      Your recent activity will appear here.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-medium">Contact</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Link className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>github.com/johndoe</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-medium">Account Settings</h3>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="posts" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Posts Yet</h3>
              <p className="text-muted-foreground mb-4 text-center">
                You haven't created any posts yet. Share your thoughts with the community!
              </p>
              <Button>Create a Post</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="communities" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Communities Coming Soon</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Your communities will be displayed here.
              </p>
              <Button>Browse Communities</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="listings" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Marketplace Listings Coming Soon</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Your marketplace listings will be displayed here.
              </p>
              <Button>Create a Listing</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
