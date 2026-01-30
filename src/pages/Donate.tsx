import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DonateModal from "@/components/DonateModal";
import heroImage from "@/assets/hero-community.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/70" />
        </div>
        
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground font-medium">Make an Impact</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-2xl">
                Support Our Mission
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                Your contribution helps us connect more Filipinos to life-changing opportunities
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <div className="container px-4 py-20">
        {/* Impact Section */}
        <section className="mb-20 -mt-12">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">How Your Donation Helps</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={0}>
              <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 group h-full">
                <div className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Community Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building partnerships with schools, local organizations, and communities to expand our reach and impact across the Philippines
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={150}>
              <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/30 group h-full">
                <div className="bg-gradient-to-br from-secondary to-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Direct Assistance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing immediate support to families in need, helping them access opportunities and overcome barriers to education and livelihood
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="mb-20">
          <Card className="relative p-12 lg:p-16 overflow-hidden text-center border-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary rounded-3xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Make a Difference Today
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Every contribution, no matter the size, helps us create pathways to prosperity for Filipino families
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-white/90 text-lg px-10 py-7 shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/get-involved">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-10 py-7 shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Other Ways to Help
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        <DonateModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>


      <div className="container px-4 py-20">
        {/* Partnerships */}
        <section className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">Our Partners</h2>
          <Card className="p-10 border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
            <p className="text-center text-muted-foreground mb-10 text-lg">
              We work with trusted organizations to maximize our impact:
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-lg">Educational Institutions</h3>
                <p className="text-muted-foreground">
                  Local schools and universities
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-lg">Youth Organizations</h3>
                <p className="text-muted-foreground">
                  Student councils and youth groups
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-lg">Community Groups</h3>
                <p className="text-muted-foreground">
                  Barangay associations and NGOs
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Transparency */}
        <section>
          <Card className="relative p-10 border-2 border-primary/20 overflow-hidden group hover:shadow-xl hover:border-primary/40 transition-all duration-500 rounded-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-secondary">Transparency & Accountability</h2>
                <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                  We believe in complete transparency. All donations are tracked and reported regularly to ensure 
                  your contribution makes the maximum impact.
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3 group/item">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold group-hover/item:scale-110 transition-transform">✓</span>
                    <span>Quarterly financial reports available to all donors</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold group-hover/item:scale-110 transition-transform">✓</span>
                    <span>Detailed breakdown of fund allocation</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold group-hover/item:scale-110 transition-transform">✓</span>
                    <span>Regular updates on projects and beneficiaries</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Donate;