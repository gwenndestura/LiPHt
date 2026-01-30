import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, CheckCircle, Share2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface OpportunityCardProps {
  title: string;
  category: string;
  description: string;
  eligibility: string[];
  deadline?: string;
  link?: string;
  provider: string;
}

const OpportunityCard = ({
  title,
  category,
  description,
  eligibility,
  deadline,
  link,
  provider,
}: OpportunityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const shortDescription = description.length > 150 
    ? description.substring(0, 150) + "..." 
    : description;

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/opportunities#${title.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied!",
      description: "Opportunity link copied to clipboard. Share it with others!",
    });
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
            {category}
          </Badge>
          <h3 className="text-xl font-semibold text-secondary">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{provider}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
          className="text-muted-foreground hover:text-primary"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </div>

      <p className="text-foreground mb-4">
        {isExpanded ? description : shortDescription}
      </p>

      {description.length > 150 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 text-primary hover:text-primary/80"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </Button>
      )}

      <div className="space-y-2 mb-4">
        <p className="text-sm font-semibold text-secondary">Eligibility:</p>
        <ul className="space-y-1">
          {eligibility.slice(0, isExpanded ? eligibility.length : 3).map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {eligibility.length > 3 && !isExpanded && (
          <p className="text-xs text-muted-foreground italic">
            +{eligibility.length - 3} more requirements
          </p>
        )}
      </div>

      {deadline && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          <span>Deadline: {deadline}</span>
        </div>
      )}

      {link && (
        <Button variant="outline" className="w-full" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Apply Now
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </Button>
      )}
    </Card>
  );
};

export default OpportunityCard;
