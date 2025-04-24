

// import React, { useState } from 'react';
// import { Search, Star } from 'lucide-react';

// const PropFirmComparison = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const firms = [
//     {
//       id: 1,
//       name: 'E8 Markets',
//       logo: 'E8',
//       price: { original: 588.00, discounted: 558.60 },
//       accountSize: { amount: '100K', steps: '2 steps' },
//       profitSplit: '80%',
//       profitTarget: { first: '8%', second: '4%' },
//       maxDailyLoss: '4%',
//       maxTotalDrawdown: '8%',
//       drawdownReset: 'Balance / Equity - Highest at EOD',
//       commission: '$0 standard, $5/round lot of raw spreads',
//       profitDrawdownRatio: 1.067,
//       payout: 'Payout on demand',
//       trustRating: 4.3,
//       country: 'United States',
//       established: 'November'
//     },
//     {
//       id: 2,
//       name: 'Alpha Capital Group',
//       logo: 'AC',
//       price: { original: 497.00, discounted: 397.60 },
//       accountSize: { amount: '100K', steps: '2 steps' },
//       profitSplit: '80%',
//       profitTarget: { first: '10%', second: '5%' },
//       maxDailyLoss: '5%',
//       maxTotalDrawdown: '10%',
//       drawdownReset: 'Balance-based',
//       commission: '$0',
//       profitDrawdownRatio: 1.067,
//       payout: '14 Days',
//       trustRating: 4.4,
//       country: 'United Kingdom',
//       established: 'November'
//     }
//   ];

//   // Filter firms based on search term
//   const filteredFirms = firms.filter((firm) =>
//     firm.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 animate-fade-in">
//             Prop Firm Comparison
//           </h1>
//           <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
//             Compare top proprietary trading firms to find the best fit for your trading goals.
//           </p>
//         </div>

//         {/* Search and Button */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//           <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-500 hover:to-amber-600 transition-all">
//             More Options
//           </button>
//           <div className="w-full sm:w-80">
//             <label className="text-gray-200 text-sm font-medium mb-2 block">Search Firms:</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Enter Firm"
//                 className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-gray-200">
//               <thead className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black sticky top-0 z-10">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Firm</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Price</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Account Size</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Profit Split</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Profit Target</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Max Daily Loss</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Max Total Drawdown</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Drawdown Reset</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Commission</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Payout</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Trust Rating</th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Established</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredFirms.length > 0 ? (
//                   filteredFirms.map((firm, index) => (
//                     <tr
//                       key={firm.id}
//                       className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-all animate-fade-in"
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <td className="px-6 py-4">
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-black font-bold mr-4">
//                             {firm.logo}
//                           </div>
//                           <span className="text-sm font-medium">{firm.name}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="line-through text-gray-400 text-sm">${firm.price.original.toFixed(2)}</div>
//                         <div className="text-yellow-400 font-semibold">${firm.price.discounted.toFixed(2)}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-sm">{firm.accountSize.amount}</div>
//                         <div className="text-xs text-gray-400">{firm.accountSize.steps}</div>
//                       </td>
//                       <td className="px-6 py-4 text-sm">{firm.profitSplit}</td>
//                       <td className="px-6 py-4">
//                         <div className="text-sm">1: {firm.profitTarget.first}</div>
//                         <div className="text-sm">2: {firm.profitTarget.second}</div>
//                       </td>
//                       <td className="px-6 py-4 text-sm">{firm.maxDailyLoss}</td>
//                       <td className="px-6 py-4 text-sm">{firm.maxTotalDrawdown}</td>
//                       <td className="px-6 py-4 text-sm">{firm.drawdownReset}</td>
//                       <td className="px-6 py-4 text-sm">{firm.commission}</td>
//                       <td className="px-6 py-4 text-sm">{firm.payout}</td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center">
//                           <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
//                           <span className="text-sm">{firm.trustRating}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-sm">{firm.established}</div>
//                         <div className="text-xs text-gray-400">{firm.country}</div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="12" className="px-6 py-4 text-center text-gray-400">
//                       No firms found matching your search.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropFirmComparison;
import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

const PropFirmComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const firms = [
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
    }
  ];

  const filteredFirms = firms.filter((firm) =>
    firm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 animate-fade-in">
            Prop Firm Comparison
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
            Compare top proprietary trading firms to find the best fit for your trading goals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-500 hover:to-amber-600 transition-all">
            More Options
          </button>
          <div className="w-full sm:w-80">
            <label className="text-gray-200 text-sm font-medium mb-2 block">Search Firms:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Firm"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-200">
              <thead className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Firm</th>
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
              <tbody>
                {filteredFirms.length > 0 ? (
                  filteredFirms.map((firm, index) => (
                    <tr
                      key={firm.id}
                      className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-all animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-black font-bold mr-4">
                            {firm.logo}
                          </div>
                          <span className="text-sm font-medium">{firm.name}</span>
                        </div>
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-6 py-4 text-center text-gray-400">
                      No firms found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropFirmComparison;
