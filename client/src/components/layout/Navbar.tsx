import { useState } from 'react';
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#2d1f3f] to-[#121212] text-white sticky top-0 z-50 shadow-lg px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between rounded-xl backdrop-blur-sm bg-black/30 border border-white/10">
        <div className="flex items-center gap-3">
          <Link href="/">
            <a className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tight gradient-text">
                ForexPro
              </span>
            </a>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" active={location === "/"}>
            Home
          </NavLink>
          
          <NavLink href="/calculator" active={location === "/calculator"}>
            Pip Calculator
          </NavLink>
          
          <NavLink href="/comparison" active={location === "/comparison"}>
            Prop Firms
          </NavLink>
          
          <NavLink href="/news" active={location === "/news"}>
            News
          </NavLink>
          
          <div className="relative group">
            <button 
              className={`text-lg font-medium group flex items-center gap-1 ${
                dropdownOpen ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
              } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-md px-2 py-1`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 flex flex-col bg-[#1E1E1E]/90 backdrop-blur-sm text-white rounded-md shadow-lg w-48 z-50 border border-[#333]/50 animate-fade-in">
                <button className="px-4 py-3 hover:bg-[#333]/50 text-left rounded-t-md">
                  Case Studies
                </button>
                <button className="px-4 py-3 hover:bg-[#333]/50 text-left">
                  Tutorials
                </button>
                <button className="px-4 py-3 hover:bg-[#333]/50 text-left rounded-b-md">
                  Tools
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 shadow-lg animate-fade-in z-40">
          <div className="flex flex-col p-4 space-y-4">
            <MobileNavLink href="/" active={location === "/"} onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/calculator" active={location === "/calculator"} onClick={() => setIsOpen(false)}>
              Pip Calculator
            </MobileNavLink>
            <MobileNavLink href="/comparison" active={location === "/comparison"} onClick={() => setIsOpen(false)}>
              Prop Firms
            </MobileNavLink>
            <MobileNavLink href="/news" active={location === "/news"} onClick={() => setIsOpen(false)}>
              News
            </MobileNavLink>
            <MobileNavLink href="#" active={false} onClick={() => setIsOpen(false)}>
              Resources
            </MobileNavLink>
            
            <div className="pt-4 flex gap-4 border-t border-white/10">
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

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className={`relative text-lg font-medium group ${active ? 'text-yellow-400' : 'hover:text-yellow-400'} transition-colors duration-300`}>
        {children}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform duration-300 origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
      </a>
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ href, active, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link href={href}>
      <a 
        className={`text-lg font-medium py-2 px-4 rounded-lg ${
          active 
            ? 'bg-yellow-400/20 text-yellow-400' 
            : 'hover:bg-white/5'
        } transition-colors duration-200`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

export default Navbar;
