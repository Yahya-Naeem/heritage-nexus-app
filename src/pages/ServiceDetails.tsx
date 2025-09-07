import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import cityBackground from '@/assets/city-background.jpg';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, {
    title: string;
    description: string;
    features: string[];
    details: {
      title: string;
      content: string;
    }[];
  }> = {
    'legal-consultation': {
      title: 'Legal Consultation Services',
      description: 'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and corporates. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various areas and legal fields.',
      features: [
        'Comprehensive legal consultations covering all legal aspects',
        'Specialized legal advice based on a deep understanding of local and international laws',
        '24/7 availability for urgent legal matters',
        'Personalized approach to each client\'s unique needs'
      ],
      details: [
        {
          title: 'General Legal Consultations',
          content: 'At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.'
        },
        {
          title: 'Corporate Legal Consultations',
          content: 'We at Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses. Our advisory services include establishing and organizing companies, all kinds of contracts and agreements, commercial disputes, compliance with local and international laws and regulations.'
        },
        {
          title: 'Individual Legal Consultations',
          content: 'Law Firm offers customized advisory services for individuals, including family issues such as divorce, alimony, and custody, real estate matters like buying, selling, and renting properties, employment issues such as hiring and wrongful termination, criminal cases and defending personal rights.'
        }
      ]
    },
    'corporate-law': {
      title: 'Corporate Law',
      description: 'Comprehensive corporate legal services for businesses of all sizes.',
      features: [
        'Business formation and incorporation',
        'Contract drafting and review',
        'Mergers and acquisitions',
        'Corporate governance and compliance'
      ],
      details: [
        {
          title: 'Business Formation',
          content: 'Expert guidance on choosing the right business structure and handling incorporation processes.'
        },
        {
          title: 'Corporate Governance',
          content: 'Ensuring compliance with regulations and best practices in corporate management.'
        }
      ]
    },
    'family-law': {
      title: 'Family Law',
      description: 'Compassionate legal support for family-related matters.',
      features: [
        'Divorce and separation proceedings',
        'Child custody and support',
        'Adoption services',
        'Prenuptial agreements'
      ],
      details: [
        {
          title: 'Divorce Proceedings',
          content: 'Sensitive handling of divorce cases with focus on fair outcomes for all parties.'
        },
        {
          title: 'Child Custody',
          content: 'Protecting children\'s best interests in custody arrangements.'
        }
      ]
    },
    'criminal-defense': {
      title: 'Criminal Defense',
      description: 'Strong legal defense for criminal charges.',
      features: [
        'Criminal case defense',
        'Legal representation in court',
        'Plea bargain negotiations',
        'Appeals and post-conviction relief'
      ],
      details: [
        {
          title: 'Defense Strategy',
          content: 'Comprehensive defense strategies tailored to each case.'
        },
        {
          title: 'Court Representation',
          content: 'Experienced courtroom advocacy and legal representation.'
        }
      ]
    }
  };

  const service = serviceData[serviceId || 'legal-consultation'] || serviceData['legal-consultation'];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={cityBackground}
            alt="Service background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Service details
          </h1>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Link to="/" className="hover:text-gold-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="hover:text-gold-accent transition-colors">
              About us
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold-accent transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold-accent transition-colors">
              Blog
            </Link>
            <span>/</span>
            <Link to="/team" className="hover:text-gold-accent transition-colors">
              Our Team
            </Link>
            <span>/</span>
            <Link to="/contact" className="hover:text-gold-accent transition-colors">
              Contact us
            </Link>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline"
              className="border-brown-light text-foreground hover:bg-brown-light"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-gold-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>

            {/* Service Title */}
            <h1 className="text-4xl font-bold text-foreground mb-8">
              {service.title}
            </h1>

            {/* Service Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {service.description}
            </p>

            {/* Service Features */}
            <Card className="bg-card border-border mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Details */}
            <div className="space-y-8">
              {service.details.map((detail, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {detail.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {detail.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <Card className="bg-gradient-primary mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Need Legal Assistance?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  At Law Firm, we aim to provide the best legal services to ensure your rights 
                  and offer effective legal solutions. Contact us today for professional 
                  and comprehensive legal consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetails;