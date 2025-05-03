import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { login, user } = useAuth();

  // Debug log when user state changes
  useEffect(() => {
    console.log('Login page - User state:', user);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    console.log('Login attempt started for:', email);

    try {
      console.log('Calling login function...');
      await login(email, password);
      console.log('Login function completed successfully');
      
      toast({
        title: 'Success',
        description: 'Logged in successfully',
      });

      console.log('Redirecting to home...');
      setLocation('/');
    } catch (error: any) {
      console.error('Login error:', error);
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      toast({
        title: 'Error',
        description: error.message || 'An error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center mb-8">
          <motion.h2 
            className="text-4xl font-bold text-foreground tracking-tight"
            variants={slideUp}
          >
            Welcome Back
          </motion.h2>
          <motion.p 
            className="mt-2 text-muted-foreground"
            variants={slideUp}
          >
            Sign in to your account to continue
          </motion.p>
        </div>

        <motion.div 
          className="glass-card p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 shadow-lg"
          variants={slideUp}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 bg-black/50 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-yellow-400/50 focus:ring-yellow-400/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 bg-black/50 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-yellow-400/50 focus:ring-yellow-400/50"
                  />
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Sign in</span>
                  </>
                )}
              </Button>
            </div>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link href="/signup" className="text-yellow-400 hover:text-yellow-300 font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
} 