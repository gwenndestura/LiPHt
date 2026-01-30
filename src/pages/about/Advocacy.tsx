import { Card } from "@/components/ui/card";
import { Heart, Target, Users, BookOpen, Briefcase, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-education.jpg";
import communityTraining from "@/assets/community-training.jpg";
import DonationShowcase from "@/components/DonationShowcase";
import donation1_1 from "@/assets/donation1-1.png";
import donation1_2 from "@/assets/donation1-2.png";
import donation1_3 from "@/assets/donation1-3.png";
import donation1_4 from "@/assets/donation1-4.png";
import donation1_5 from "@/assets/donation1-5.png";
import donation1_6 from "@/assets/donation1-6.png";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Advocacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/75" />
        </div>
        
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground font-medium">Our Purpose</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-xl">Our Advocacy</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/95 drop-shadow-lg">
                Understanding poverty in the Philippines and how we're making a difference
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* The Challenge */}
      <div className="container px-4 py-20">
        <section className="mb-16 -mt-12">
          <ScrollAnimation animation="fade-up">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-muted to-muted/50 border-none shadow-xl">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">The Challenge We Face</h2>
                </div>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Poverty in the Philippines remains a significant challenge, affecting millions of families across the nation.
                  While numerous opportunities exist—scholarships, training programs, and livelihood initiatives—many Filipinos, 
                  especially those from low-income communities, remain unaware of or lack access to these resources.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  The gap isn't just about money; it's about access to information, guidance, and a centralized platform 
                  that connects people to opportunities that can transform their lives.
                </p>
              </div>
            </Card>
          </ScrollAnimation>
        </section>
      </div>

      {/* HOW WE EMPOWER FILIPINOS */}
      <section className="mb-16">
        <div className="relative min-h-[550px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${communityTraining})` }}
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-white via-white/95 to-transparent" />
          
          <div className="relative z-10 container px-8 md:px-16 py-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-secondary">HOW WE </span>
                <span className="text-primary">EMPOWER</span>
                <br />
                <span className="text-accent">FILIPINOS</span>
              </h2>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                <strong className="text-primary">LiPHt</strong> brings together scholarships, training programs, 
                and livelihood opportunities from government agencies, private foundations, and international 
                organizations—all in one easy-to-navigate platform.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                By connecting people to education and skills training, we help families break the cycle of 
                poverty and build <strong className="text-accent">sustainable futures</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-6 mb-20">
          <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary hover:-translate-y-1 group">
            <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">Centralized Access</h3>
            <p className="text-foreground/80 leading-relaxed">
              We bring together scholarships, training programs, and livelihood opportunities from government agencies, 
              private foundations, and international organizations—all in one easy-to-navigate platform.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-secondary hover:-translate-y-1 group">
            <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-secondary transition-colors">Clear Information</h3>
            <p className="text-foreground/80 leading-relaxed">
              Each opportunity includes detailed eligibility requirements, application procedures, and deadlines, 
              making it simple for anyone to understand and apply.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-accent hover:-translate-y-1 group">
            <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-accent transition-colors">Community Empowerment</h3>
            <p className="text-foreground/80 leading-relaxed">
              By connecting people to education and skills training, we help families break the cycle of poverty 
              and build sustainable futures.
            </p>
          </Card>
        </div>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 hover:border-primary/30">
              <div className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Compassion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the struggles faced by Filipino families and approach every interaction with empathy and care.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 hover:border-secondary/30">
              <div className="bg-gradient-to-br from-secondary to-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Inclusivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform is designed to be accessible to everyone, regardless of their background or circumstances.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 hover:border-accent/30">
              <div className="bg-gradient-to-br from-accent to-secondary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every opportunity we share has the potential to change lives and create lasting positive change.
              </p>
            </Card>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-gradient-to-br from-secondary via-secondary/95 to-primary p-12 md:p-16 rounded-3xl text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Our Vision</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              A Philippines where every person, regardless of their economic background, has access to the opportunities 
              they need to thrive, grow, and contribute to their communities.
            </p>
          </div>
        </section>
      </div>

      {/* Our Impact - Proof Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 via-muted/30 to-background border-y border-border/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Actions in Motion</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-secondary">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real stories, real impact. See how we transform lives in communities across the Philippines.
            </p>
          </div>
          
          <div className="space-y-12">
            <DonationShowcase
              title="Financial Assistance for Elementary Students"
              description="We successfully provided one-time financial assistance to 10 children in need, helping families overcome barriers to education and giving students the support they need to thrive in school."
              location="Buklod Bahayan, Tartaria, Silang, Cavite"
              beneficiaries="10 children"
              amount="₱2,000.00 (₱200.00 per child)"
              date="November 2024"
              images={[donation1_1, donation1_2, donation1_3, donation1_4, donation1_5, donation1_6]}
              imageAlts={[
                "LiPHt donation event at Tartaria West Elementary School",
                "Financial assistance envelopes prepared for beneficiaries",
                "Certificate of appreciation from school",
                "Children receiving financial assistance",
                "Beneficiary children with their assistance",
                "Distribution of financial aid to students"
              ]}
              facebookLink="https://web.facebook.com/share/p/1MfH38Uhzb/"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;