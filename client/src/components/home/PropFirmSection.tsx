import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PropFirmComparison from "@/components/comparison/PropFirmComparison";

const PropFirmSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">Compare</span> Prop Trading Firms
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Find the best proprietary trading firm for your trading style and goals with our comprehensive comparison tool.
            </p>
          </div>
          <Button variant="secondary" size="default" className="mt-4 md:mt-0" asChild>
            <Link href="/comparison">
              <a>View All Comparisons</a>
            </Link>
          </Button>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl p-6">
          <PropFirmComparison />
        </div>
      </div>
    </div>
  );
};

export default PropFirmSection;
