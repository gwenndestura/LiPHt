import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import qrCode from "@/assets/donation-qr.png";
import { QrCode, Heart, CheckCircle, LogIn } from "lucide-react";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

interface DonateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const donationSchema = z.object({
  donorName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  amount: z.number().min(1, "Amount must be at least ₱1"),
  transactionId: z.string().min(1, "Please enter your transaction reference"),
});

const DonateModal = ({ open, onOpenChange }: DonateModalProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [step, setStep] = useState<'info' | 'confirm'>('info');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    amount: "",
    transactionId: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      donationSchema.parse({
        donorName: formData.donorName,
        email: formData.email,
        amount: Number(formData.amount),
        transactionId: formData.transactionId,
      });
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
      // Save donation to database
      const { error: dbError } = await supabase
        .from('donations')
        .insert({
          donor_name: formData.donorName.trim(),
          amount: Number(formData.amount),
          transaction_id: formData.transactionId.trim(),
          notes: formData.notes.trim() || null,
          payment_method: 'InstaPay',
          status: 'pending',
        });

      if (dbError) throw dbError;

      // Send confirmation email
      try {
        await supabase.functions.invoke('send-notification', {
          body: {
            type: 'donation',
            to: formData.email.trim(),
            data: {
              donorName: formData.donorName,
              amount: Number(formData.amount),
            },
          },
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      toast({
        title: "Thank You!",
        description: "Your donation has been recorded. We'll verify it shortly.",
      });
      
      setFormData({ donorName: "", email: "", amount: "", transactionId: "", notes: "" });
      setStep('info');
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to record donation. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    setStep('info');
    setFormData({ donorName: "", email: "", amount: "", transactionId: "", notes: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Heart className="w-6 h-6 text-primary" />
            Support Our Mission
          </DialogTitle>
          <DialogDescription>
            {!user 
              ? "Please sign in to make a donation"
              : step === 'info' 
                ? "Scan the QR code below to make a donation via InstaPay"
                : "Please fill in your donation details for confirmation"
            }
          </DialogDescription>
        </DialogHeader>
        
        {!user ? (
          <div className="space-y-6 py-4">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 bg-muted rounded-full">
                <LogIn className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Sign In Required</h3>
                <p className="text-muted-foreground max-w-sm">
                  To donate and track your contributions, please sign in to your account first.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/auth" onClick={() => onOpenChange(false)}>
                <Button className="w-full" size="lg">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In to Donate
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Don't have an account? You can create one on the sign in page.
              </p>
            </div>
          </div>
        ) : step === 'info' ? (
          <div className="space-y-4">
            <div className="flex justify-center p-6 bg-muted rounded-lg">
              <img 
                src={qrCode} 
                alt="Donation QR Code" 
                className="w-64 h-64 object-contain"
              />
            </div>
            
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <QrCode className="w-5 h-5" />
                <p className="font-semibold">Scan to Donate</p>
              </div>
              <p className="text-sm text-muted-foreground">
                After completing your payment, click the button below to record your donation.
              </p>
            </div>

            <Button 
              className="w-full" 
              onClick={() => setStep('confirm')}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              I've Made My Donation
            </Button>

            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <p className="text-xs text-muted-foreground text-center">
                Thank you for your support! 💙🧡
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="donorName">Your Name</Label>
                <Input
                  id="donorName"
                  placeholder="Juan Dela Cruz"
                  value={formData.donorName}
                  onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₱)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="500"
                  min="1"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionId">Transaction Reference</Label>
                <Input
                  id="transactionId"
                  placeholder="e.g., INSTAPAY123456"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any message you'd like to share..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep('info')}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Donation'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
