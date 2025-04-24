import { Button } from "@/components/ui/button";
import News from "@/components/news/News";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NewsPage() {
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
          <span className="gradient-text">Market</span> News
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Stay updated with the latest developments in the forex market. Our curated news feed provides 
          you with important information that could impact your trading decisions.
        </p>
      </div>

      <div className="mb-12">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl p-6 md:p-8">
          <News />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-black/30 rounded-xl border border-white/5 p-6">
          <h2 className="text-2xl font-bold mb-4">Market Analysis</h2>
          <p className="text-gray-300 mb-4">
            Our team of experienced analysts provides in-depth market analysis to help you understand 
            current trends and potential future movements in the forex market.
          </p>
          <p className="text-gray-300 mb-4">
            By combining technical analysis, fundamental factors, and sentiment indicators, we offer a 
            comprehensive view of market conditions to inform your trading decisions.
          </p>
          <Button variant="outline" size="default" className="mt-2">
            View Market Analysis
          </Button>
        </div>
        
        <div className="bg-black/30 rounded-xl border border-white/5 p-6">
          <h2 className="text-2xl font-bold mb-4">Economic Calendar</h2>
          <p className="text-gray-300 mb-4">
            Keep track of important economic events and data releases that could impact currency pairs.
          </p>
          <div className="space-y-3">
            <CalendarItem 
              time="08:30 AM" 
              event="US Non-Farm Payrolls" 
              impact="High" 
            />
            <CalendarItem 
              time="10:00 AM" 
              event="ECB Interest Rate Decision" 
              impact="High" 
            />
            <CalendarItem 
              time="12:30 PM" 
              event="CAD Unemployment Rate" 
              impact="Medium" 
            />
          </div>
          <Button variant="outline" size="default" className="mt-6 w-full">
            Full Economic Calendar
          </Button>
        </div>
      </div>
    </div>
  );
}

interface CalendarItemProps {
  time: string;
  event: string;
  impact: "Low" | "Medium" | "High";
}

const CalendarItem = ({ time, event, impact }: CalendarItemProps) => {
  const impactColor = {
    Low: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    High: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
      <div>
        <p className="text-sm text-gray-400">{time}</p>
        <p className="font-medium">{event}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full border ${impactColor[impact]}`}>
        {impact}
      </span>
    </div>
  );
};
