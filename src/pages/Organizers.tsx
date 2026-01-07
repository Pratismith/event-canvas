import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, TrendingUp, Globe, Ticket, BarChart3, CheckCircle2, ArrowRight, Handshake } from "lucide-react";
import organizerDashboard from "@/assets/organizer-dashboard.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Extended Reach",
    description: "Attract audiences beyond geographical boundaries with digital event access.",
  },
  {
    icon: TrendingUp,
    title: "New Revenue Streams",
    description: "Generate additional income through online access passes and digital stall fees.",
  },
  {
    icon: Ticket,
    title: "Unified Ticketing",
    description: "Offer both online exploration passes and physical tickets through one platform.",
  },
  {
    icon: BarChart3,
    title: "Event Analytics",
    description: "Track engagement, visitor flow, and exhibitor performance with detailed insights.",
  },
];

const partnershipFeatures = [
  "Official digital extension of your event",
  "Revenue sharing partnership model",
  "Exhibitor onboarding support",
  "Unified online & offline ticketing",
  "Online-to-offline ticket conversion",
  "Event analytics dashboard",
  "Marketing and visibility support",
  "Dedicated partnership manager",
];

const Organizers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={organizerDashboard}
            alt="Event Organizer Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              For Event Organizers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Transform Your Event Into a Hybrid Experience
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with Evensia to create an online extension of your physical event. 
              Increase reach, unlock new revenue streams, and offer unified ticketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Partner with Evensia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-4">
              Why Partner with Evensia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take your events beyond physical venues and unlock new opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Partnership Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Revenue Sharing Partnership
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Evensia collaborates with event organizers hosting sector-focused events. 
                Alongside physical events, Evensia enables online event exploration as an 
                official extension of the same event. Revenue from online participation 
                is shared between the event organizer and Evensia.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {partnershipFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
              <Handshake className="h-16 w-16 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">You Host the Event</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Organize your physical exhibition as usual.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">We Create Digital Extension</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Evensia builds the online event experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">We Share Revenue</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Online participation revenue is shared fairly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Sectors We Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-4">
              Events Across Industries
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "IT & Technology",
              "Tourism & Travel",
              "Infrastructure & Construction",
              "Startups & Innovation",
              "Agriculture & Food",
              "Culture & Heritage",
              "Manufacturing",
              "Trade & Commerce",
            ].map((sector) => (
              <div
                key={sector}
                className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Expand Your Event's Reach?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join event organizers who are already leveraging Evensia to create hybrid experiences.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Organizers;
