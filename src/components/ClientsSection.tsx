import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const ClientsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Solutions Inc.',
      testimonial: 'Exceptional legal expertise and outstanding client service. They helped us navigate complex corporate regulations with ease.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      company: 'Global Enterprises',
      testimonial: 'Professional, knowledgeable, and always available when we needed them. Highly recommend their services.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'David Wilson',
      company: 'Wilson & Associates',
      testimonial: 'Their attention to detail and strategic approach helped us achieve the best possible outcome in our case.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const clientLogos = [
    'Microsoft',
    'Google',
    'Amazon',
    'Apple',
    'Tesla',
    'Netflix',
    'Meta',
    'IBM'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="text-gold-accent"> Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about our legal services and expertise.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-card border-border hover:shadow-elegant transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-gold-accent" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-4 h-4 fill-gold-accent text-gold-accent"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-elegant transition-all duration-300 group"
              >
                <span className="text-muted-foreground font-semibold text-lg group-hover:text-gold-accent transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 bg-gradient-primary rounded-2xl">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a consultation and discover how our legal expertise 
            can help you achieve your goals.
          </p>
          <button className="bg-background text-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;