import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ticket, Store, CreditCard, RefreshCw, ArrowRight } from "lucide-react";

const revenueStreams = [
  {
    icon: Ticket,
    title: "Online Exploration Access",
    description:
      "Visitors who wish to explore the event digitally—view exhibitor stalls, products, and services—purchase an online access pass.",
    color: "bg-chart-1/10 text-chart-1",
  },
  {
    icon: Store,
    title: "Exhibitor Listing & Platform Fee",
    description:
      "Every exhibitor listed for online exploration is charged a platform fee to showcase their stall, products, and services digitally.",
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    icon: CreditCard,
    title: "Unified Ticketing",
    description:
      "Both online exploration passes and offline event tickets are available through Evensia, making it a single access point for discovery and booking.",
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    icon: RefreshCw,
    title: "Online-to-Offline Conversion",
    description:
      "Visitors who purchase an online access pass can later upgrade to an offline visit by paying the additional amount, increasing physical attendance.",
    color: "bg-chart-4/10 text-chart-4",
  },
];

const BusinessModel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Business Model
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              How Evensia Creates Value
            </h1>
            <p className="text-lg text-muted-foreground">
              A sustainable business model that benefits visitors, exhibitors, and event organizers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                Partnership with Event Organizers
              </h2>
              <p className="text-lg text-muted-foreground">
                Evensia collaborates with event organizers hosting sector-focused events such as tourism, 
                infrastructure, IT, startups, and trade expos. Alongside physical events, Evensia enables 
                online event exploration as an official extension of the same event. Revenue from online 
                participation is shared between the event organizer and Evensia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Revenue Streams
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Multiple Value Creation Points
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {revenueStreams.map((stream) => (
              <div
                key={stream.title}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-xl ${stream.color} flex items-center justify-center mb-6`}>
                  <stream.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{stream.title}</h3>
                <p className="text-muted-foreground">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Market Opportunity</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              The global events market is massive and growing, with significant opportunity for digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
              <p className="text-4xl font-bold mb-2">$1,406B</p>
              <p className="text-primary-foreground/80">Global Events Market (2024)</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
              <p className="text-4xl font-bold mb-2">60.8%</p>
              <p className="text-primary-foreground/80">Projected Growth by 2034</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Competitive Advantage
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                No Direct Competition
              </h2>
              <p className="text-lg text-muted-foreground">
                Currently, there is no single platform that fully digitalizes physical exhibitions by listing 
                every exhibitor with their products and services for live online exploration during the event.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Indirect Competition</h3>
              <p className="text-muted-foreground mb-6">
                Platforms like BookMyShow and Paytm Insider focus on event discovery and ticket booking for 
                movies, concerts, and entertainment. However, they do not support exhibitions or trade expos 
                in a meaningful way—no digital exhibitor stalls, product listings, or remote exploration options.
              </p>
              <p className="text-foreground font-medium">
                Evensia fills this gap by creating a complete digital extension of physical exhibitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            Ready to Be Part of the Future?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're looking to explore events, showcase your business, or partner with us—Evensia has opportunities for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/events">
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessModel;
