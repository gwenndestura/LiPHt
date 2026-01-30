import { Card } from "@/components/ui/card";
import { Target, TrendingDown, BookOpen, Briefcase, Users, Heart, Sparkles } from "lucide-react";
import sdgHero from "@/assets/sdg-poverty-hero.jpg";
import livelihoodSupport from "@/assets/livelihood-support.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const SDG1 = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Limited Access to Education",
      description: "Many families cannot afford quality education, limiting opportunities for upward mobility and better employment prospects.",
    },
    {
      icon: Briefcase,
      title: "Lack of Skills Training",
      description: "Without technical and vocational skills, individuals struggle to find sustainable livelihood opportunities in a competitive job market.",
    },
    {
      icon: Users,
      title: "Information Gaps",
      description: "Many Filipinos are unaware of available government programs, scholarships, and support systems that could help them escape poverty.",
    },
    {
      icon: Heart,
      title: "Systemic Barriers",
      description: "Complex application processes and lack of guidance prevent deserving individuals from accessing life-changing opportunities.",
    },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "Scholarships & Education",
      description: "We connect students to comprehensive scholarship programs from government agencies, private institutions, and international organizations.",
    },
    {
      icon: Briefcase,
      title: "Skills Training & Development",
      description: "We provide access to free technical and vocational training programs through TESDA and partner organizations.",
    },
    {
      icon: Users,
      title: "Livelihood Programs",
      description: "We connect communities to sustainable livelihood programs from DTI, DSWD, and local government units.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${sdgHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--primary)/0.3)_0%,_transparent_60%)]" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <Target className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">United Nations Goal</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-xl">
                SDG 1: No Poverty
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/90 drop-shadow-lg">
                End poverty in all its forms everywhere
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Understanding SDG 1 */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 md:p-14 bg-gradient-to-br from-muted via-card to-muted border-0 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Understanding SDG 1</h2>
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Sustainable Development Goal 1</strong> aims to end poverty in all its forms everywhere 
                  by 2030. This ambitious goal recognizes that poverty goes beyond lack of income—it encompasses 
                  limited access to education, healthcare, clean water, and economic opportunities.<sup className="text-primary">1</sup>
                </p>
                <p>
                  The goal calls for social protection systems, equal rights to economic resources, and building 
                  the resilience of the poor and vulnerable to economic, social, and environmental shocks. This is 
                  the core mission that drives everything we do at LiPHt.<sup className="text-primary">2</sup>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground space-y-2">
                <p><sup>1</sup> United Nations. (2015). <em>Transforming our world: the 2030 Agenda for Sustainable Development</em>. <a href="https://sdgs.un.org/goals/goal1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://sdgs.un.org/goals/goal1</a></p>
                <p><sup>2</sup> United Nations Development Programme. (2024). <em>Goal 1: No Poverty</em>. <a href="https://www.undp.org/sustainable-development-goals/no-poverty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.undp.org/sustainable-development-goals/no-poverty</a></p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Poverty Persists */}
      <section className="container px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Why Poverty Persists
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground">Understanding the barriers to overcome</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-stagger">
            {challenges.map((item, index) => (
              <Card 
                key={index} 
                className="group p-8 hover-lift border-0 shadow-lg hover:shadow-2xl bg-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Fight Poverty */}
      <section className="mb-20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            How We Fight Poverty
          </h2>
          <div className="section-divider" />
        </div>
        
        <div className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${livelihoodSupport})` }}
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-background via-background/98 to-transparent" />
          
          <div className="relative z-10 container px-8 md:px-16 py-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Making a Difference</span>
              </div>
              
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                Poverty sits at the <strong className="text-accent">heart of SDG 1</strong>. Communities need 
                everyone to have safe, adequate access to opportunities. This is why every program we share is 
                a step towards making <strong className="text-primary">sustainable futures</strong>.<sup className="text-primary">3</sup>
              </p>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                <strong className="text-primary">LiPHt</strong> provides immediate action to improve the overall 
                well-being of communities, contributing directly to SDG 1, which aims to ensure everyone has 
                adequate, safe, and affordable access to basic necessities.
              </p>
              
              <div className="text-sm text-muted-foreground pt-4 border-t border-border/50">
                <p><sup>3</sup> Philippine Statistics Authority. (2023). <em>Poverty Incidence among Filipinos</em>. <a href="https://psa.gov.ph/statistics/poverty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://psa.gov.ph/statistics/poverty</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="container px-4 mb-20">
        <div className="max-w-5xl mx-auto space-y-6 animate-stagger">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group p-8 border-0 shadow-lg hover:shadow-2xl bg-card hover-lift relative overflow-hidden"
            >
              {/* Accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary" />
              
              <div className="flex items-start gap-6 pl-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="container px-4 pb-20">
        <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--primary)/0.4)_0%,_transparent_60%)]" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <Target className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Our Commitment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Our Vision for SDG 1</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              A Philippines where every person, regardless of their economic background, has access to the opportunities 
              they need to thrive, grow, and contribute to their communities—aligned with the global commitment to end poverty in all its forms everywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDG1;