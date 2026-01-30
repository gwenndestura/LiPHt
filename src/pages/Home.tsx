import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, HandHeart, Users, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-primary/70" />
        </div>
        
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground font-medium">Empowering Filipino Communities</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 text-primary-foreground leading-tight drop-shadow-2xl">
                LiPHt: Uplifting Filipinos,
                <br />
                <span className="text-primary">Unlocking Futures</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl mb-12 text-primary-foreground/95 leading-relaxed font-light drop-shadow-lg max-w-3xl mx-auto">
                Connecting Filipino communities to accessible opportunities, scholarships, and livelihood programs that empower and transform lives.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/opportunities">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6">
                    Explore Opportunities
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/about/advocacy">
                  <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-secondary shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation animation="fade-up" delay={0}>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground font-medium">Opportunities Listed</p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</p>
              <p className="text-muted-foreground font-medium">Partner Organizations</p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">81</p>
              <p className="text-muted-foreground font-medium">Provinces Covered</p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground font-medium">Platform Access</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4">
          <div className="text-center mb-20">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">What We Do</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-secondary">Our Mission</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                We bridge the gap between Filipino families and opportunities that can change their lives. Through partnerships, advocacy, and transparency, we fight poverty one opportunity at a time.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ScrollAnimation animation="fade-up" delay={0}>
              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 hover:-translate-y-2 group h-full">
                <div className="bg-gradient-to-br from-primary to-primary/70 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">Scholarships</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Access to quality education through scholarships and grants that empower Filipino youth to pursue their dreams and build brighter futures.
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={150}>
              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-secondary/50 hover:-translate-y-2 group h-full">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">Livelihood</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Sustainable livelihood programs that help families build financial independence, stability, and create generational wealth.
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 hover:-translate-y-2 group h-full">
                <div className="bg-gradient-to-br from-accent to-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">Community</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Building stronger communities through training, mentorship, and meaningful connections that create lasting positive impact.
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-left">
                <div>
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-accent font-medium">SDG 1: No Poverty</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                    Aligned with Global Goals
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our work directly contributes to Sustainable Development Goal 1—ending poverty in all its forms everywhere by 2030. We believe that access to education and opportunities is the key to breaking the cycle of poverty.
                  </p>
                  <Link to="/about/sdg1">
                    <Button variant="outline" className="hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                      Learn More About SDG 1
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-right" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <p className="text-3xl font-bold text-primary mb-2">15.5%</p>
                    <p className="text-sm text-muted-foreground">Poverty Rate in PH (2024)</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                    <p className="text-3xl font-bold text-secondary mb-2">2030</p>
                    <p className="text-sm text-muted-foreground">Target Year for SDG 1</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <p className="text-3xl font-bold text-accent mb-2">17.6M</p>
                    <p className="text-sm text-muted-foreground">Filipinos in Poverty</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
                    <p className="text-3xl font-bold text-primary mb-2">∞</p>
                    <p className="text-sm text-muted-foreground">Potential for Impact</p>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-secondary via-secondary/95 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 text-center relative z-10">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground">
              Ready to Make a Difference?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/95 max-w-4xl mx-auto leading-relaxed">
              Join us in creating opportunities and building a better future for Filipino communities across the nation.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/opportunities">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7">
                  View Opportunities
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white border-2 border-white/30 hover:border-white shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;