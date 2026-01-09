import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Globe, 
  Ticket, 
  CheckCircle2, 
  Star,
  Users,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { getEventById, getTicketsByEventId } from "@/data/events";
import { toast } from "sonner";

const EventAccess = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : undefined;
  const tickets = eventId ? getTicketsByEventId(eventId) : [];
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const onlineTickets = tickets.filter(t => t.type === "online");
  const offlineTickets = tickets.filter(t => t.type === "offline");

  const handlePurchase = (ticketId: string, ticketName: string) => {
    setSelectedTicket(ticketId);
    // Mocked payment flow
    toast.success(`Selected: ${ticketName}`, {
      description: "Payment integration will be available soon. Thank you for your interest!",
    });
  };

  const formatPrice = (price: number, currency: string) => {
    if (currency === "INR") {
      return `₹${price.toLocaleString("en-IN")}`;
    }
    return `${currency} ${price}`;
  };

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

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/events/${event.id}`} 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {event.title}
          </Link>
          
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">{event.sector}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Access & Ticketing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to experience {event.title}. Get online access from anywhere or book your physical visit.
            </p>
          </div>

          {/* Event Quick Info */}
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{event.exhibitorCount}+ Exhibitors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Online Access */}
          {onlineTickets.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Online Access</h2>
                  <p className="text-muted-foreground">Explore the event digitally from anywhere</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {onlineTickets.map((ticket) => (
                  <Card 
                    key={ticket.id} 
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      selectedTicket === ticket.id ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{ticket.name}</CardTitle>
                          <CardDescription>Digital Event Access</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary">
                          Online
                        </Badge>
                      </div>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-foreground">
                          {formatPrice(ticket.price, ticket.currency)}
                        </span>
                        <span className="text-muted-foreground"> / person</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {ticket.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {ticket.maxQuantity && (
                        <div className="mb-4 p-3 bg-accent rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Availability</span>
                            <span className="font-medium text-foreground">
                              {ticket.maxQuantity - ticket.soldCount} remaining
                            </span>
                          </div>
                          <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${(ticket.soldCount / ticket.maxQuantity) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <Button 
                        className="w-full" 
                        size="lg"
                        disabled={!ticket.isAvailable}
                        onClick={() => handlePurchase(ticket.id, ticket.name)}
                      >
                        {ticket.isAvailable ? "Buy Online Access" : "Sold Out"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Physical Visit */}
          {offlineTickets.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Physical Visit</h2>
                  <p className="text-muted-foreground">Experience the event in person at {event.venue}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offlineTickets.map((ticket, index) => (
                  <Card 
                    key={ticket.id} 
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      selectedTicket === ticket.id ? "ring-2 ring-primary" : ""
                    } ${index === offlineTickets.length - 1 && offlineTickets.length > 1 ? "border-primary" : ""}`}
                  >
                    {index === offlineTickets.length - 1 && offlineTickets.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary" />
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{ticket.name}</CardTitle>
                          <CardDescription>In-Person Event Access</CardDescription>
                        </div>
                        <Badge variant="outline">
                          Offline
                        </Badge>
                      </div>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-foreground">
                          {formatPrice(ticket.price, ticket.currency)}
                        </span>
                        <span className="text-muted-foreground"> / person</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {ticket.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {ticket.maxQuantity && (
                        <div className="mb-4 p-3 bg-accent rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Availability</span>
                            <span className="font-medium text-foreground">
                              {ticket.maxQuantity - ticket.soldCount} remaining
                            </span>
                          </div>
                          <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${(ticket.soldCount / ticket.maxQuantity) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <Button 
                        className="w-full" 
                        size="lg"
                        variant={index === offlineTickets.length - 1 && offlineTickets.length > 1 ? "default" : "outline"}
                        disabled={!ticket.isAvailable}
                        onClick={() => handlePurchase(ticket.id, ticket.name)}
                      >
                        {ticket.isAvailable ? "Book Physical Visit" : "Sold Out"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Upgrade Section */}
          {onlineTickets.length > 0 && offlineTickets.length > 0 && (
            <Card className="bg-gradient-to-r from-primary/5 via-accent to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Already have online access?
                    </h3>
                    <p className="text-muted-foreground">
                      Upgrade to a physical visit pass and experience the event in person. 
                      Your online access benefits will remain active throughout the event.
                    </p>
                  </div>
                  <Button size="lg" variant="outline" className="shrink-0">
                    Upgrade Your Pass
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact our support team or check our FAQ section for common queries about event access and ticketing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`/events/${event.id}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventAccess;
