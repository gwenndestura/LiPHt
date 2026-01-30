import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  LayoutDashboard, 
  Heart, 
  Mail, 
  Briefcase, 
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Loader2
} from 'lucide-react';

interface Donation {
  id: string;
  donor_name: string | null;
  amount: number;
  status: string;
  payment_method: string | null;
  created_at: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

interface Opportunity {
  id: string;
  title: string;
  provider: string;
  category: string;
  is_active: boolean;
  deadline: string | null;
}

const AdminDashboard = () => {
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [donations, setDonations] = useState<Donation[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (!authLoading && user && !isAdmin) {
      toast({
        title: 'Access Denied',
        description: 'You do not have admin privileges.',
        variant: 'destructive',
      });
      navigate('/');
    }
  }, [user, isAdmin, authLoading, navigate, toast]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [donationsRes, messagesRes, opportunitiesRes] = await Promise.all([
        supabase.from('donations').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
        supabase.from('opportunities').select('*').order('created_at', { ascending: false }),
      ]);

      if (donationsRes.data) setDonations(donationsRes.data);
      if (messagesRes.data) setMessages(messagesRes.data);
      if (opportunitiesRes.data) setOpportunities(opportunitiesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const updateDonationStatus = async (id: string, status: 'approved' | 'pending' | 'rejected') => {
    const { error } = await supabase
      .from('donations')
      .update({ 
        status, 
        approved_by: user?.id,
        approved_at: status === 'approved' ? new Date().toISOString() : null 
      })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: `Donation ${status}` });
      fetchData();
    }
  };

  const markMessageAsRead = async (id: string) => {
    const { error } = await supabase
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      fetchData();
    }
  };

  const toggleOpportunityStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('opportunities')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: `Opportunity ${!currentStatus ? 'activated' : 'deactivated'}` });
      fetchData();
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const stats = {
    totalDonations: donations.reduce((sum, d) => sum + Number(d.amount), 0),
    pendingDonations: donations.filter(d => d.status === 'pending').length,
    unreadMessages: messages.filter(m => !m.is_read).length,
    activeOpportunities: opportunities.filter(o => o.is_active).length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage donations, messages, and opportunities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Donations</p>
                  <p className="text-2xl font-bold text-primary">₱{stats.totalDonations.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary/20" />
              </div>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Donations</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pendingDonations}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600/20" />
              </div>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Unread Messages</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.unreadMessages}</p>
                </div>
                <Mail className="h-8 w-8 text-blue-600/20" />
              </div>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Opportunities</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeOpportunities}</p>
                </div>
                <Briefcase className="h-8 w-8 text-green-600/20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="donations" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> Donations
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Messages
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Opportunities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle>Donation Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donations.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No donations yet</p>
                  ) : (
                    donations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="space-y-1">
                          <p className="font-medium">{donation.donor_name || 'Anonymous'}</p>
                          <p className="text-sm text-muted-foreground">
                            ₱{Number(donation.amount).toLocaleString()} via {donation.payment_method}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(donation.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            donation.status === 'approved' ? 'default' :
                            donation.status === 'rejected' ? 'destructive' : 'secondary'
                          }>
                            {donation.status}
                          </Badge>
                          {donation.status === 'pending' && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => updateDonationStatus(donation.id, 'approved')}>
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => updateDonationStatus(donation.id, 'rejected')}>
                                <XCircle className="h-4 w-4 text-red-600" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No messages yet</p>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id} className={`p-4 border rounded-lg transition-colors ${!msg.is_read ? 'bg-primary/5 border-primary/20' : 'hover:bg-muted/50'}`}>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{msg.name}</p>
                              {!msg.is_read && <Badge variant="secondary">New</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground">{msg.email}</p>
                            <p className="text-sm mt-2">{msg.message}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {new Date(msg.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          {!msg.is_read && (
                            <Button size="sm" variant="ghost" onClick={() => markMessageAsRead(msg.id)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities">
            <Card>
              <CardHeader>
                <CardTitle>Opportunities Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No opportunities yet</p>
                  ) : (
                    opportunities.map((opp) => (
                      <div key={opp.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="space-y-1">
                          <p className="font-medium">{opp.title}</p>
                          <p className="text-sm text-muted-foreground">{opp.provider}</p>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{opp.category}</Badge>
                            {opp.deadline && (
                              <span className="text-xs text-muted-foreground">
                                Deadline: {new Date(opp.deadline).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={opp.is_active ? 'default' : 'secondary'}>
                            {opp.is_active ? 'Active' : 'Inactive'}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => toggleOpportunityStatus(opp.id, opp.is_active)}
                          >
                            {opp.is_active ? 'Deactivate' : 'Activate'}
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
