import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 my-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-black opacity-30 rounded-2xl blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center p-8 glass-card">
        <p className="text-yellow-400 uppercase text-sm font-semibold tracking-widest">Stay Connected</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Subscribe For The Latest In Prop Trading News And Deals
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-white bg-black/80 border border-gray-700 rounded-full outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 placeholder-gray-400"
            />
            {error && <p className="absolute text-xs text-red-400 mt-1 ml-4">{error}</p>}
          </div>
          <Button 
            type="submit" 
            variant="default" 
            size="default" 
            className="whitespace-nowrap w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </form>
        <p className="text-xs text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionSection;
