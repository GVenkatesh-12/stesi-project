import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NAV_BADGE_STORAGE_KEY = 'stesi_nav_badge_seen';

type NavSubItem = {
  name: string;
  path: string;
  badgeId?: number;
};

type NavItem =
  | { name: string; path: string; badgeId?: number }
  | { name: string; items: NavSubItem[] };

function hasNavItems(item: NavItem): item is { name: string; items: NavSubItem[] } {
  return 'items' in item;
}

function getSeenBadgeIds(): Record<string, number> {
  try {
    const raw = localStorage.getItem(NAV_BADGE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setSeenBadgeId(path: string, badgeId: number): void {
  try {
    const seen = getSeenBadgeIds();
    localStorage.setItem(
      NAV_BADGE_STORAGE_KEY,
      JSON.stringify({ ...seen, [path]: badgeId })
    );
  } catch {
    // ignore
  }
}

const NavLabel = ({ name, showBadge }: { name: string; showBadge?: boolean }) => (
  <span className="inline-flex items-center gap-1.5">
    {name}
    {showBadge && (
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
    )}
  </span>
);

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Authors',
    items: [
      { name: 'Call for Papers', path: '/call-for-papers' },
      { name: 'Special Sessions', path: '/special-sessions' },
      { name: 'Camera-Ready Submission', path: '/camera-ready' },
      // Bump badgeId to show the red badge again (e.g. 2 → 3)
      { name: 'Templates', path: '/templates', badgeId: 2 },
    ],
  },
  {
    name: 'Committee',
    items: [
      { name: 'Patrons & General Chairs', path: '/committee/patrons-general-chairs' },
      { name: 'Organizing Committee', path: '/committee/organizing-committee' },
      { name: 'Advisory Committees', path: '/committee/advisory-committees' },
      { name: 'Conference Oversight Committee', path: '/committee/conference-oversight-committee' },
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
  { name: 'Sponsorship', path: '/sponsorship' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [seenBadgeIds, setSeenBadgeIdsState] = useState(getSeenBadgeIds);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const dismissBadge = (path: string, badgeId: number) => {
    setSeenBadgeId(path, badgeId);
    setSeenBadgeIdsState((prev) => ({ ...prev, [path]: badgeId }));
  };

  const shouldShowBadge = (path: string, badgeId?: number) =>
    badgeId != null && (seenBadgeIds[path] ?? 0) !== badgeId;

  const handleNavClick = (path: string, badgeId?: number) => {
    if (badgeId != null) dismissBadge(path, badgeId);
    setIsOpen(false);
  };

  useEffect(() => {
    for (const navItem of navItems) {
      if ('path' in navItem && navItem.path === location.pathname && navItem.badgeId != null) {
        dismissBadge(navItem.path, navItem.badgeId);
        return;
      }
      if ('items' in navItem) {
        const subItem = navItem.items.find(
          (item) => item.path === location.pathname && item.badgeId != null
        );
        if (subItem) {
          dismissBadge(subItem.path, subItem.badgeId!);
          return;
        }
      }
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/STESI-LOGO.png" 
              alt="Manipal University Jaipur Logo"
              className="h-[65px] w-auto"
            />
            {/* <div className="hidden sm:block">
                              <span className="text-xl font-bold text-primary">STESI 2026</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name}>
                {hasNavItems(item) ? (
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
                            onClick={() => handleNavClick(subItem.path, subItem.badgeId)}
                            className="w-full px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                          >
                            <NavLabel
                              name={subItem.name}
                              showBadge={shouldShowBadge(subItem.path, subItem.badgeId)}
                            />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path, item.badgeId)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) 
                        ? 'text-primary border-b-2 border-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    <NavLabel
                      name={item.name}
                      showBadge={shouldShowBadge(item.path, item.badgeId)}
                    />
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
                  {hasNavItems(item) ? (
                    <div className="space-y-2">
                      <div className="font-medium text-foreground">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block text-sm text-muted-foreground hover:text-primary"
                            onClick={() => handleNavClick(subItem.path, subItem.badgeId)}
                          >
                            <NavLabel
                              name={subItem.name}
                              showBadge={shouldShowBadge(subItem.path, subItem.badgeId)}
                            />
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
                      onClick={() => handleNavClick(item.path, item.badgeId)}
                    >
                      <NavLabel
                        name={item.name}
                        showBadge={shouldShowBadge(item.path, item.badgeId)}
                      />
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