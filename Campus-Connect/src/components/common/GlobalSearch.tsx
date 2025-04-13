
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { 
  Users, 
  ShoppingBag, 
  Calendar, 
  BookOpen, 
  Search, 
  MessageSquare,
  XCircle
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  category: 'community' | 'marketplace' | 'event' | 'message';
  description?: string;
  icon: React.ReactNode;
  link: string;
}

// Mock search results
const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Computer Science Club',
    category: 'community',
    description: 'A community for CS students',
    icon: <Users className="h-4 w-4" />,
    link: '/communities'
  },
  {
    id: '2',
    title: 'Psychology Society',
    category: 'community',
    description: 'Exploring the human mind',
    icon: <Users className="h-4 w-4" />,
    link: '/communities'
  },
  {
    id: '3',
    title: 'MacBook Pro 2019',
    category: 'marketplace',
    description: 'Good condition, $800',
    icon: <ShoppingBag className="h-4 w-4" />,
    link: '/marketplace'
  },
  {
    id: '4',
    title: 'Physics Textbook',
    category: 'marketplace',
    description: 'Like new, $50',
    icon: <BookOpen className="h-4 w-4" />,
    link: '/marketplace'
  },
  {
    id: '5',
    title: 'End of Year Party',
    category: 'event',
    description: 'Dec 15th, 8PM at Student Union',
    icon: <Calendar className="h-4 w-4" />,
    link: '/events'
  },
  {
    id: '6',
    title: 'Job Fair',
    category: 'event',
    description: 'Nov 20th, Main Campus',
    icon: <Calendar className="h-4 w-4" />,
    link: '/events'
  },
  {
    id: '7',
    title: 'Sarah Miller',
    category: 'message',
    description: 'Last message: 2 days ago',
    icon: <MessageSquare className="h-4 w-4" />,
    link: '/messages'
  }
];

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const results = mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        (result.description && result.description.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    navigate(result.link);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-between w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      >
        <div className="inline-flex items-center">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <span className="text-muted-foreground">Search anything...</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            placeholder="Search communities, marketplace, events..."
            value={query}
            onValueChange={setQuery}
            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-muted"
            >
              <XCircle className="h-4 w-4 opacity-50" />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {filteredResults.length > 0 && (
            <>
              <CommandGroup heading="Communities">
                {filteredResults
                  .filter(result => result.category === 'community')
                  .map(result => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center gap-2 p-2"
                    >
                      {result.icon}
                      <div>
                        <p>{result.title}</p>
                        {result.description && (
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              
              <CommandGroup heading="Marketplace">
                {filteredResults
                  .filter(result => result.category === 'marketplace')
                  .map(result => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center gap-2 p-2"
                    >
                      {result.icon}
                      <div>
                        <p>{result.title}</p>
                        {result.description && (
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              
              <CommandGroup heading="Events">
                {filteredResults
                  .filter(result => result.category === 'event')
                  .map(result => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center gap-2 p-2"
                    >
                      {result.icon}
                      <div>
                        <p>{result.title}</p>
                        {result.description && (
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              
              <CommandGroup heading="Messages">
                {filteredResults
                  .filter(result => result.category === 'message')
                  .map(result => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelect(result)}
                      className="flex items-center gap-2 p-2"
                    >
                      {result.icon}
                      <div>
                        <p>{result.title}</p>
                        {result.description && (
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
