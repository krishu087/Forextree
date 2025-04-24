// import { useState, useEffect } from "react";

// export default function PipsCalculator() {
//   const [formData, setFormData] = useState({
//     currencyPair: "EUR/USD",
//     accountCurrency: "USD",
//     tradeSize: 1,
//     pips: 10,
//   });
//   const [pipValue, setPipValue] = useState(0);
//   const [profitLoss, setProfitLoss] = useState(0);
//   const [errors, setErrors] = useState({});

//   const exchangeRates = {
//     USD: 1,
//     EUR: 1.1,
//     JPY: 0.0067,
//     AUD: 0.6426,
//     CHF: 0.9286,
//     GBP: 1.1899,
//     CAD: 0.7379,
//     XAU: 2141.67,
//   };

//   const pipDecimals = {
//     "EUR/USD": 0.0001,
//     "USD/JPY": 0.01,
//     "GBP/USD": 0.0001,
//     "EUR/GBP": 0.0001,
//     "USD/CAD": 0.0001,
//   };

//   const validateInputs = () => {
//     const newErrors = {};
//     if (!formData.currencyPair) newErrors.currencyPair = "Currency pair is required";
//     if (!formData.accountCurrency) newErrors.accountCurrency = "Account currency is required";
//     if (formData.tradeSize <= 0 || isNaN(formData.tradeSize)) newErrors.tradeSize = "Trade size must be greater than 0";
//     if (isNaN(formData.pips)) newErrors.pips = "Pips must be a valid number";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const calculatePipValue = () => {
//     if (!validateInputs()) return;

//     const { currencyPair, accountCurrency, tradeSize } = formData;
//     const pipDecimal = pipDecimals[currencyPair] || 0.0001;
//     const lotSize = tradeSize * 100000;
//     const quoteCurrency = currencyPair.split("/")[1];

//     let conversionRate = 1;
//     if (quoteCurrency !== accountCurrency) {
//       if (quoteCurrency === "USD") {
//         conversionRate = 1 / exchangeRates[accountCurrency];
//       } else if (accountCurrency === "USD") {
//         conversionRate = exchangeRates[quoteCurrency];
//       } else {
//         conversionRate = exchangeRates[quoteCurrency] / exchangeRates[accountCurrency];
//       }
//     }

//     const value = pipDecimal * lotSize * conversionRate;
//     setPipValue(value.toFixed(2));
//     setProfitLoss((value * formData.pips).toFixed(2));
//   };

//   useEffect(() => {
//     calculatePipValue();
//   }, [formData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "tradeSize" || name === "pips" ? parseFloat(value) || 0 : value,
//     }));
//   };

//   const handleReset = () => {
//     setFormData({
//       currencyPair: "EUR/USD",
//       accountCurrency: "USD",
//       tradeSize: 1,
//       pips: 10,
//     });
//     setPipValue(0);
//     setProfitLoss(0);
//     setErrors({});
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
//         {/* Calculator Card */}
//         <div className="w-full lg:w-2/3 bg-gray-800 rounded-2xl shadow-xl p-6 text-white">
//           <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Forex Pip Calculator</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-sm font-medium mb-2">Currency Pair</label>
//               <select
//                 name="currencyPair"
//                 value={formData.currencyPair}
//                 onChange={handleChange}
//                 className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
//               >
//                 <option value="EUR/USD">EUR/USD</option>
//                 <option value="USD/JPY">USD/JPY</option>
//                 <option value="GBP/USD">GBP/USD</option>
//                 <option value="EUR/GBP">EUR/GBP</option>
//                 <option value="USD/CAD">USD/CAD</option>
//               </select>
//               {errors.currencyPair && <p className="text-red-500 text-xs mt-1">{errors.currencyPair}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Account Currency</label>
//               <select
//                 name="accountCurrency"
//                 value={formData.accountCurrency}
//                 onChange={handleChange}
//                 className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
//               >
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//                 <option value="JPY">JPY</option>
//               </select>
//               {errors.accountCurrency && <p className="text-red-500 text-xs mt-1">{errors.accountCurrency}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Trade Size (Lots)</label>
//               <input
//                 type="number"
//                 name="tradeSize"
//                 value={formData.tradeSize}
//                 onChange={handleChange}
//                 min="0.01"
//                 step="0.01"
//                 className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
//                 placeholder="Enter trade size"
//               />
//               {errors.tradeSize && <p className="text-red-500 text-xs mt-1">{errors.tradeSize}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Pips</label>
//               <input
//                 type="number"
//                 name="pips"
//                 value={formData.pips}
//                 onChange={handleChange}
//                 step="1"
//                 className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
//                 placeholder="Enter pips"
//               />
//               {errors.pips && <p className="text-red-500 text-xs mt-1">{errors.pips}</p>}
//             </div>
//           </div>

//           <div className="mt-6 bg-yellow-500 rounded-lg p-4 text-center text-black">
//             <p className="text-lg font-bold">Pip Value: {formData.accountCurrency} {pipValue}</p>
//             <p className="text-lg font-bold mt-2">Profit/Loss: {formData.accountCurrency} {profitLoss}</p>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               onClick={handleReset}
//               className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
//             >
//               Reset
//             </button>
//           </div>

//           <p className="text-xs text-gray-400 mt-4 text-center">
//             Note: Calculations use approximate exchange rates. For precise results, use real-time rates.
//           </p>
//         </div>

//         {/* Currency Rates Sidebar */}
//         <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg p-4 text-gray-900">
//           <h3 className="text-xl font-semibold mb-4 text-center">Main Currency Rates</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex justify-between"><span>AUD/USD</span><span>0.6426</span></li>
//             <li className="flex justify-between"><span>CHF/USD</span><span>0.9286</span></li>
//             <li className="flex justify-between"><span>EUR/CHF</span><span>0.9286</span></li>
//             <li className="flex justify-between"><span>EUR/GBP</span><span>0.8541</span></li>
//             <li className="flex justify-between"><span>EUR/JPY</span><span>161.99</span></li>
//             <li className="flex justify-between"><span>GBP/CHF</span><span>1.0815</span></li>
//             <li className="flex justify-between"><span>GBP/JPY</span><span>186.66</span></li>
//             <li className="flex justify-between"><span>GBP/USD</span><span>1.1899</span></li>
//             <li className="flex justify-between"><span>USD/CAD</span><span>1.3779</span></li>
//             <li className="flex justify-between"><span>USD/CHF</span><span>0.9078</span></li>
//             <li className="flex justify-between"><span>USD/JPY</span><span>149.75</span></li>
//             <li className="flex justify-between"><span>XAU/USD</span><span>2141.67</span></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

// RealTimeRates Component
const RealTimeRates = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const [rateColors, setRateColors] = useState({});

  const currencyPairs = [
    "AUD/USD", "CHF/USD", "EUR/CHF", "EUR/GBP",
    "EUR/JPY", "GBP/CHF", "GBP/JPY", "GBP/USD",
    "USD/CAD", "USD/CHF", "USD/JPY", "XAU/USD"
  ];

  const fetchRates = async () => {
    try {
      const newRates = {};
      const newColors = {};

      // API key from exchangerate-api.com
      const apiKey = "e3150c027d10b27d7168af56d72f8a64"; // <-- API key here
      const baseCurrencies = [...new Set(currencyPairs.map(pair => pair.split("/")[0]))]; // Get unique base currencies

      // Fetch rates for each base currency
      for (let base of baseCurrencies) {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrencies}`);
        const data = await res.json();

        if (!data.result || data.result !== "success") {
          throw new Error(data["error-type"] || "Failed to fetch rates");
        }

        // Map fetched rates to the currency pairs
        for (let pair of currencyPairs) {
          const [baseCurrency, targetCurrency] = pair.split("/");
          if (baseCurrency === base) {
            const newRate = data.conversion_rates[targetCurrency]?.toFixed(4) || "N/A";
            newRates[pair] = newRate;

            // Compare with previous rate to determine color
            if (prevRates[pair] && newRate !== "N/A" && prevRates[pair] !== "N/A") {
              const current = parseFloat(newRate);
              const previous = parseFloat(prevRates[pair]);
              if (current > previous) {
                newColors[pair] = "text-green-500 transition-colors duration-300";
              } else if (current < previous) {
                newColors[pair] = "text-red-500 transition-colors duration-300";
              } else {
                newColors[pair] = "text-gray-900";
              }
            } else {
              newColors[pair] = "text-gray-900";
            }
          }
        }
      }

      setPrevRates(rates);
      setRates(newRates);
      setRateColors(newColors);
    } catch (err) {
      console.error("Error fetching rates", err);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg p-4 text-gray-900">
      <h3 className="text-xl font-semibold mb-4 text-center">Main Currency Rates</h3>
      <ul className="space-y-2 text-sm">
        {currencyPairs.map(pair => (
          <li className="flex justify-between items-center p-2 hover:bg-gray-100 rounded transition-colors duration-200" key={pair}>
            <span className="font-medium">{pair}</span>
            <span className={`font-semibold ${rateColors[pair] || "text-gray-900"}`}>
              {rates[pair] || "Loading..."}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// PipsCalculator Component
export default function PipsCalculator() {
  const [formData, setFormData] = useState({
    currencyPair: "EUR/USD",
    accountCurrency: "USD",
    tradeSize: 1,
    pips: 10,
  });
  const [pipValue, setPipValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [errors, setErrors] = useState({});

  const exchangeRates = {
    USD: 1,
    EUR: 1.1,
    JPY: 0.0067,
    AUD: 0.6426,
    CHF: 0.9286,
    GBP: 1.1899,
    CAD: 0.7379,
    XAU: 2141.67,
  };

  const pipDecimals = {
    "EUR/USD": 0.0001,
    "USD/JPY": 0.01,
    "GBP/USD": 0.0001,
    "EUR/GBP": 0.0001,
    "USD/CAD": 0.0001,
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.currencyPair) newErrors.currencyPair = "Currency pair is required";
    if (!formData.accountCurrency) newErrors.accountCurrency = "Account currency is required";
    if (formData.tradeSize <= 0 || isNaN(formData.tradeSize)) newErrors.tradeSize = "Trade size must be greater than 0";
    if (isNaN(formData.pips)) newErrors.pips = "Pips must be a valid number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePipValue = () => {
    if (!validateInputs()) return;

    const { currencyPair, accountCurrency, tradeSize } = formData;
    const pipDecimal = pipDecimals[currencyPair] || 0.0001;
    const lotSize = tradeSize * 100000;
    const quoteCurrency = currencyPair.split("/")[1];

    let conversionRate = 1;
    if (quoteCurrency !== accountCurrency) {
      if (quoteCurrency === "USD") {
        conversionRate = 1 / exchangeRates[accountCurrency];
      } else if (accountCurrency === "USD") {
        conversionRate = exchangeRates[quoteCurrency];
      } else {
        conversionRate = exchangeRates[quoteCurrency] / exchangeRates[accountCurrency];
      }
    }

    const value = pipDecimal * lotSize * conversionRate;
    setPipValue(value.toFixed(2));
    setProfitLoss((value * formData.pips).toFixed(2));
  };

  useEffect(() => {
    calculatePipValue();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tradeSize" || name === "pips" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      currencyPair: "EUR/USD",
      accountCurrency: "USD",
      tradeSize: 1,
      pips: 10,
    });
    setPipValue(0);
    setProfitLoss(0);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Calculator Card */}
        <div className="w-full lg:w-2/3 bg-gray-800 rounded-2xl shadow-xl p-6 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Forex Pip Calculator</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Currency Pair</label>
              <select
                name="currencyPair"
                value={formData.currencyPair}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              >
                <option value="EUR/USD">EUR/USD</option>
                <option value="USD/JPY">USD/JPY</option>
                <option value="GBP/USD">GBP/USD</option>
                <option value="EUR/GBP">EUR/GBP</option>
                <option value="USD/CAD">USD/CAD</option>
              </select>
              {errors.currencyPair && <p className="text-red-500 text-xs mt-1">{errors.currencyPair}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Account Currency</label>
              <select
                name="accountCurrency"
                value={formData.accountCurrency}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
              </select>
              {errors.accountCurrency && <p className="text-red-500 text-xs mt-1">{errors.accountCurrency}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Trade Size (Lots)</label>
              <input
                type="number"
                name="tradeSize"
                value={formData.tradeSize}
                onChange={handleChange}
                min="0.01"
                step="0.01"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
                placeholder="Enter trade size"
              />
              {errors.tradeSize && <p className="text-red-500 text-xs mt-1">{errors.tradeSize}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Pips</label>
              <input
                type="number"
                name="pips"
                value={formData.pips}
                onChange={handleChange}
                step="1"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
                placeholder="Enter pips"
              />
              {errors.pips && <p className="text-red-500 text-xs mt-1">{errors.pips}</p>}
            </div>
          </div>

          <div className="mt-6 bg-yellow-500 rounded-lg p-4 text-center text-black">
            <p className="text-lg font-bold">Pip Value: {formData.accountCurrency} {pipValue}</p>
            <p className="text-lg font-bold mt-2">Profit/Loss: {formData.accountCurrency} {profitLoss}</p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleReset}
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
            >
              Reset
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Note: Calculations use approximate exchange rates. For precise results, use real-time rates.
          </p>
        </div>

        {/* RealTimeRates Component */}
        <RealTimeRates />
      </div>
    </div>
  );
}