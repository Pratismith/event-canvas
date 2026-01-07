import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Globe, TrendingUp, Users, BarChart3, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import exhibitorBooth from "@/assets/exhibitor-booth.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Extend your visibility beyond the physical venue to a worldwide audience interested in your products.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Capture leads from visitors who explore your digital stall, increasing your customer pipeline.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Track views, engagement, and inquiries with detailed analytics on your stall performance.",
  },
  {
    icon: MessageSquare,
    title: "Direct Engagement",
    description: "Connect with potential customers through real-time messaging and inquiry tools.",
  },
];

const features = [
  "Company profile with branding",
  "Product & service listings",
  "Images, videos & brochures",
  "Contact & inquiry buttons",
  "Real-time engagement tools",
  "Lead capture & analytics",
];

const Exhibitors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={exhibitorBooth}
            alt="Exhibitor Booth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              For Exhibitors
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Showcase Your Business to the World
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create a digital stall on Evensia and reach customers beyond geographical boundaries. 
              Your products and services, accessible to interested audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Become an Exhibitor
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
              Why Evensia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-4">
              Benefits of Digital Exhibition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expand your reach and maximize your exhibition investment with a digital presence.
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

      {/* Digital Stall Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Your Digital Stall
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Everything You Need to Showcase Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your digital stall is a complete representation of your physical presence. 
                Display your products, share brochures, and engage with visitors—all online.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center">
                  <Store className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Your Company Name</h3>
                  <p className="text-sm text-muted-foreground">IT & Technology</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="h-32 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Product Gallery</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Brochures</span>
                  </div>
                  <div className="h-20 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Videos</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="default">
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Platform Fee
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every exhibitor listed for online exploration is charged a platform fee to showcase 
              their stall, products, and services digitally. Reach audiences beyond the venue 
              while maintaining a structured and professional presence.
            </p>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <p className="text-sm uppercase tracking-wider mb-2">Starting from</p>
              <p className="text-4xl font-bold mb-4">Contact for Pricing</p>
              <p className="text-primary-foreground/80 mb-6">
                Pricing varies based on event, sector, and stall features.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Expand Your Reach?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join exhibitors who are already connecting with global audiences through Evensia.
          </p>
          <Button variant="hero" size="xl">
            List Your Stall Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Exhibitors;
