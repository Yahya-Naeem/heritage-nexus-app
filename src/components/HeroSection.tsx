import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import cityBackground from '@/assets/city-background.jpg';
import teamMember from '@/assets/team-member.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cityBackground}
          alt="City skyline background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Legal
                <span className="block text-gold-accent">Consultation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Law Firm is simply dummy text of the printing and typesetting industry. Law Firm has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brown-light text-foreground hover:bg-brown-light hover:text-foreground"
              >
                Our Services
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex space-x-3 pt-8">
              <div className="w-3 h-3 bg-gold-accent rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
            </div>
          </div>

          {/* Team Member Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <img
                  src={teamMember}
                  alt="Professional team member"
                  className="w-full h-full object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute inset-0 rounded-2xl ring-2 ring-gold-accent/20"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brown-light/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;