import { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import ThemeToggle from '@/components/ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  // Debug log when user state changes
  useEffect(() => {
    console.log('Navbar - User state changed:', user);
  }, [user]);

  const handleLogin = () => {
    console.log('Login button clicked, navigating to /login');
    setLocation('/login');
  };

  const handleLogout = async () => {
    try {
      console.log('Attempting logout from Navbar');
      await logout();
      setLocation('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.svg" alt="PortfolioPro Logo" className="h-8 w-auto" />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-sm font-medium">
                Home
              </Button>
            </Link>
            <Link href="/comparison">
              <Button variant="ghost" className="text-sm font-medium">
                Comparison
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="text-sm font-medium">
                Blog
              </Button>
            </Link>
            <Link href="/tutorials">
              <Button variant="ghost" className="text-sm font-medium">
                Tutorials
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="ghost" className="text-sm font-medium">
                Calculator
              </Button>
            </Link>
            <Link href="/news">
              <Button variant="ghost" className="text-sm font-medium">
                News
              </Button>
            </Link>
            <Link href="/financial-news">
              <Button variant="ghost" className="text-sm font-medium">
                Financial Calendar
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-sm font-medium">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-sm font-medium">
                Contact
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {user ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <User className="h-5 w-5" />
                </Button>
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border">
                    <div className="py-1">
                      <Link href="/profile">
                        <div className="block px-4 py-2 text-sm hover:bg-accent cursor-pointer">
                          Profile
                        </div>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 text-sm hover:bg-accent"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button variant="default" onClick={handleLogin}>
                Login
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link href="/comparison">
              <Button variant="ghost" className="w-full justify-start">
                Comparison
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="w-full justify-start">
                Blog
              </Button>
            </Link>
            <Link href="/tutorials">
              <Button variant="ghost" className="w-full justify-start">
                Tutorials
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="ghost" className="w-full justify-start">
                Calculator
              </Button>
            </Link>
            <Link href="/news">
              <Button variant="ghost" className="w-full justify-start">
                News
              </Button>
            </Link>
            <Link href="/financial-news">
              <Button variant="ghost" className="w-full justify-start">
                Financial Calendar
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
