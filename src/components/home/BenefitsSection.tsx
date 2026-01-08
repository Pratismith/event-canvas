import { Ticket, Store, Calendar, TrendingUp, Globe, Zap } from "lucide-react";
import visitorsImage from "@/assets/visitors-exploring.jpg";
import exhibitorImage from "@/assets/exhibitor-booth.jpg";
import organizerImage from "@/assets/organizer-dashboard.jpg";

const audienceData = [
  {
    title: "For Visitors",
    description:
      "Explore exhibitions from anywhere. Access stalls, products, and connect with exhibitors without travel limitations.",
    image: visitorsImage,
    benefits: [
      { icon: Globe, text: "Access events globally" },
      { icon: Ticket, text: "Affordable digital passes" },
      { icon: Zap, text: "Real-time engagement" },
    ],
  },
  {
    title: "For Exhibitors",
    description:
      "Expand your reach beyond the venue. Showcase products digitally and capture leads from a worldwide audience.",
    image: exhibitorImage,
    benefits: [
      { icon: Store, text: "Digital stall presence" },
      { icon: TrendingUp, text: "Extended visibility" },
      { icon: Globe, text: "Global customer reach" },
    ],
  },
  {
    title: "For Organizers",
    description:
      "Maximize event potential with unified ticketing, extended reach, and new revenue streams through digital participation.",
    image: organizerImage,
    benefits: [
      { icon: Calendar, text: "Unified ticketing" },
      { icon: TrendingUp, text: "Revenue sharing" },
      { icon: Globe, text: "Broader audience" },
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Value for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a visitor, exhibitor, or organizer—Evensia opens new doors for everyone.
          </p>
        </div>

        <div className="space-y-24">
          {audienceData.map((audience, index) => (
            <div
              key={audience.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {audience.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {audience.description}
                </p>

                <div className="space-y-4">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefit.text}
                      className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-all duration-300 hover:translate-x-2 hover:shadow-md group/benefit"
                      style={{ animationDelay: `${benefitIndex * 100}ms` }}
                    >
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/benefit:bg-primary group-hover/benefit:scale-110">
                        <benefit.icon className="h-6 w-6 text-primary transition-colors group-hover/benefit:text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
