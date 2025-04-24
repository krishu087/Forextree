import { Button } from "@/components/ui/button";
import PropFirmComparison from "@/components/comparison/PropFirmComparison";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Comparison() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/">
          <a className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
          <span className="gradient-text">Prop Firm</span> Comparison
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Compare top proprietary trading firms to find the best fit for your trading goals. 
          Our comprehensive comparison table helps you evaluate key metrics like profit targets, 
          drawdown limits, and profit splits.
        </p>
      </div>

      <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl p-6 md:p-8">
        <PropFirmComparison />
      </div>

      <div className="mt-12 bg-black/30 rounded-xl border border-white/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Understanding Prop Firm Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Profit Targets</h3>
            <p>
              The amount of profit you need to make to pass each phase of the prop firm challenge. 
              Usually expressed as a percentage of the account size.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Maximum Drawdown</h3>
            <p>
              The maximum amount you can lose from your initial balance. Once exceeded, 
              you fail the challenge or lose your funded account.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Daily Loss Limits</h3>
            <p>
              The maximum amount you can lose in a single trading day. Calculated either from 
              the daily open balance or the highest equity point.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Profit Split</h3>
            <p>
              The percentage of profits you keep after passing the challenge and receiving 
              a funded account. Typically ranges from 50% to 90%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
