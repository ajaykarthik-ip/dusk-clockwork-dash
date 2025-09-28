import { Card } from "@/components/ui/card";

interface Project {
  name: string;
  hours: number;
  color: string;
}

interface DailyCardProps {
  day: string;
  date: string;
  totalHours: number;
  projects: Project[];
  isToday?: boolean;
}

export function DailyCard({ day, date, totalHours, projects, isToday }: DailyCardProps) {
  return (
    <Card className={`group relative overflow-hidden bg-glass backdrop-blur-glass border border-glass-border hover:bg-glass-hover transition-all duration-500 hover:shadow-glow hover:scale-[1.02] shadow-glass ${isToday ? 'ring-1 ring-primary/50 shadow-glow' : ''}`}>
      <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground font-display">
              {day}
            </h3>
            <p className="text-xs text-muted-foreground">
              {date}
            </p>
          </div>
          {isToday && (
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
          )}
        </div>
        
        <div className="mb-4">
          <div className="text-2xl font-bold text-foreground font-display">
            {totalHours}h
          </div>
        </div>
        
        <div className="space-y-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-lg bg-glass-hover/50 backdrop-blur-sm hover:bg-glass-hover transition-colors duration-300 border border-glass-border/30"
            >
              <div className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-sm text-foreground font-medium">
                  {project.name}
                </span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {project.hours}h
              </span>
            </div>
          ))}
          
          {projects.length === 0 && (
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground">
                No hours logged
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}