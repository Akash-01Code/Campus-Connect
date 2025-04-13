
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Calendar as CalendarIcon, Users, Plus, Search } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";

// Mock data for events
const eventsData = [
  {
    id: 1,
    title: "Tech Startup Workshop",
    organizer: "Business & Entrepreneurship Club",
    date: new Date("2023-12-10T14:00:00"),
    location: "Business School, Room 105",
    attending: 47,
    type: "Workshop"
  },
  {
    id: 2,
    title: "Annual Hackathon",
    organizer: "Computer Science Club",
    date: new Date("2023-12-15T09:00:00"),
    location: "Engineering Building, Main Hall",
    attending: 128,
    type: "Competition"
  },
  {
    id: 3,
    title: "End of Semester Art Exhibition",
    organizer: "Art & Design Collective",
    date: new Date("2023-12-18T17:30:00"),
    location: "Arts Center Gallery",
    attending: 92,
    type: "Exhibition"
  },
  {
    id: 4,
    title: "Psychology Guest Speaker Series",
    organizer: "Psychology Society",
    date: new Date("2023-12-12T15:00:00"),
    location: "Science Building, Auditorium 2",
    attending: 75,
    type: "Lecture"
  },
  {
    id: 5,
    title: "Campus Sustainability Day",
    organizer: "Environmental Action",
    date: new Date("2023-12-20T10:00:00"),
    location: "Main Quad",
    attending: 120,
    type: "Community"
  },
  {
    id: 6,
    title: "Winter Sports Tournament",
    organizer: "Athletics Department",
    date: new Date("2023-12-22T13:00:00"),
    location: "Campus Recreation Center",
    attending: 200,
    type: "Sports"
  }
];

export default function Events() {
  return (
    <MainLayout>
      <div className="space-y-6 pb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Events</h1>
            <p className="text-muted-foreground mt-1">
              Discover upcoming events and activities on campus
            </p>
          </div>
          <Button>
            <Plus className="mr-1.5 h-4 w-4" />
            Create Event
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search events..." 
            className="w-full pl-9 py-2 pr-4"
          />
        </div>

        {/* Event Tabs */}
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="attending">Attending</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventsData.map((event) => (
                <Card key={event.id} className="hover-lift">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <p className="text-sm text-primary font-medium mt-0.5">
                          {event.organizer}
                        </p>
                      </div>
                      <Badge>{event.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-3 pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={14} className="mr-2" />
                        <span>{format(event.date, "EEEE, MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock size={14} className="mr-2" />
                        <span>{format(event.date, "h:mm a")}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={14} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 justify-between">
                    <span className="text-sm">
                      <span className="font-medium">{event.attending}</span> attending
                    </span>
                    <Button size="sm">RSVP</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="attending" className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No events yet</h3>
              <p className="text-muted-foreground mb-4">You haven't RSVP'd to any upcoming events.</p>
              <Button variant="outline">Browse Events</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No past events</h3>
              <p className="text-muted-foreground mb-4">Your past events history will appear here.</p>
              <Button variant="outline">Browse Events</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-4">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Calendar view coming soon</h3>
              <p className="text-muted-foreground mb-4">We're working on a calendar view for events.</p>
              <Button variant="outline">Browse Events</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
