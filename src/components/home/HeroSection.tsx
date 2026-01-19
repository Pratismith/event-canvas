import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CalendarSearch, LayoutDashboard, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-exhibition.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital Exhibition Hall"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6 opacity-0 animate-fade-in animate-delay-100">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">
              Redefining Exhibition Experience
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in animate-delay-200">
            <span className="text-primary">Discover</span>
            <span className="text-muted-foreground mx-2">.</span>
            <span className="text-primary">Book</span>
            <span className="text-muted-foreground mx-2">.</span>
            <span className="text-primary relative">
              Explore
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl opacity-0 animate-fade-in animate-delay-300">
            Evensia transforms physical exhibitions into digitally accessible experiences. 
            Explore exhibitor stalls, discover products, and connect with businesses—all from anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in animate-delay-400">
            <Button variant="hero" size="xl" asChild className="hover-scale hover-glow">
              <Link to="/events">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hover-scale">
              <Link to="/about">
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in animate-delay-500">
            <div className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <CalendarSearch className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Explore Events</p>
                <p className="text-xs text-muted-foreground">& Exhibitions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <LayoutDashboard className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Event</p>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <BarChart3 className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Event</p>
                <p className="text-xs text-muted-foreground">Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
