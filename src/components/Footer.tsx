import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call for subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Legal Consultation',
    'Corporate Law',
    'Family Law',
    'Criminal Defense',
    'Real Estate Law',
    'Immigration Law'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Strategy', href: '/strategy' },
    { name: 'Our Advantages', href: '/advantages' },
    { name: 'Social Responsibility', href: '/social-responsibility' },
    { name: 'Our Services', href: '/services' },
  ];

  return (
    <footer className="bg-brown-dark text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">LF</span>
              </div>
              <span className="font-bold text-xl">Law Firm</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Leading law firm providing comprehensive legal services with expertise, 
              integrity, and dedication to achieving the best outcomes for our clients.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-accent" />
                <span>contact@lawfirm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-accent" />
                <span>123 Legal Avenue, Law City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gold-accent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-gold-accent transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gold-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-gold-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gold-accent">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for legal insights and updates.
            </p>
            
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <form onSubmit={handleSubscription} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span>© 2024. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold-accent">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold-accent">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold-accent">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;