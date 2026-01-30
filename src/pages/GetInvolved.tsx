import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Share2, HandHeart, Megaphone, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial support directly helps Filipino families access education, training, and livelihood programs.",
      action: "Donate Now",
      link: "/donate",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers who help spread awareness and assist beneficiaries in their applications.",
      action: "Join Us",
      link: "/contact",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: Share2,
      title: "Share Our Mission",
      description: "Help us reach more Filipinos by sharing our platform and opportunities on your social media.",
      action: "Spread the Word",
      link: "#share",
      gradient: "from-accent to-primary",
    },
    {
      icon: HandHeart,
      title: "Partner With Us",
      description: "Organizations, businesses, and institutions can partner with LiPHt to expand our reach and impact.",
      action: "Become a Partner",
      link: "/contact",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description: "Become an advocate for poverty alleviation by raising awareness about SDG 1 in your community.",
      action: "Learn How",
      link: "/about/sdg1",
      gradient: "from-secondary to-accent",
    },
    {
      icon: BookOpen,
      title: "Submit Opportunities",
      description: "Know of scholarships, training programs, or livelihood opportunities? Help us expand our database.",
      action: "Submit Info",
      link: "/contact",
      gradient: "from-accent to-secondary",
    },
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.3)_0%,_transparent_60%)]" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Make an Impact Today</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-slide-up drop-shadow-2xl">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in-delay max-w-2xl mx-auto">
              Join us in creating pathways out of poverty for Filipino families
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Ways to Make a Difference
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every action, no matter how small, contributes to our mission of ending poverty in the Philippines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
            {involvementOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={index} 
                  className="group p-8 hover-lift border-0 shadow-lg hover:shadow-2xl flex flex-col bg-card relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient}`} />
                  
                  <div className={`bg-gradient-to-br ${option.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{option.description}</p>
                  <Link to={option.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      {option.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--primary)/0.4)_0%,_transparent_60%)]" />
        
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Together, We Can End Poverty
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Every scholarship accessed, every skill learned, and every livelihood started brings us closer to a Philippines where no one is left behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 shadow-2xl text-lg px-8 h-14 group">
                <Link to="/donate">
                  Start with a Donation
                  <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary text-lg px-8 h-14">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;