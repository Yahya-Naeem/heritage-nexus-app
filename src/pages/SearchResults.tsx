import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import cityBackground from '@/assets/city-background.jpg';
import teamMember from '@/assets/team-member.jpg';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  
  const mockTeamResults = [
    {
      id: 1,
      name: 'John Anderson',
      role: 'Senior Partner',
      specialties: ['Corporate Law', 'Mergers & Acquisitions'],
      image: teamMember,
      type: 'team'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Family Law Attorney',
      specialties: ['Family Law', 'Divorce Proceedings'],
      image: teamMember,
      type: 'team'
    }
  ];

  const mockServiceResults = [
    {
      id: 1,
      title: 'Legal Consultation Services',
      description: 'Comprehensive legal consultations covering all legal aspects',
      category: 'General Services',
      type: 'service',
      href: '/services/legal-consultation'
    },
    {
      id: 2,
      title: 'Corporate Law',
      description: 'Business formation, contracts, and corporate governance',
      category: 'Business Law',
      type: 'service',
      href: '/services/corporate-law'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  const filteredTeamResults = mockTeamResults.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredServiceResults = mockServiceResults.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalResults = filteredTeamResults.length + filteredServiceResults.length;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={cityBackground}
            alt="Search background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search for services, team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 bg-background/90 border-border backdrop-blur-sm"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-primary hover:shadow-glow"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </form>
          
          <Button 
            variant="outline"
            className="mt-6 border-brown-light text-foreground hover:bg-brown-light"
          >
            Book Appointment
          </Button>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 text-muted-foreground hover:text-gold-accent transition-colors mb-4 sm:mb-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>
              
              <div className="text-muted-foreground">
                {totalResults} result{totalResults !== 1 ? 's' : ''} found for "{searchQuery}"
              </div>
            </div>

            {totalResults === 0 ? (
              <Card className="bg-card border-border p-16 text-center">
                <CardContent>
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse our services and team pages.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {/* Team Results */}
                {filteredTeamResults.length > 0 && (
                  <section>
                    <div className="flex items-center space-x-3 mb-6">
                      <User className="w-6 h-6 text-gold-accent" />
                      <h2 className="text-2xl font-bold text-foreground">
                        Team ({filteredTeamResults.length})
                      </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTeamResults.map((member) => (
                        <Card 
                          key={member.id}
                          className="bg-card border-border hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div>
                                <h3 className="font-bold text-foreground group-hover:text-gold-accent transition-colors">
                                  {member.name}
                                </h3>
                                <p className="text-gold-accent text-sm">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">Specialties:</p>
                              <div className="flex flex-wrap gap-2">
                                {member.specialties.map((specialty, index) => (
                                  <Badge 
                                    key={index}
                                    variant="secondary" 
                                    className="bg-brown-light/20 text-foreground"
                                  >
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}

                {/* Service Results */}
                {filteredServiceResults.length > 0 && (
                  <section>
                    <div className="flex items-center space-x-3 mb-6">
                      <Briefcase className="w-6 h-6 text-gold-accent" />
                      <h2 className="text-2xl font-bold text-foreground">
                        Services ({filteredServiceResults.length})
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {filteredServiceResults.map((service) => (
                        <Card 
                          key={service.id}
                          className="bg-card border-border hover:shadow-elegant transition-all duration-300 group"
                        >
                          <CardContent className="p-6">
                            <Link to={service.href} className="block">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h3 className="text-xl font-bold text-foreground group-hover:text-gold-accent transition-colors mb-2">
                                    {service.title}
                                  </h3>
                                  <Badge 
                                    variant="outline" 
                                    className="border-brown-light text-gold-accent mb-3"
                                  >
                                    {service.category}
                                  </Badge>
                                </div>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                              </p>
                              
                              <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-gold-accent group-hover:underline">
                                  Learn more →
                                </span>
                              </div>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalResults > 0 && (
              <div className="flex justify-center items-center space-x-4 mt-16">
                <span className="text-muted-foreground">Pagination</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>1</Button>
                  <Button variant="ghost" size="sm">2</Button>
                  <Button variant="ghost" size="sm">3</Button>
                  <span className="px-2 text-muted-foreground">...</span>
                  <Button variant="ghost" size="sm">99</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;