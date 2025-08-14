import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Authors',
      items: [
        { name: 'Call for Papers', path: '/call-for-papers' },
        { name: 'Camera-Ready Submission', path: '/camera-ready' },
        { name: 'Templates', path: '/templates' },
      ],
    },
    {
      name: 'Committee',
      items: [
        { name: 'Patrons & General Chairs', path: '/committee/patrons-general-chairs' },
        { name: 'Organizing Committee', path: '/committee/organizing-committee' },
        { name: 'Advisory Committees', path: '/committee/advisory-committees' },
        { name: 'Technical Program Committee', path: '/committee/technical-program-committee' },
        { name: 'Publication & Plenary Chairs', path: '/committee/publication-plenary-chairs' },
        { name: 'Supporting Committees', path: '/committee/supporting-committees' },
        { name: 'Women in Engineering', path: '/committee/women-in-engineering' },
        { name: 'Track Chairs', path: '/committee/track-chairs' },
      ],
    },
    { name: 'Registration', path: '/registration' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Accepted Papers', path: '/accepted-papers' },
    { name: 'Venue', path: '/venue' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/muj-logo-nbg.png" 
              alt="Manipal University Jaipur Logo"
              className="h-[74px] w-auto"
            />
            {/* <div className="hidden sm:block">
                              <span className="text-xl font-bold text-primary">STESI 2026</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.items ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center space-x-1 hover:text-primary"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border border-border shadow-lg">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.path} asChild>
                          <Link 
                            to={subItem.path}
                            className="w-full px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) 
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-2">
                      <div className="font-medium text-foreground">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;