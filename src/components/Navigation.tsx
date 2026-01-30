import { NavLink } from "@/components/NavLink";
import { Menu, X, ChevronDown, User, LogOut, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logo from "@/assets/lipht-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  const [aboutOpen, setAboutOpen] = useState(false);

  const aboutSubLinks = [
    { to: "/about/advocacy", label: "Our Advocacy" },
    { to: "/about/beneficiaries", label: "Our Beneficiaries" },
    { to: "/about/sdg1", label: "SDG 1: No Poverty" },
    { to: "/about/articles", label: "Articles" },
  ];

  const mainLinks = [
    { to: "/opportunities", label: "Opportunities" },
    { to: "/donate", label: "Donate" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/98 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img src={logo} alt="LiPHt Logo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className="px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-all duration-200 font-medium text-sm"
              activeClassName="bg-primary/10 text-primary font-semibold"
            >
              Home
            </NavLink>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-all duration-200 flex items-center gap-1 font-medium text-sm ${
                  location.pathname.startsWith('/about') ? 'bg-primary/10 text-primary font-semibold' : ''
                }`}>
                  About
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background/98 backdrop-blur-lg border border-border shadow-xl rounded-xl p-1 min-w-[180px]">
                {aboutSubLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <NavLink
                      to={link.to}
                      className="w-full cursor-pointer font-medium text-sm rounded-lg px-3 py-2"
                    >
                      {link.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-all duration-200 font-medium text-sm"
                activeClassName="bg-primary/10 text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}

            {/* Contact Link */}
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-all duration-200 font-medium text-sm"
              activeClassName="bg-primary/10 text-primary font-semibold"
            >
              Contact
            </NavLink>

            {/* User Menu / Auth */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-1 h-9 w-9 rounded-full bg-muted/50 hover:bg-muted">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/98 backdrop-blur-lg border border-border shadow-xl rounded-xl p-1 min-w-[200px]">
                  <div className="px-3 py-2 border-b border-border/50">
                    <p className="text-xs text-muted-foreground">Signed in as</p>
                    <p className="text-sm font-medium truncate">{user.email}</p>
                  </div>
                  <DropdownMenuItem asChild className="mt-1">
                    <Link to="/profile" className="flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2">
                      <User className="h-4 w-4 text-primary" />
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer text-destructive rounded-lg px-3 py-2">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth" className="ml-1">
                <Button variant="outline" size="sm" className="rounded-full px-4 text-sm font-medium border-border/50 hover:border-border hover:bg-muted/50">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Emphasized Get Involved Button */}
            <Link to="/get-involved" className="ml-2">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full px-5"
              >
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border/50 animate-fade-in bg-background/98">
            <NavLink
              to="/"
              className="block px-4 py-2.5 rounded-lg text-foreground/80 hover:bg-muted/80 transition-all font-medium text-sm"
              activeClassName="bg-primary/10 text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {/* About Collapsible for Mobile */}
            <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
              <CollapsibleTrigger className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-foreground/80 hover:bg-muted/80 transition-all font-medium text-sm ${
                location.pathname.startsWith('/about') ? 'bg-primary/10 text-primary font-semibold' : ''
              }`}>
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 animate-accordion-down mt-1">
                {aboutSubLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 rounded-lg text-foreground/70 hover:bg-muted/80 transition-all text-sm font-medium"
                    activeClassName="bg-primary/10 text-primary font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-2.5 rounded-lg text-foreground/80 hover:bg-muted/80 transition-all font-medium text-sm"
                activeClassName="bg-primary/10 text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Contact Link for Mobile */}
            <NavLink
              to="/contact"
              className="block px-4 py-2.5 rounded-lg text-foreground/80 hover:bg-muted/80 transition-all font-medium text-sm"
              activeClassName="bg-primary/10 text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            {/* Mobile Auth */}
            <div className="px-4 py-3 border-t border-border/50 mt-3">
              {user ? (
                <div className="space-y-2">
                  <div className="py-2">
                    <p className="text-xs text-muted-foreground">Signed in as</p>
                    <p className="text-sm font-medium truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      Profile Settings
                    </Button>
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                        <Shield className="h-4 w-4 mr-2 text-primary" />
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-destructive rounded-lg"
                    onClick={() => { handleSignOut(); setIsOpen(false); }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full rounded-lg">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Get Involved Button */}
            <div className="px-4 pt-2">
              <Link to="/get-involved" onClick={() => setIsOpen(false)}>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md rounded-lg"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;