import { Link } from "react-router-dom";
import { Heart, Mail, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/lipht-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary to-secondary/95 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Mission */}
          <div className="col-span-1">
            <img src={logo} alt="LiPHt Logo" className="h-24 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Uplifting Filipinos, Unlocking Futures
            </p>
            <Link 
              to="/get-involved" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">About</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about/advocacy" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Our Advocacy
                </Link>
              </li>
              <li>
                <Link to="/about/beneficiaries" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Our Beneficiaries
                </Link>
              </li>
              <li>
                <Link to="/about/sdg1" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  SDG 1: No Poverty
                </Link>
              </li>
              <li>
                <Link to="/about/articles" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href="mailto:liphtofficial@gmail.com" 
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                liphtofficial@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> for Filipino communities
          </p>
          <p className="text-xs text-primary-foreground/50 mt-2">
            © {new Date().getFullYear()} LiPHt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;