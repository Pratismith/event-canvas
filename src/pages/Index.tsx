import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <FeaturedEventsSection />
      <BenefitsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
