import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, GraduationCap, Briefcase, Wrench, Sparkles } from "lucide-react";
import OpportunityCard from "@/components/OpportunityCard";
import opportunitiesImage from "@/assets/opportunities-banner.jpg";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample opportunities data
  const scholarships = [
    {
      title: "CHED Scholarship Program",
      category: "Scholarship",
      provider: "Commission on Higher Education",
      description: "Free tuition and monthly allowance for deserving students pursuing undergraduate degrees in priority programs. This comprehensive scholarship covers full tuition fees, miscellaneous expenses, and provides a generous monthly stipend to support students throughout their academic journey.",
      eligibility: [
        "Filipino citizen",
        "Incoming college freshman or current student",
        "GPA of 85% or higher",
        "Household income below ₱400,000 annually",
        "Enrolled in a CHED-recognized higher education institution",
        "Taking priority courses identified by CHED",
      ],
      deadline: "May 31, 2025",
      link: "https://ched.gov.ph",
    },
    {
      title: "DOST-SEI Scholarship",
      category: "Scholarship",
      provider: "Department of Science and Technology",
      description: "Full scholarship for students pursuing science and technology courses with service return program. Recipients receive complete financial support including tuition, books, thesis, and living allowances. Upon graduation, scholars commit to serving the Philippines in science and technology fields.",
      eligibility: [
        "Filipino citizen",
        "High school graduate with 85% GPA or higher",
        "Pursuing STEM courses (Science, Technology, Engineering, Mathematics)",
        "Willing to serve in the Philippines after graduation",
        "Passed DOST-SEI qualifying exam",
        "Must maintain required GPA throughout scholarship period",
      ],
      deadline: "July 15, 2025",
      link: "https://www.sei.dost.gov.ph",
    },
    {
      title: "SM Foundation College Scholarship",
      category: "Scholarship",
      provider: "SM Foundation",
      description: "A merit-based scholarship program that provides financial assistance to academically excellent but financially challenged Filipino students. Covers tuition fees, monthly allowance, and school supplies for the entire duration of the college course.",
      eligibility: [
        "Filipino citizen",
        "High school graduate with GPA of 85% or higher",
        "Family income not exceeding ₱300,000 per year",
        "Enrolled in a CHED-recognized institution",
        "Willing to participate in SM Foundation community programs",
      ],
      deadline: "June 30, 2025",
      link: "https://www.sm-foundation.org",
    },
    {
      title: "OWWA Education Scholarship",
      category: "Scholarship",
      provider: "Overseas Workers Welfare Administration",
      description: "Scholarship program exclusively for dependents of active OWWA members (Overseas Filipino Workers). Provides educational assistance from primary to tertiary levels, helping OFW families invest in their children's education.",
      eligibility: [
        "Child or dependent of active OWWA member",
        "Filipino citizen",
        "At least 80% GPA for high school/college students",
        "Enrolled in a recognized educational institution",
        "Must maintain required grades throughout scholarship period",
      ],
      deadline: "August 15, 2025",
      link: "https://www.owwa.gov.ph",
    },
    {
      title: "Gokongwei Brothers Foundation Scholarship",
      category: "Scholarship",
      provider: "Gokongwei Brothers Foundation",
      description: "Merit-based scholarship for exceptional students from low-income families pursuing engineering, technology, and business courses. Provides full tuition coverage, monthly stipend, book allowance, and mentorship opportunities from industry leaders.",
      eligibility: [
        "Filipino citizen",
        "Incoming college freshman with 90% GPA or higher",
        "Family income below ₱250,000 annually",
        "Pursuing engineering, IT, or business administration",
        "Strong leadership and community involvement",
      ],
      deadline: "April 30, 2025",
      link: "https://www.gokongwei.com.ph",
    },
    {
      title: "Metrobank Foundation Scholarship",
      category: "Scholarship",
      provider: "Metrobank Foundation",
      description: "Full scholarship program for outstanding students nationwide. Covers tuition, books, monthly allowance, and offers mentorship and internship opportunities. Scholars become part of a prestigious network of Metrobank scholars and alumni.",
      eligibility: [
        "Filipino citizen",
        "High school graduate with at least 88% GPA",
        "Family income not exceeding ₱350,000 per year",
        "Enrolled in accredited college or university",
        "Demonstrated leadership skills and community service",
      ],
      deadline: "June 15, 2025",
      link: "https://www.metrobankfoundation.org",
    },
  ];

  const livelihoods = [
    {
      title: "TESDA Free Training Programs",
      category: "Training",
      provider: "Technical Education and Skills Development Authority",
      description: "Free technical and vocational training courses with National Certification upon completion. TESDA offers over 200 courses ranging from culinary arts, automotive technology, welding, to digital skills training. Graduates receive nationally recognized certificates that enhance employability.",
      eligibility: [
        "Filipino citizen",
        "At least 18 years old",
        "High school graduate or equivalent (for most courses)",
        "Willing to commit to full training duration",
        "Passed assessment/screening requirements",
        "Physically and mentally fit for chosen course",
      ],
      link: "https://www.tesda.gov.ph",
    },
    {
      title: "DTI Negosyo Serbisyo sa Barangay",
      category: "Livelihood",
      provider: "Department of Trade and Industry",
      description: "Business coaching, facilitation, and access to financing for micro and small entrepreneurs. The program provides comprehensive business development services including business plan preparation, product development assistance, marketing support, and linkage to financing institutions.",
      eligibility: [
        "Filipino citizen",
        "Aspiring or existing micro entrepreneur",
        "Willing to attend business training and seminars",
        "Located in participating barangays",
        "Has viable business idea or existing small business",
        "Committed to business development and growth",
      ],
      link: "https://www.dti.gov.ph",
    },
    {
      title: "DSWD Sustainable Livelihood Program",
      category: "Livelihood",
      provider: "Department of Social Welfare and Development",
      description: "Community-based capacity building, access to employment, and microenterprise development assistance. The program offers microenterprise development, employment facilitation, and capacity building to help families achieve economic stability and self-sufficiency.",
      eligibility: [
        "Filipino citizen from low-income household",
        "Member of organized community group or association",
        "Willing to participate in training and capacity building",
        "Committed to livelihood sustainability",
        "Identified as poor or near-poor by DSWD",
        "Active participation in community development activities",
      ],
      link: "https://www.dswd.gov.ph",
    },
    {
      title: "DOLE Tulong Panghanapbuhay sa Ating Disadvantaged/Displaced Workers (TUPAD)",
      category: "Training",
      provider: "Department of Labor and Employment",
      description: "Community-based package of assistance that provides emergency employment for displaced workers, underemployed and seasonal workers. Participants engage in time-bound community projects while receiving wages and training opportunities.",
      eligibility: [
        "Filipino citizen",
        "18 years old and above",
        "Unemployed, underemployed, or displaced worker",
        "Willing to render 10-30 days of community service",
        "Physically fit to perform assigned tasks",
      ],
      link: "https://www.dole.gov.ph",
    },
    {
      title: "Department of Agriculture Livelihood Support",
      category: "Livelihood",
      provider: "Department of Agriculture",
      description: "Agricultural livelihood programs including seeds, livestock, equipment, and training for farming families. Aims to increase agricultural productivity and improve farmers' income through modern farming techniques and technology.",
      eligibility: [
        "Filipino citizen engaged in farming",
        "Registered farmer or fisherfolk",
        "Has access to farmland or fishing area",
        "Member of farmers' association or cooperative",
        "Willing to adopt modern farming practices",
        "Committed to program requirements and monitoring",
      ],
      link: "https://www.da.gov.ph",
    },
    {
      title: "National Youth Commission Youth Entrepreneurship Program",
      category: "Training",
      provider: "National Youth Commission",
      description: "Entrepreneurship training and mentorship program designed specifically for young Filipinos aged 15-30. Provides business skills training, mentorship from successful entrepreneurs, and access to startup capital and networking opportunities.",
      eligibility: [
        "Filipino citizen aged 15-30 years old",
        "Has innovative business idea or existing small business",
        "Willing to complete full entrepreneurship training",
        "Committed to business development",
        "Available for mentorship sessions and workshops",
      ],
      link: "https://www.nyc.gov.ph",
    },
    {
      title: "Sari-Sari Store Business Development Program",
      category: "Livelihood",
      provider: "Department of Trade and Industry",
      description: "Comprehensive training on managing and growing a sari-sari store business. Includes inventory management, pricing strategies, customer service, bookkeeping, and access to microfinancing. Participants receive business starter kits and ongoing mentorship.",
      eligibility: [
        "Filipino citizen",
        "18 years old and above",
        "Has space for sari-sari store or willing to find location",
        "Willing to attend full training program",
        "Basic reading and writing skills",
        "Committed to running the business",
      ],
      link: "https://www.dti.gov.ph",
    },
    {
      title: "Food Processing and Preservation Training",
      category: "Training",
      provider: "Technical Education and Skills Development Authority",
      description: "Learn food processing techniques, preservation methods, packaging, and food safety standards. Perfect for those wanting to start home-based food businesses. Covers fruit processing, meat processing, and baking. TESDA certification provided upon completion.",
      eligibility: [
        "Filipino citizen",
        "At least 18 years old",
        "Basic literacy required",
        "Willing to complete hands-on training",
        "Physically capable of food preparation work",
        "Pass food safety requirements",
      ],
      link: "https://www.tesda.gov.ph",
    },
    {
      title: "Digital Marketing and E-Commerce Training",
      category: "Training",
      provider: "Department of Information and Communications Technology",
      description: "Free training on social media marketing, online selling platforms, digital payment systems, and e-commerce strategies. Learn to market products online, manage Facebook shops, use online marketplaces, and handle digital transactions safely.",
      eligibility: [
        "Filipino citizen",
        "Basic smartphone or computer literacy",
        "18 years old and above",
        "Access to mobile device or computer",
        "Willing to complete online and in-person sessions",
      ],
      link: "https://dict.gov.ph",
    },
    {
      title: "Cooperative Development and Management Training",
      category: "Livelihood",
      provider: "Cooperative Development Authority",
      description: "Training program for individuals interested in forming or managing cooperatives. Learn cooperative principles, governance, financial management, and member services. Includes assistance in cooperative registration and access to government support programs.",
      eligibility: [
        "Filipino citizen",
        "21 years old and above",
        "Member or aspiring member of a cooperative",
        "Basic understanding of business concepts",
        "Willing to attend full training series",
        "Committed to cooperative development",
      ],
      link: "https://www.cda.gov.ph",
    },
  ];

  const filterOpportunities = <T extends { title: string; description: string; provider: string }>(opportunities: T[]) => {
    if (!searchQuery) return opportunities;
    return opportunities.filter(
      (opp) =>
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.provider.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const tabData = [
    { value: "scholarships", label: "Scholarships", icon: GraduationCap, count: scholarships.length },
    { value: "training", label: "Training", icon: Wrench, count: livelihoods.filter(o => o.category === "Training").length },
    { value: "livelihood", label: "Livelihood", icon: Briefcase, count: livelihoods.filter(o => o.category === "Livelihood").length },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${opportunitiesImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.3)_0%,_transparent_60%)]" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Your Future Starts Here</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-2xl">
              Discover Opportunities
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Explore scholarships, training programs, and livelihood opportunities designed to empower your future
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6 group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Search scholarships, training, or livelihood programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-16 text-lg shadow-xl border-2 focus:border-primary rounded-2xl bg-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="py-12 pb-20">
        <div className="container px-4">
          <Tabs defaultValue="scholarships" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-10 h-14 p-1 bg-muted rounded-2xl">
              {tabData.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className="flex items-center gap-2 text-base font-medium rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md transition-all"
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {tab.count}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="scholarships" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filterOpportunities(scholarships).length > 0 ? (
                  filterOpportunities(scholarships).map((opp, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <OpportunityCard {...opp} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg">No scholarships found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="training" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filterOpportunities(livelihoods.filter(opp => opp.category === "Training")).length > 0 ? (
                  filterOpportunities(livelihoods.filter(opp => opp.category === "Training")).map((opp, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <OpportunityCard {...opp} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg">No training programs found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="livelihood" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filterOpportunities(livelihoods.filter(opp => opp.category === "Livelihood")).length > 0 ? (
                  filterOpportunities(livelihoods.filter(opp => opp.category === "Livelihood")).map((opp, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <OpportunityCard {...opp} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg">No livelihood programs found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;