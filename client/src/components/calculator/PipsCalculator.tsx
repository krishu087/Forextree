import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const PipsCalculator = () => {
  const [formData, setFormData] = useState({
    currencyPair: "EUR/USD",
    accountCurrency: "USD",
    tradeSize: 1,
    pips: 10,
  });
  const [pipValue, setPipValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    const newErrors: Record<string, string> = {};
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
    const pipDecimal = pipDecimals[currencyPair as keyof typeof pipDecimals] || 0.0001;
    const lotSize = tradeSize * 100000;
    const quoteCurrency = currencyPair.split("/")[1];

    let conversionRate = 1;
    if (quoteCurrency !== accountCurrency) {
      if (quoteCurrency === "USD") {
        conversionRate = 1 / exchangeRates[accountCurrency as keyof typeof exchangeRates];
      } else if (accountCurrency === "USD") {
        conversionRate = exchangeRates[quoteCurrency as keyof typeof exchangeRates];
      } else {
        conversionRate = exchangeRates[quoteCurrency as keyof typeof exchangeRates] / exchangeRates[accountCurrency as keyof typeof exchangeRates];
      }
    }

    const value = pipDecimal * lotSize * conversionRate;
    setPipValue(parseFloat(value.toFixed(2)));
    setProfitLoss(parseFloat((value * formData.pips).toFixed(2)));
  };

  useEffect(() => {
    calculatePipValue();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Calculator Form */}
      <div className="md:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Currency Pair</label>
            <select
              name="currencyPair"
              value={formData.currencyPair}
              onChange={handleChange}
              className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
            >
              <option value="EUR/USD">EUR/USD</option>
              <option value="USD/JPY">USD/JPY</option>
              <option value="GBP/USD">GBP/USD</option>
              <option value="EUR/GBP">EUR/GBP</option>
              <option value="USD/CAD">USD/CAD</option>
            </select>
            {errors.currencyPair && <p className="text-red-500 text-xs mt-1">{errors.currencyPair}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Account Currency</label>
            <select
              name="accountCurrency"
              value={formData.accountCurrency}
              onChange={handleChange}
              className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
              <option value="CHF">CHF</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
            {errors.accountCurrency && <p className="text-red-500 text-xs mt-1">{errors.accountCurrency}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Trade Size (Lots)</label>
            <input
              type="number"
              name="tradeSize"
              value={formData.tradeSize}
              onChange={handleChange}
              min="0.01"
              step="0.01"
              className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
              placeholder="Enter trade size"
            />
            {errors.tradeSize && <p className="text-red-500 text-xs mt-1">{errors.tradeSize}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Pips</label>
            <input
              type="number"
              name="pips"
              value={formData.pips}
              onChange={handleChange}
              step="1"
              className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
              placeholder="Enter pips"
            />
            {errors.pips && <p className="text-red-500 text-xs mt-1">{errors.pips}</p>}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400 mb-1">Pip Value:</p>
              <p className="text-2xl font-bold text-white">{formData.accountCurrency} {pipValue.toFixed(2)}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400 mb-1">Profit/Loss:</p>
              <p className={`text-2xl font-bold ${profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {formData.accountCurrency} {profitLoss.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleReset} 
          variant="secondary" 
          size="default" 
          className="w-full"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset Calculator
        </Button>
      </div>

      {/* Currency Rates Sidebar */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-center">Main Currency Rates</h3>
        <ul className="space-y-1 text-sm">
          <CurrencyRate pair="AUD/USD" rate="0.6426" />
          <CurrencyRate pair="CHF/USD" rate="0.9286" />
          <CurrencyRate pair="EUR/CHF" rate="0.9286" />
          <CurrencyRate pair="EUR/GBP" rate="0.8541" />
          <CurrencyRate pair="EUR/JPY" rate="161.99" />
          <CurrencyRate pair="GBP/CHF" rate="1.0815" />
          <CurrencyRate pair="GBP/JPY" rate="186.66" />
          <CurrencyRate pair="GBP/USD" rate="1.1899" />
          <CurrencyRate pair="USD/CAD" rate="1.3779" />
          <CurrencyRate pair="USD/CHF" rate="0.9078" />
          <CurrencyRate pair="USD/JPY" rate="149.75" />
          <CurrencyRate pair="XAU/USD" rate="2141.67" />
        </ul>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

interface CurrencyRateProps {
  pair: string;
  rate: string;
}

const CurrencyRate = ({ pair, rate }: CurrencyRateProps) => (
  <li className="flex justify-between p-2 hover:bg-white/5 rounded transition-colors duration-200">
    <span className="font-medium">{pair}</span>
    <span className="font-semibold">{rate}</span>
  </li>
);

export default PipsCalculator;
