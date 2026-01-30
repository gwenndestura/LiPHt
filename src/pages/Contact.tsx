import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, Clock, Phone, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);
    
    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        });

      if (dbError) throw dbError;

      // Send confirmation email
      try {
        await supabase.functions.invoke('send-notification', {
          body: {
            type: 'contact',
            to: formData.email.trim(),
            data: {
              name: formData.name,
              message: formData.message,
            },
          },
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "liphtofficial@gmail.com",
      link: "mailto:liphtofficial@gmail.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 9AM-5PM, Sat: 9AM-12PM",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.3)_0%,_transparent_60%)]" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <MessageSquare className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">We're Here to Help</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">Get in Touch</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Have questions or want to collaborate? We'd love to hear from you.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <ScrollAnimation animation="fade-left" className="lg:col-span-3">
            <Card className="p-8 md:p-10 border-0 shadow-xl bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                    <MessageSquare className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">Send Us a Message</h2>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan dela Cruz"
                        required
                        className="h-12 text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@email.com"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                      className="text-base resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-12 text-base group" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation animation="fade-right" delay={200} className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-card hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-lg font-medium text-secondary hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-secondary">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Card */}
            <Card className="p-6 border-0 shadow-lg bg-muted">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Social Media</p>
                  <p className="text-foreground">Follow us for updates and success stories</p>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-secondary via-secondary to-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--primary)/0.4)_0%,_transparent_60%)]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-primary-foreground">Need Immediate Help?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  If you have an urgent inquiry or need immediate assistance, please contact us directly.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Support
                </Button>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;