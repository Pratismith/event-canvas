import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Users, 
  Globe, 
  Ticket, 
  ArrowRight,
  CheckCircle2,
  Clock
} from "lucide-react";
import { getEventById } from "@/data/events";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : undefined;

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const getStatusBadge = () => {
    switch (event.status) {
      case "live":
        return <Badge className="bg-destructive text-destructive-foreground animate-pulse">Live Now</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
      case "completed":
        return <Badge variant="outline">Completed</Badge>;
    }
  };

  const getEventTypeBadge = () => {
    switch (event.eventType) {
      case "online":
        return <Badge variant="outline" className="border-primary text-primary">Online Only</Badge>;
      case "offline":
        return <Badge variant="outline" className="border-primary text-primary">In-Person Only</Badge>;
      case "hybrid":
        return <Badge variant="outline" className="border-primary text-primary">Hybrid Event</Badge>;
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-[500px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {getStatusBadge()}
              {getEventTypeBadge()}
              <Badge variant="secondary">{event.sector}</Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span>{event.organizerName}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="hero" asChild>
                <Link to={`/events/${event.id}/exhibitors`}>
                  <Users className="h-5 w-5 mr-2" />
                  Explore Exhibitors
                </Link>
              </Button>
              {event.hasOnlineAccess && (
                <Button size="xl" variant="heroOutline" asChild>
                  <Link to={`/events/${event.id}/access`}>
                    <Globe className="h-5 w-5 mr-2" />
                    Get Online Access
                  </Link>
                </Button>
              )}
              <Button size="xl" variant="outline" asChild>
                <Link to={`/events/${event.id}/access`}>
                  <Ticket className="h-5 w-5 mr-2" />
                  Book Physical Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">About This Event</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {event.description}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Event Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Venue Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{event.venue}</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Event Duration</p>
                        <p className="text-muted-foreground">
                          {formatDate(event.startDate)} to {formatDate(event.endDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-32">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Exhibitors</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{event.exhibitorCount}+</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Online Access</span>
                      </div>
                      <span className="text-foreground font-medium">
                        {event.hasOnlineAccess ? "Available" : "Not Available"}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Event Type</span>
                      </div>
                      <span className="text-foreground font-medium capitalize">{event.eventType}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Organized by</h4>
                    <p className="text-foreground font-semibold">{event.organizerName}</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <Link to={`/events/${event.id}/exhibitors`}>
                        View All Exhibitors
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to={`/events/${event.id}/access`}>
                        Get Event Access
                        <Ticket className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
