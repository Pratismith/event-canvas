import { Search, Eye, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Browse events by sector—IT, Tourism, Infrastructure, Startups, Agriculture, and more. Filter by location, date, or industry to find what matters to you.",
  },
  {
    icon: Eye,
    title: "Explore",
    description:
      "Enter the digital exhibition hall. View exhibitor stalls with detailed product listings, images, videos, and brochures—just like being there in person.",
  },
  {
    icon: MessageCircle,
    title: "Connect",
    description:
      "Engage directly with exhibitors through our platform. Request information, schedule meetings, and build meaningful business relationships.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-4">
            Three Simple Steps to Access Any Exhibition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of digital exhibition access. No travel required, no boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:shadow-primary/10"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
