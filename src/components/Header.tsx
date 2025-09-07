import { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { name: 'Legal Consultation', href: '/services/legal-consultation' },
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Criminal Defense', href: '/services/criminal-defense' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">LF</span>
            </div>
            <span className="font-bold text-xl text-foreground">Law Firm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-gold-accent transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-gold-accent transition-colors duration-200"
            >
              About us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-gold-accent transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-brown-medium border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href}>
                    <Link 
                      to={service.href}
                      className="w-full text-foreground hover:text-gold-accent"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/blog" 
              className="text-foreground hover:text-gold-accent transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/team" 
              className="text-foreground hover:text-gold-accent transition-colors duration-200"
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-gold-accent transition-colors duration-200"
            >
              Contact us
            </Link>
          </nav>

          {/* Search and Book Appointment */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {!isSearchOpen ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-foreground hover:text-gold-accent"
              >
                <Search className="w-5 h-5" />
              </Button>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 bg-card border-border"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </form>
            )}

            {/* Book Appointment Button */}
            <Button 
              variant="outline"
              className="hidden md:inline-flex border-brown-light text-foreground hover:bg-brown-light hover:text-foreground"
            >
              Book Appointment
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-foreground hover:text-gold-accent">
                    Home
                  </Link>
                  <Link to="/about" className="text-foreground hover:text-gold-accent">
                    About us
                  </Link>
                  <div className="space-y-2">
                    <span className="text-foreground font-medium">Services</span>
                    {services.map((service) => (
                      <Link 
                        key={service.href}
                        to={service.href}
                        className="block pl-4 text-muted-foreground hover:text-gold-accent"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <Link to="/blog" className="text-foreground hover:text-gold-accent">
                    Blog
                  </Link>
                  <Link to="/team" className="text-foreground hover:text-gold-accent">
                    Our Team
                  </Link>
                  <Link to="/contact" className="text-foreground hover:text-gold-accent">
                    Contact us
                  </Link>
                  <Button 
                    variant="outline"
                    className="border-brown-light text-foreground hover:bg-brown-light"
                  >
                    Book Appointment
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;