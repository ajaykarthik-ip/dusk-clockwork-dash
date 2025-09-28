import { Card } from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  hours: number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
}

export function SummaryCard({ title, hours, subtitle, trend }: SummaryCardProps) {
  const trendColor = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-muted-foreground"
  }[trend || "neutral"];

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-glass-border backdrop-blur-sm hover:bg-card-hover transition-all duration-300 hover:shadow-glow hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            {title}
          </h3>
          <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground font-display">
            {hours}h
          </div>
          {subtitle && (
            <p className={`text-sm ${trendColor} font-medium`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}