import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import digitalConnection from "@/assets/digital-connection.jpg";

const problemPoints = [
  "Geographic distance limits event participation",
  "Travel expenses prevent many from attending",
  "Time constraints reduce audience reach",
  "Exhibitors miss potential customers",
];

const solutionPoints = [
  "Virtual access to physical exhibitions",
  "Real-time interaction with exhibitors",
  "Detailed product and service exploration",
  "Seamless online-to-offline conversion",
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation & Validation",
    description: "Collaborating with selected event organizers across key sectors to validate the digital stall exploration model.",
  },
  {
    phase: "Phase 2",
    title: "Expansion Across Sectors",
    description: "Covering multiple sectors and cities with unified online and offline ticketing and sector-based event discovery.",
  },
  {
    phase: "Phase 3",
    title: "Advanced Engagement",
    description: "Introducing premium features like boosted visibility, performance insights, and seamless ticket upgrades.",
  },
  {
    phase: "Phase 4",
    title: "Global Expansion",
    description: "Expanding beyond India to support international exhibitions and cross-border event discovery.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={digitalConnection}
            alt="Global Connection"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Digital Footprint of a Physical Event
            </h1>
            <p className="text-lg text-muted-foreground">
              We're transforming how the world experiences exhibitions. Breaking down geographical barriers, 
              we're making trade shows, expos, and fairs accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-destructive/5 rounded-2xl p-8 lg:p-12 border border-destructive/20">
              <div className="h-14 w-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground mb-6">
                Physical exhibitions generate strong interest, but attendance remains limited. 
                Geographic distance, travel expenses, and time constraints prevent participation.
              </p>
              <ul className="space-y-3">
                {problemPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-foreground">
                    <span className="h-2 w-2 rounded-full bg-destructive" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground mb-6">
                Evensia transforms physical events into digitally accessible experiences. 
                Every exhibitor is listed with their products and services online.
              </p>
              <ul className="space-y-3">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-xl bg-accent flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To become the global standard digital layer for physical exhibitions, 
              enabling cross-border event discovery and participation. We envision a world 
              where every trade show, expo, and fair is accessible to interested audiences 
              regardless of their location.
            </p>
            <blockquote className="text-2xl font-serif italic text-primary">
              "Let's take events beyond venues and unlock access for everyone."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mt-2 mb-4">
              Future Business Path
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {roadmapPhases.map((phase, index) => (
                <div key={phase.phase} className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="relative z-10 h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="bg-background rounded-xl p-6 shadow-lg border border-border flex-1">
                    <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the Future of Exhibitions?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of visitors, exhibitors, and organizers who are already part of the Evensia ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/events">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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

export default About;
