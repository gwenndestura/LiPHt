import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingDown, BookOpen, Briefcase, Users, Heart, ArrowRight } from "lucide-react";
import sdgHeroImage from "@/assets/sdg-poverty-hero.jpg";
import livelihoodSupport from "@/assets/livelihood-support.jpg";

const SDG = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sdgHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-20 h-20 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground drop-shadow-xl">
              SDG 1: No Poverty
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 drop-shadow-lg">
              LiPHt's commitment to ending poverty in all its forms everywhere
            </p>
          </div>
        </div>
      </section>

      {/* What is SDG 1 */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-secondary text-center">Understanding SDG 1</h2>
            <Card className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                <strong>Sustainable Development Goal 1</strong> aims to end poverty in all its forms everywhere 
                by 2030. This ambitious goal recognizes that poverty goes beyond lack of income, it encompasses 
                limited access to education, healthcare, clean water, and economic opportunities.<sup className="text-primary">1</sup>
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                The goal calls for social protection systems, equal rights to economic resources, and building 
                the resilience of the poor and vulnerable to economic, social, and environmental shocks.<sup className="text-primary">2</sup>
              </p>
              <div className="text-sm text-muted-foreground space-y-1 border-t pt-4">
                <p><sup>1</sup> United Nations. (2015). <em>Transforming our world: the 2030 Agenda for Sustainable Development</em>. Retrieved from <a href="https://sdgs.un.org/goals/goal1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://sdgs.un.org/goals/goal1</a></p>
                <p><sup>2</sup> United Nations Development Programme. (2024). <em>Goal 1: No Poverty</em>. Retrieved from <a href="https://www.undp.org/sustainable-development-goals/no-poverty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.undp.org/sustainable-development-goals/no-poverty</a></p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Poverty in the Philippines */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-secondary text-center">
              Why Poverty Persists in the Philippines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <TrendingDown className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-secondary">Limited Access to Education</h3>
                <p className="text-muted-foreground">
                  Many families cannot afford quality education, limiting opportunities for upward mobility 
                  and better employment prospects.
                </p>
              </Card>

              <Card className="p-6">
                <Briefcase className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-secondary">Lack of Skills Training</h3>
                <p className="text-muted-foreground">
                  Without technical and vocational skills, individuals struggle to find sustainable livelihood 
                  opportunities in a competitive job market.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-secondary">Information Gaps</h3>
                <p className="text-muted-foreground">
                  Many Filipinos are unaware of available government programs, scholarships, and support systems 
                  that could help them escape poverty.
                </p>
              </Card>

              <Card className="p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-secondary">Systemic Barriers</h3>
                <p className="text-muted-foreground">
                  Complex application processes and lack of guidance prevent deserving individuals from 
                  accessing life-changing opportunities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How LiPHt Contributes */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Side-by-side hero section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-secondary">WHY WE</span>{" "}
                  <span className="text-primary">SUPPORT</span>{" "}
                  <span className="text-accent">THEM</span>
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Poverty sits at the <strong className="text-accent">heart of SDG 1</strong>. Communities need 
                  everyone to have safe, adequate access to opportunities. This is why every program we share is 
                  a step towards making <strong className="text-primary">sustainable futures</strong>.<sup className="text-primary">3</sup>
                </p>
                <p className="text-lg text-foreground mb-4">
                  <strong className="text-primary">LiPHt</strong> provides immediate action to improve the overall 
                  well-being of communities, contributing directly to SDG 1, which aims to ensure everyone has 
                  adequate, safe, and affordable access to basic necessities.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><sup>3</sup> Philippine Statistics Authority. (2023). <em>Poverty Incidence among Filipinos</em>. Retrieved from <a href="https://psa.gov.ph/statistics/poverty" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://psa.gov.ph/statistics/poverty</a></p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={livelihoodSupport} 
                  alt="Filipino families receiving livelihood support and community empowerment programs"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary">Scholarships & Education</h3>
                    <p className="text-foreground mb-4">
                      We connect students to comprehensive scholarship programs from government agencies, 
                      private institutions, and international organizations. By making education accessible, 
                      we break the cycle of poverty and create pathways to better opportunities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>CHED and DOST scholarship programs for undergraduate studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Private foundation grants for deserving students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>International scholarship opportunities for higher education</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary">Skills Training & Development</h3>
                    <p className="text-foreground mb-4">
                      We provide access to free technical and vocational training programs through TESDA and 
                      partner organizations. These programs equip individuals with in-demand skills for sustainable employment.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>TESDA free training courses with National Certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Digital skills and online work training programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Entrepreneurship and business management workshops</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary">Livelihood Programs</h3>
                    <p className="text-foreground mb-4">
                      We connect communities to sustainable livelihood programs from DTI, DSWD, and local 
                      government units. These programs provide capital, training, and support for micro-entrepreneurs.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>DTI Negosyo Serbisyo sa Barangay for small business support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>DSWD Sustainable Livelihood Program for community groups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>LGU livelihood projects and microfinancing opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary">Donations & Partnerships</h3>
                    <p className="text-foreground mb-4">
                      Through transparent fundraising and strategic partnerships, we directly support Filipino 
                      families in need while continuously improving our platform to reach more communities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Direct financial assistance for urgent needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Platform development to expand our reach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Community partnerships with schools and local organizations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-secondary to-primary text-center">
            <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
              Join Us in Fighting Poverty
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Together, we can create a Philippines where every person has access to opportunities 
              for education, employment, and a better life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/opportunities">
                <Button variant="hero" size="lg" className="bg-background text-secondary hover:bg-background/90">
                  Explore Opportunities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary">
                  Support Our Cause
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SDG;
