import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Calendar } from "lucide-react";
import digitalConnection from "@/assets/digital-connection.jpg";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={digitalConnection}
          alt="Global Connection"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Exhibitors */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <Building2 className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              Become an Exhibitor
            </h3>
            <p className="text-muted-foreground mb-6">
              Showcase your products and services to a global audience. Create your digital stall and connect with customers beyond geographical boundaries.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-foreground transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Extended visibility beyond the venue
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Capture leads from global visitors
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Detailed product showcases
              </li>
            </ul>
            <Button variant="default" asChild className="hover-scale hover-glow">
              <Link to="/exhibitors">
                List Your Stall
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* For Organizers */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 shadow-xl text-primary-foreground transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
            <div className="h-14 w-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary-foreground/20 group-hover:scale-110">
              <Calendar className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Partner with Evensia
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Transform your physical event into a hybrid experience. Increase reach, unlock new revenue streams, and offer unified ticketing to your audience.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                Revenue sharing partnership
              </li>
              <li className="flex items-center gap-3 text-sm transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                Unified online & offline ticketing
              </li>
              <li className="flex items-center gap-3 text-sm transition-transform duration-300 hover:translate-x-2">
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                Extended event lifespan
              </li>
            </ul>
            <Button variant="secondary" asChild className="hover-scale">
              <Link to="/organizers">
                Host an Event
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
