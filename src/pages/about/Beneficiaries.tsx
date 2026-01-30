import { Card } from "@/components/ui/card";
import { Users, GraduationCap, Briefcase, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Beneficiaries = () => {
  const beneficiaryGroups = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Young Filipinos seeking scholarships for college, senior high school, and technical-vocational education.",
      examples: ["College students needing tuition assistance", "Senior high school graduates exploring scholarship options", "Out-of-school youth returning to education"],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Briefcase,
      title: "Job Seekers",
      description: "Individuals looking for skills training and employment opportunities to improve their livelihood.",
      examples: ["Unemployed individuals seeking vocational training", "Career shifters exploring new industries", "Fresh graduates looking for their first job"],
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: Home,
      title: "Families",
      description: "Low-income families seeking livelihood programs and financial assistance to improve their quality of life.",
      examples: ["Parents wanting to start small businesses", "Families affected by economic challenges", "Communities seeking collective livelihood projects"],
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Community Groups",
      description: "Organizations and cooperatives looking for funding and training to uplift their communities.",
      examples: ["Women's groups seeking entrepreneurship training", "Farmers' cooperatives exploring support programs", "Youth organizations promoting community development"],
      gradient: "from-primary to-secondary",
    },
  ];

  const stats = [
    { value: "1000+", label: "Opportunities Listed" },
    { value: "50+", label: "Partner Organizations" },
    { value: "81", label: "Provinces Covered" },
    { value: "24/7", label: "Platform Access" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_hsl(var(--secondary)/0.3)_100%)]" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <Users className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Empowering Communities</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-xl">
                Our Beneficiaries
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 drop-shadow-lg max-w-2xl mx-auto">
                Empowering Filipinos from all walks of life with opportunities that transform futures
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Who We Serve</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LiPHt connects diverse groups of Filipinos to opportunities that can transform their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-stagger">
            {beneficiaryGroups.map((group, index) => (
              <Card 
                key={index} 
                className="group p-8 hover-lift border-0 shadow-lg hover:shadow-2xl bg-card overflow-hidden relative"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.gradient}`} />
                
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${group.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <group.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-foreground mb-4 leading-relaxed">{group.description}</p>
                    <ul className="space-y-2">
                      {group.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary)/0.3)_0%,_transparent_50%)]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-primary-foreground text-center">Our Reach</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2 animate-bounce-subtle">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-muted via-card to-muted border-0 shadow-2xl text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
                Are You One of Our Beneficiaries?
              </h2>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                If you're looking for scholarships, training programs, or livelihood opportunities, 
                explore our database and find the right program for you.
              </p>
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/opportunities">
                  Browse Opportunities
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Beneficiaries;