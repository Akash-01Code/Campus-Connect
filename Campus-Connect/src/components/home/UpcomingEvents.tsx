
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

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
  }
];

export const UpcomingEvents = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      
      <div className="space-y-3">
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
    </div>
  );
};
