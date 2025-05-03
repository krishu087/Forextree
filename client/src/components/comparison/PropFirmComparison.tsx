import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Star, SlidersHorizontal } from 'lucide-react';

interface PropFirm {
  id: number;
  name: string;
  logo: string;
  price: { original: number; discounted: number };
  accountSize: { amount: string; steps: string };
  profitSplit: string;
  profitTarget: { first: string; second: string };
  maxDailyLoss: string;
  maxTotalDrawdown: string;
  drawdownReset: string;
  commission: string;
  profitDrawdownRatio: number;
  payout: string;
  trustRating: number;
  country: string;
  established: string;
}

const PropFirmComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const firms: PropFirm[] = [
    {
      id: 1,
      name: 'E8 Markets',
      logo: 'E8',
      price: { original: 588.00, discounted: 558.60 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '80%',
      profitTarget: { first: '8%', second: '4%' },
      maxDailyLoss: '4%',
      maxTotalDrawdown: '8%',
      drawdownReset: 'Balance / Equity - Highest at EOD',
      commission: '$0 standard, $5/round lot of raw spreads',
      profitDrawdownRatio: 1.067,
      payout: 'Payout on demand',
      trustRating: 4.3,
      country: 'United States',
      established: 'November'
    },
    {
      id: 2,
      name: 'Alpha Capital Group',
      logo: 'AC',
      price: { original: 497.00, discounted: 397.60 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '80%',
      profitTarget: { first: '10%', second: '5%' },
      maxDailyLoss: '5%',
      maxTotalDrawdown: '10%',
      drawdownReset: 'Balance-based',
      commission: '$0',
      profitDrawdownRatio: 1.067,
      payout: '14 Days',
      trustRating: 4.4,
      country: 'United Kingdom',
      established: 'November'
    },
    {
      id: 3,
      name: 'FTMO',
      logo: 'FT',
      price: { original: 625.00, discounted: 550.00 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '80%',
      profitTarget: { first: '10%', second: '5%' },
      maxDailyLoss: '5%',
      maxTotalDrawdown: '10%',
      drawdownReset: 'Balance-based',
      commission: '$4/lot',
      profitDrawdownRatio: 1.0,
      payout: 'Monthly',
      trustRating: 4.7,
      country: 'Czech Republic',
      established: '2014'
    },
    {
      id: 4,
      name: 'MyForexFunds',
      logo: 'MF',
      price: { original: 449.00, discounted: 399.00 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '85%',
      profitTarget: { first: '8%', second: '5%' },
      maxDailyLoss: '5%',
      maxTotalDrawdown: '12%',
      drawdownReset: 'Balance-based',
      commission: '$0',
      profitDrawdownRatio: 0.67,
      payout: 'Bi-weekly',
      trustRating: 4.5,
      country: 'United States',
      established: '2020'
    },
    {
      id: 5,
      name: 'True Forex Funds',
      logo: 'TF',
      price: { original: 499.00, discounted: 449.00 },
      accountSize: { amount: '100K', steps: '1 step' },
      profitSplit: '75%',
      profitTarget: { first: '10%', second: '0%' },
      maxDailyLoss: '4%',
      maxTotalDrawdown: '8%',
      drawdownReset: 'Equity-based',
      commission: '$2/lot',
      profitDrawdownRatio: 1.25,
      payout: 'Weekly',
      trustRating: 4.2,
      country: 'United Kingdom',
      established: '2021'
    },
    {
      id: 6,
      name: 'The Funded Trader',
      logo: 'TFT',
      price: { original: 599.00, discounted: 539.00 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '80%',
      profitTarget: { first: '8%', second: '4%' },
      maxDailyLoss: '5%',
      maxTotalDrawdown: '10%',
      drawdownReset: 'Balance-based',
      commission: '$3/lot',
      profitDrawdownRatio: 0.8,
      payout: 'Daily',
      trustRating: 4.6,
      country: 'Australia',
      established: '2019'
    },
    {
      id: 7,
      name: 'Funding Pips',
      logo: 'FP',
      price: { original: 549.00, discounted: 499.00 },
      accountSize: { amount: '100K', steps: '1 step' },
      profitSplit: '90%',
      profitTarget: { first: '12%', second: '0%' },
      maxDailyLoss: '6%',
      maxTotalDrawdown: '12%',
      drawdownReset: 'Equity-based',
      commission: '$1/lot',
      profitDrawdownRatio: 1.0,
      payout: 'Same Day',
      trustRating: 4.3,
      country: 'UAE',
      established: '2022'
    },
    {
      id: 8,
      name: 'Blue Capital FX',
      logo: 'BC',
      price: { original: 475.00, discounted: 427.50 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '85%',
      profitTarget: { first: '7%', second: '4%' },
      maxDailyLoss: '5%',
      maxTotalDrawdown: '9%',
      drawdownReset: 'Balance-based',
      commission: '$0',
      profitDrawdownRatio: 0.78,
      payout: 'Weekly',
      trustRating: 4.1,
      country: 'Singapore',
      established: '2021'
    },
    {
      id: 9,
      name: 'PropFirm Pro',
      logo: 'PP',
      price: { original: 599.00, discounted: 479.20 },
      accountSize: { amount: '100K', steps: '2 steps' },
      profitSplit: '75%',
      profitTarget: { first: '6%', second: '3%' },
      maxDailyLoss: '3%',
      maxTotalDrawdown: '6%',
      drawdownReset: 'Balance / Equity - Highest at EOD',
      commission: '$0',
      profitDrawdownRatio: 1.0,
      payout: '48 Hours',
      trustRating: 4.4,
      country: 'Canada',
      established: '2020'
    },
    {
      id: 10,
      name: 'Elite Trader Funding',
      logo: 'ET',
      price: { original: 650.00, discounted: 585.00 },
      accountSize: { amount: '100K', steps: '3 steps' },
      profitSplit: '90%',
      profitTarget: { first: '5%', second: '3%' },
      maxDailyLoss: '4%',
      maxTotalDrawdown: '8%',
      drawdownReset: 'Equity-based',
      commission: '$2.5/lot',
      profitDrawdownRatio: 0.625,
      payout: 'Monthly',
      trustRating: 4.8,
      country: 'Switzerland',
      established: '2018'
    }
  ];

  const filteredFirms = firms.filter((firm) =>
    firm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <Button variant="glow" size="default" className="flex gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <span>More Options</span>
        </Button>
        <div className="w-full sm:w-80">
          <label className="text-gray-200 text-sm font-medium mb-2 block">Search Firms:</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Firm Name"
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="backdrop-blur-md bg-black/20 rounded-xl shadow-xl overflow-hidden border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full text-gray-200">
            <thead className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Firm</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Account Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Profit Split</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Profit Target</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Max Daily Loss</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Max Total Drawdown</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Drawdown Reset</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Commission</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Payout</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Trust Rating</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Established</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/30">
              {filteredFirms.map((firm, index) => (
                <tr
                  key={firm.id}
                  className="hover:bg-white/5 transition-all"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-black font-bold mr-4">
                        {firm.logo}
                      </div>
                      <span className="text-sm font-medium">{firm.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="line-through text-gray-400 text-sm">${firm.price.original.toFixed(2)}</div>
                    <div className="text-yellow-400 font-semibold">${firm.price.discounted.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">{firm.accountSize.amount}</div>
                    <div className="text-xs text-gray-400">{firm.accountSize.steps}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{firm.profitSplit}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">1: {firm.profitTarget.first}</div>
                    <div className="text-sm">2: {firm.profitTarget.second}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{firm.maxDailyLoss}</td>
                  <td className="px-6 py-4 text-sm">{firm.maxTotalDrawdown}</td>
                  <td className="px-6 py-4 text-sm">{firm.drawdownReset}</td>
                  <td className="px-6 py-4 text-sm">{firm.commission}</td>
                  <td className="px-6 py-4 text-sm">{firm.payout}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-sm">{firm.trustRating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">{firm.established}</div>
                    <div className="text-xs text-gray-400">{firm.country}</div>
                  </td>
                </tr>
              ))}
              {filteredFirms.length === 0 && (
                <tr>
                  <td colSpan={12} className="px-6 py-4 text-center text-gray-400">
                    No firms found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropFirmComparison;
