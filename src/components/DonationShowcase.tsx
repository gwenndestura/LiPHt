import { Card } from "@/components/ui/card";
import { MapPin, Users, DollarSign, ExternalLink, Calendar } from "lucide-react";

interface DonationShowcaseProps {
  title: string;
  description: string;
  location: string;
  beneficiaries: string;
  amount: string;
  date?: string;
  images: string[];
  facebookLink?: string;
  imageAlts?: string[];
}

const DonationShowcase = ({
  title,
  description,
  location,
  beneficiaries,
  amount,
  date,
  images,
  facebookLink,
  imageAlts = []
}: DonationShowcaseProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-primary)] transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-card via-card to-muted/20">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="relative p-6 lg:p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative grid grid-cols-2 gap-3 h-full">
            {images.slice(0, 6).map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl aspect-[4/3] animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={imageAlts[idx] || `Donation event photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 lg:p-8 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 group/item">
              <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">Location</p>
                <p className="text-muted-foreground text-sm">{location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 group/item">
              <div className="mt-1 p-2 rounded-lg bg-secondary/10 group-hover/item:bg-secondary/20 transition-colors">
                <Users className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">Beneficiaries</p>
                <p className="text-muted-foreground text-sm">{beneficiaries}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 group/item">
              <div className="mt-1 p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors">
                <DollarSign className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">Total Amount</p>
                <p className="text-muted-foreground text-sm">{amount}</p>
              </div>
            </div>

            {date && (
              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 p-2 rounded-lg bg-primary-glow/10 group-hover/item:bg-primary-glow/20 transition-colors">
                  <Calendar className="w-4 h-4 text-primary-glow" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">Date</p>
                  <p className="text-muted-foreground text-sm">{date}</p>
                </div>
              </div>
            )}
          </div>

          {facebookLink && (
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-all duration-300 font-semibold group/link"
            >
              <span className="relative">
                View Full Story on Facebook
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-glow group-hover/link:w-full transition-all duration-300" />
              </span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DonationShowcase;
