import { Layout } from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Isfaqul Hussain",
    role: "Co-Founder & CEO",
    description: "Driving the vision of making exhibitions accessible to everyone, everywhere. Leading business strategy and partnerships.",
    initials: "IH",
  },
  {
    name: "Pratismith Gogoi",
    role: "Co-Founder & CTO",
    description: "Building the technology that powers Evensia. Leading product development and engineering innovation.",
    initials: "PG",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              The People Behind Evensia
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate team dedicated to transforming how the world experiences exhibitions. 
              We believe in breaking down barriers and making events accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl p-8 shadow-xl border border-border text-center group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Avatar */}
                  <div className="h-32 w-32 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-4xl font-bold text-primary-foreground">
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.description}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl font-serif italic mb-6">
              "Let's take events beyond venues and unlock access for everyone."
            </blockquote>
            <p className="text-primary-foreground/80">
              — The Evensia Team
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who share our vision. 
            If you believe in making exhibitions accessible to everyone, we'd love to hear from you.
          </p>
          <a
            href="mailto:collabassam01@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Mail className="h-5 w-5" />
            collabassam01@gmail.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
