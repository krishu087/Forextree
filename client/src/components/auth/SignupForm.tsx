import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Phone } from 'lucide-react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Form fields state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('basic');
  const [agreed, setAgreed] = useState(false);

  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(phoneNo.replace(/\s/g, ''))) {
      newErrors.phoneNo = "Phone number is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!agreed) {
      newErrors.agreed = "You must agree to the Terms and Privacy Policy";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    const formData = {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirm_password: confirmPassword,
      accountType,
    };

    try {
      // This would be replaced with the actual API endpoint
      const response = await fetch('http://localhost:8000/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - would normally redirect or show success message
        console.log('Account created successfully!');
      } else {
        setErrors({ 
          server: data.message || 'Something went wrong.'
        });
      }
    } catch (error) {
      setErrors({
        server: 'Server error. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f] flex">
      {/* Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-[#2d1f3f] items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Trading Community
          </h2>
          <p className="text-white/70">
            Get access to institutional-grade trading infrastructure and funding opportunities.
          </p>
          
          <div className="mt-12 space-y-6">
            <Feature 
              title="Advanced Trading Tools" 
              description="Access professional-grade pip calculators and risk management tools."
            />
            <Feature 
              title="Prop Firm Comparison" 
              description="Find the best proprietary trading firms for your trading style."
            />
            <Feature 
              title="Market Insights" 
              description="Stay informed with the latest forex market news and analysis."
            />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-white/60">Start your journey with us today</p>
          </div>

          {errors.server && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-white text-sm">
              {errors.server}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="First Name"
                error={errors.firstName}
                icon={<User className="absolute left-3 top-3 text-white/40" size={18} />}
              >
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full bg-[#2d1f3f]/30 border ${errors.firstName ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                  placeholder="Enter your first name"
                />
              </FormField>

              <FormField
                label="Last Name"
                error={errors.lastName}
                icon={<User className="absolute left-3 top-3 text-white/40" size={18} />}
              >
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`w-full bg-[#2d1f3f]/30 border ${errors.lastName ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                  placeholder="Enter your last name"
                />
              </FormField>
            </div>

            <FormField
              label="Email"
              error={errors.email}
              icon={<Mail className="absolute left-3 top-3 text-white/40" size={18} />}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#2d1f3f]/30 border ${errors.email ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                placeholder="Enter your email"
              />
            </FormField>

            <FormField
              label="Phone Number"
              error={errors.phoneNo}
              icon={<Phone className="absolute left-3 top-3 text-white/40" size={18} />}
            >
              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className={`w-full bg-[#2d1f3f]/30 border ${errors.phoneNo ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                placeholder="Enter your phone number"
              />
            </FormField>

            <FormField
              label="Password"
              error={errors.password}
              icon={<Lock className="absolute left-3 top-3 text-white/40" size={18} />}
            >
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-[#2d1f3f]/30 border ${errors.password ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-12 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white/40 hover:text-white/60"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-2 text-sm text-white/40">Must be at least 8 characters long</p>
            </FormField>

            <FormField
              label="Confirm Password"
              error={errors.confirmPassword}
              icon={<Lock className="absolute left-3 top-3 text-white/40" size={18} />}
            >
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full bg-[#2d1f3f]/30 border ${errors.confirmPassword ? 'border-red-400' : 'border-white/10'} rounded-lg pl-10 pr-12 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50`}
                placeholder="Confirm your password"
              />
            </FormField>

            <div className="flex items-start">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className={`mt-1 w-4 h-4 rounded border-white/10 bg-[#2d1f3f]/30 text-yellow-500 focus:ring-yellow-500/50 ${errors.agreed ? 'ring-2 ring-red-500/50' : ''}`}
              />
              <label className="ml-2 text-sm text-white/80">
                I agree to the{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.agreed && <p className="text-xs text-red-400 mt-1">{errors.agreed}</p>}

            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full flex items-center justify-center group"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-white/60">
            Already have an account?{' '}
            <a href="/login" className="text-yellow-400 hover:text-yellow-300">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  error?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FormField = ({ label, error, icon, children }: FormFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-white/80 mb-2">{label}</label>
    <div className="relative">
      {icon}
      {children}
    </div>
    {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
  </div>
);

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => (
  <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10">
    <h3 className="text-yellow-400 font-semibold mb-2">{title}</h3>
    <p className="text-sm text-white/60">{description}</p>
  </div>
);

export default SignupForm;
