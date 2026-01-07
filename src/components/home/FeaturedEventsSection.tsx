import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import itExpo from "@/assets/events/it-expo.jpg";
import tourismExpo from "@/assets/events/tourism-expo.jpg";
import startupExpo from "@/assets/events/startup-expo.jpg";
import infrastructureExpo from "@/assets/events/infrastructure-expo.jpg";

const events = [
  {
    id: 1,
    title: "TechIndia IT Expo 2026",
    category: "IT & Technology",
    location: "Bangalore, India",
    date: "March 15-18, 2026",
    image: itExpo,
    exhibitors: 120,
    isLive: true,
  },
  {
    id: 2,
    title: "Tourism & Travel Fair",
    category: "Tourism",
    location: "Dubai, UAE",
    date: "April 5-8, 2026",
    image: tourismExpo,
    exhibitors: 85,
    isLive: false,
  },
  {
    id: 3,
    title: "Startup India Summit",
    category: "Startups",
    location: "Mumbai, India",
    date: "May 20-22, 2026",
    image: startupExpo,
    exhibitors: 200,
    isLive: false,
  },
  {
    id: 4,
    title: "Build & Infrastructure Expo",
    category: "Infrastructure",
    location: "Delhi, India",
    date: "June 10-13, 2026",
    image: infrastructureExpo,
    exhibitors: 95,
    isLive: false,
  },
];

export function FeaturedEventsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Featured Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2">
              Upcoming & Live Exhibitions
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {event.category}
                  </Badge>
                  {event.isLive && (
                    <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                      Live Now
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {event.exhibitors} Exhibitors
                  </span>
                  <span className="text-primary font-medium text-sm group-hover:underline">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
