import { useState } from 'react';
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Tree, ChevronDown } from "lucide-react";
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="theme-nav text-foreground sticky top-0 z-50 shadow-lg px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between rounded-xl backdrop-blur-sm glass-card">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                <Tree className="h-7 w-7 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tight gradient-text">
                ForexTree
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" active={location === "/"}>
            Home
          </NavLink>
          
          <NavLink href="/about" active={location === "/about"}>
            About
          </NavLink>
          
          <NavLink href="/comparison" active={location === "/comparison"}>
            Prop Firms
          </NavLink>
          
          <NavLink href="/contact" active={location === "/contact"}>
            Contact
          </NavLink>
          
          <div className="relative group">
            <button 
              className={`text-lg font-medium group flex items-center gap-1 ${
                dropdownOpen ? 'text-primary' : 'hover:text-primary'
              } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 flex flex-col glass-card text-foreground rounded-md shadow-lg w-48 z-50 animate-fade-in">
                <Link href="/tutorials">
                  <div className="px-4 py-3 hover:bg-foreground/5 text-left rounded-t-md cursor-pointer">
                    Tutorials
                  </div>
                </Link>
                <Link href="/calculator">
                  <div className="px-4 py-3 hover:bg-foreground/5 text-left rounded-b-md cursor-pointer">
                    Tools
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="mr-2">
            <ThemeToggle />
          </div>
          <Button variant="outline" size="default" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          
          <Button variant="default" size="default">
            Log In
          </Button>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-[#333]/30 transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card shadow-lg animate-fade-in z-40">
          <div className="flex flex-col p-4 space-y-4">
            <MobileNavLink href="/" active={location === "/"} onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" active={location === "/about"} onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/comparison" active={location === "/comparison"} onClick={() => setIsOpen(false)}>
              Prop Firms
            </MobileNavLink>
            <MobileNavLink href="/contact" active={location === "/contact"} onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="/calculator" active={location === "/calculator"} onClick={() => setIsOpen(false)}>
              Tools
            </MobileNavLink>
            <MobileNavLink href="/tutorials" active={location === "/tutorials"} onClick={() => setIsOpen(false)}>
              Tutorials
            </MobileNavLink>
            
            <div className="pt-4 flex gap-4 border-t border-border/30">
              <Button className="flex-1" variant="outline" size="default" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button className="flex-1" variant="default" size="default">
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, active, children }) => {
  return (
    <Link href={href}>
      <div className={`relative text-lg font-medium group cursor-pointer ${active ? 'text-primary' : 'hover:text-primary'} transition-colors duration-300`}>
        {children}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
      </div>
    </Link>
  );
};

const MobileNavLink = ({ href, active, children, onClick }) => {
  return (
    <Link href={href}>
      <div 
        className={`text-lg font-medium py-2 px-4 rounded-lg cursor-pointer ${
          active 
            ? 'bg-primary/20 text-primary' 
            : 'hover:bg-foreground/5'
        } transition-colors duration-200`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  );
};

export default Navbar;