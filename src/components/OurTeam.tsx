import { Card, CardContent } from '@/components/ui/card';
import teamMember from '@/assets/team-member.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Anderson',
      role: 'Senior Partner',
      image: teamMember,
      specialties: ['Corporate Law', 'Mergers & Acquisitions']
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Family Law Attorney',
      image: teamMember,
      specialties: ['Family Law', 'Divorce Proceedings']
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Criminal Defense Lawyer',
      image: teamMember,
      specialties: ['Criminal Defense', 'Civil Rights']
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Corporate Counsel',
      image: teamMember,
      specialties: ['Business Law', 'Intellectual Property']
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Expert
            <span className="text-gold-accent"> Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of experienced attorneys who are committed to providing 
            exceptional legal services and achieving the best outcomes for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              className="bg-background border-border hover:shadow-elegant transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gold-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-accent font-medium">
                    {member.role}
                  </p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {specialty}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to learn more about our team and their expertise?
          </p>
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300">
            View All Team Members
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;