import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";

// About subpages
import Advocacy from "./pages/about/Advocacy";
import Beneficiaries from "./pages/about/Beneficiaries";
import SDG1 from "./pages/about/SDG1";
import Articles from "./pages/about/Articles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={
              <>
                <Navigation />
                <div className="pt-16">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/advocacy" element={<Advocacy />} />
                    <Route path="/about/beneficiaries" element={<Beneficiaries />} />
                    <Route path="/about/sdg1" element={<SDG1 />} />
                    <Route path="/about/articles" element={<Articles />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Footer />
                <Chatbot />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
