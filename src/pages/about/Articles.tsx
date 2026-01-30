import { Card } from "@/components/ui/card";
import { Calendar, ExternalLink, BookOpen, ArrowUpRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Articles = () => {
  const articles = [
    {
      title: "Poverty incidence among Filipinos registered at 15.5% in 2024",
      source: "Philippine Statistics Authority",
      date: "2024",
      description: "The latest official statistics on poverty incidence in the Philippines, showing the current state of poverty among Filipino families.",
      link: "https://psa.gov.ph/statistics/poverty",
      category: "Statistics",
    },
    {
      title: "Philippines: Extreme Poverty Declined but Pace of Poverty Reduction Has Slowed",
      source: "World Bank",
      date: "2024",
      description: "Analysis of poverty trends in the Philippines, highlighting progress made and challenges remaining in poverty reduction efforts.",
      link: "https://www.worldbank.org/en/country/philippines/overview",
      category: "Research",
    },
    {
      title: "SDG 1: No Poverty - Progress and Challenges",
      source: "United Nations Development Programme",
      date: "2024",
      description: "Global overview of progress toward ending poverty, with specific focus on developing countries like the Philippines.",
      link: "https://www.undp.org/sustainable-development-goals/no-poverty",
      category: "International",
    },
    {
      title: "Education and Poverty in the Philippines: A Complex Relationship",
      source: "Asian Development Bank",
      date: "2023",
      description: "Research on how access to education affects poverty outcomes for Filipino families and communities.",
      link: "https://www.adb.org/countries/philippines/main",
      category: "Education",
    },
    {
      title: "Livelihood Programs and Their Impact on Poverty Reduction",
      source: "Department of Social Welfare and Development",
      date: "2024",
      description: "Overview of government livelihood programs and their effectiveness in helping families escape poverty.",
      link: "https://www.dswd.gov.ph/",
      category: "Government",
    },
    {
      title: "TESDA and Skills Development for Employment",
      source: "Technical Education and Skills Development Authority",
      date: "2024",
      description: "How technical-vocational education contributes to employment and poverty alleviation in the Philippines.",
      link: "https://www.tesda.gov.ph/",
      category: "Training",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Statistics: "bg-primary/10 text-primary",
      Research: "bg-secondary/10 text-secondary",
      International: "bg-accent/10 text-accent",
      Education: "bg-primary/10 text-primary",
      Government: "bg-secondary/10 text-secondary",
      Training: "bg-accent/10 text-accent",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.3)_0%,_transparent_60%)]" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <Newspaper className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Knowledge Hub</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
                Articles
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Research and resources about poverty in the Philippines
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-to-br from-muted via-card to-muted border-0 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary">Understanding Poverty</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To effectively address poverty, we must first understand its causes, effects, and the ongoing efforts 
                to combat it. Below are curated articles and resources from reputable sources that provide insights 
                into poverty in the Philippines and the global efforts aligned with SDG 1.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles List */}
      <section className="container px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-secondary">Featured Resources</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-6" />
          </div>
          
          <div className="space-y-6 animate-stagger">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="group p-6 hover-lift border-0 shadow-lg hover:shadow-2xl bg-card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">{article.source}</p>
                    <p className="text-muted-foreground leading-relaxed">{article.description}</p>
                  </div>
                  
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
                  >
                    Read
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Want to Contribute?
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground mb-8">
              Know of other valuable resources about poverty in the Philippines? 
              Help us expand our collection by sharing articles, research papers, or reports.
            </p>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/contact">
                Share a Resource
                <ExternalLink className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;