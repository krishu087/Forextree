import { Button } from "@/components/ui/button";
import PipsCalculator from "@/components/calculator/PipsCalculator";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Calculator() {
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
          <span className="gradient-text">Forex Pip</span> Calculator
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Use our pip calculator to quickly determine pip value and potential profit or loss for your forex trades. 
          Adjust your account currency, trade size, and pip movement to calculate results for any currency pair.
        </p>
      </div>

      <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl p-6 md:p-8">
        <PipsCalculator />
      </div>

      <div className="mt-12 bg-black/30 rounded-xl border border-white/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">How to Use the Pip Calculator</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            <strong className="text-yellow-400">1. Select Currency Pair:</strong> Choose the currency pair you're trading (e.g., EUR/USD, GBP/USD).
          </p>
          <p>
            <strong className="text-yellow-400">2. Select Account Currency:</strong> Choose the currency your trading account is denominated in.
          </p>
          <p>
            <strong className="text-yellow-400">3. Enter Trade Size:</strong> Input your position size in lots (1.0 = 100,000 units of base currency).
          </p>
          <p>
            <strong className="text-yellow-400">4. Enter Pips:</strong> Input the number of pips you expect the price to move (positive for profit, negative for loss).
          </p>
          <p>
            The calculator will automatically display the pip value and potential profit/loss based on your inputs.
          </p>
        </div>
      </div>
    </div>
  );
}
