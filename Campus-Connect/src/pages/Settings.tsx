
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Save } from 'lucide-react';

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences
          </p>
        </div>
        
        <Tabs defaultValue="account">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="md:w-64 flex-shrink-0">
              <CardContent className="p-4">
                <TabsList className="flex flex-col h-auto space-y-1 bg-transparent p-0">
                  <TabsTrigger value="account" className="justify-start px-3 py-2 h-9">Account</TabsTrigger>
                  <TabsTrigger value="appearance" className="justify-start px-3 py-2 h-9">Appearance</TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start px-3 py-2 h-9">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy" className="justify-start px-3 py-2 h-9">Privacy</TabsTrigger>
                  <TabsTrigger value="accessibility" className="justify-start px-3 py-2 h-9">Accessibility</TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>
            
            <div className="flex-1 space-y-4">
              <TabsContent value="account" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="john.doe@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="major">Major</Label>
                        <Input id="major" defaultValue="Computer Science" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Graduation Year</Label>
                        <Input id="year" defaultValue="2024" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </TabsContent>
              
              <TabsContent value="appearance" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Preferences</CardTitle>
                    <CardDescription>Customize how Campus Connect looks for you.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Dark mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Turn on dark mode to reduce eye strain in low light.
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Reduce animations</Label>
                          <p className="text-sm text-muted-foreground">
                            Simplify visual effects for reduced motion.
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Choose what you want to be notified about.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Direct messages</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when you receive a direct message.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Community posts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about new posts in your communities.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Event reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about upcoming events you're attending.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Marketplace activity</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about activity on your listings.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </TabsContent>
              
              <TabsContent value="privacy" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control who can see your profile and content.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Profile visibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Make your profile visible to everyone.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Online status</Label>
                          <p className="text-sm text-muted-foreground">
                            Show when you're active on Campus Connect.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Data collection</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow us to collect usage data to improve your experience.
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-yellow-800">Privacy Notice</h3>
                        <p className="text-sm text-yellow-700">
                          Your privacy is important to us. We never share your personal information with third parties without your consent.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </TabsContent>
              
              <TabsContent value="accessibility" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Accessibility Settings</CardTitle>
                    <CardDescription>Customize your experience for better accessibility.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Screen reader compatibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Optimize the interface for screen readers.
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>High contrast mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Use high contrast colors for better visibility.
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Text size</Label>
                          <p className="text-sm text-muted-foreground">
                            Increase text size across the application.
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
}
