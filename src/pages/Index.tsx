import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OurTeam from '@/components/OurTeam';
import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <OurTeam />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
