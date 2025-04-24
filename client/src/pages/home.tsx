import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import PipsCalculatorSection from "@/components/home/PipsCalculatorSection";
import PropFirmSection from "@/components/home/PropFirmSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <PipsCalculatorSection />
      <PropFirmSection />
      <NewsSection />
      <SubscriptionSection />
    </div>
  );
}
