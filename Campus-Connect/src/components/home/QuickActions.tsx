
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, ShoppingBag, Users, PlusCircle, Calendar } from 'lucide-react';

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <Edit size={16} className="mr-2" />
          Create a Post
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <ShoppingBag size={16} className="mr-2" />
          Sell an Item
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Calendar size={16} className="mr-2" />
          Create an Event
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Users size={16} className="mr-2" />
          Join a Community
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle size={16} className="mr-2" />
          Create a Community
        </Button>
      </CardContent>
    </Card>
  );
};
