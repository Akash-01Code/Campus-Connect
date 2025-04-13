
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, Phone, Video, Info, Smile, Paperclip, MoreVertical } from 'lucide-react';

// Mock data for conversations
const conversations = [
  {
    id: 1,
    user: {
      name: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?img=4",
      online: true,
      lastSeen: "Just now"
    },
    lastMessage: "Hey, are you interested in joining our study group for the finals?",
    timestamp: "10:25 AM",
    unread: 2
  },
  {
    id: 2,
    user: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
      online: false,
      lastSeen: "5m ago"
    },
    lastMessage: "I've shared the project files with you. Let me know what you think!",
    timestamp: "Yesterday",
    unread: 0
  },
  {
    id: 3,
    user: {
      name: "Sarah Miller",
      avatar: "https://i.pravatar.cc/150?img=2",
      online: true,
      lastSeen: "Just now"
    },
    lastMessage: "Is the desk lamp still available? I'd like to buy it.",
    timestamp: "2 days ago",
    unread: 0
  },
  {
    id: 4,
    user: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=5",
      online: false,
      lastSeen: "3h ago"
    },
    lastMessage: "Thanks for your help with the assignment!",
    timestamp: "3 days ago",
    unread: 0
  },
  {
    id: 5,
    user: {
      name: "Emily Johnson",
      avatar: "https://i.pravatar.cc/150?img=6",
      online: false,
      lastSeen: "1d ago"
    },
    lastMessage: "Don't forget about the club meeting tomorrow at 5 PM.",
    timestamp: "1 week ago",
    unread: 0
  }
];

// Mock data for the selected conversation
const sampleMessages = [
  {
    id: 1,
    sender: "them",
    content: "Hey, are you interested in joining our study group for the finals?",
    timestamp: "10:20 AM"
  },
  {
    id: 2,
    sender: "me",
    content: "Hi Maria! Yes, I'd be interested. What subjects are you focusing on?",
    timestamp: "10:22 AM"
  },
  {
    id: 3,
    sender: "them",
    content: "Great! We're mainly focusing on Calculus, Data Structures, and Physics.",
    timestamp: "10:23 AM"
  },
  {
    id: 4,
    sender: "them",
    content: "We're planning to meet at the library tomorrow at 2 PM. Does that work for you?",
    timestamp: "10:24 AM"
  },
  {
    id: 5,
    sender: "me",
    content: "That sounds perfect! I definitely need help with Calculus and Physics.",
    timestamp: "10:24 AM"
  },
  {
    id: 6,
    sender: "them",
    content: "Awesome! I'll add you to our group chat so you can get all the details.",
    timestamp: "10:25 AM"
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
        {/* Conversation List */}
        <div className="w-full md:w-80 lg:w-96 border-r bg-white">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search messages..." 
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-3 flex items-start space-x-3 cursor-pointer hover:bg-muted/50 transition-colors ${selectedConversation.id === conversation.id ? 'bg-muted' : ''}`}
              >
                <div className="relative flex-shrink-0">
                  <Avatar>
                    <AvatarImage src={conversation.user.avatar} />
                    <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conversation.user.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium truncate">{conversation.user.name}</h4>
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                </div>
                
                {conversation.unread > 0 && (
                  <Badge className="ml-2 flex-shrink-0 rounded-full px-2 py-0.5">
                    {conversation.unread}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="hidden md:flex flex-col flex-1 bg-white">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9 mr-3">
                    <AvatarImage src={selectedConversation.user.avatar} />
                    <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedConversation.user.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.user.online ? 'Online' : `Last seen ${selectedConversation.user.lastSeen}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {sampleMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'them' && (
                      <Avatar className="h-8 w-8 mr-2 flex-shrink-0 self-end">
                        <AvatarImage src={selectedConversation.user.avatar} />
                        <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div 
                        className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${
                          message.sender === 'me' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary'
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..." 
                    className="flex-1"
                  />
                  <Button variant="ghost" size="icon">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button disabled={!inputValue.trim()} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <MoreVertical className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No conversation selected</h3>
                <p className="text-muted-foreground">Choose a conversation from the list to start chatting</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile: Select a conversation prompt */}
        <div className="flex md:hidden flex-col flex-1 items-center justify-center p-6 text-center">
          <MoreVertical className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Your Messages</h3>
          <p className="text-muted-foreground mb-4">Select a conversation to view on this screen size</p>
        </div>
      </div>
    </MainLayout>
  );
}
