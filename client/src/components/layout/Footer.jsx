import { Link } from "wouter";
import { BookOpen, Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white pt-16 pb-8 border-t border-white/5 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-full shadow-md">
                <BookOpen className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight gradient-text">
                ForexPro
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The premier platform for Forex traders. Access professional tools, compare prop firms, 
              and stay updated with the latest market news.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Github className="h-5 w-5" />} href="#" />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Tools</h3>
                <ul className="space-y-3">
                  <FooterLink href="/calculator">Pip Calculator</FooterLink>
                  <FooterLink href="#">Position Size Calculator</FooterLink>
                  <FooterLink href="#">Risk Management</FooterLink>
                  <FooterLink href="#">Economic Calendar</FooterLink>
                  <FooterLink href="#">Currency Converter</FooterLink>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Resources</h3>
                <ul className="space-y-3">
                  <FooterLink href="/news">Market News</FooterLink>
                  <FooterLink href="/comparison">Prop Firms</FooterLink>
                  <FooterLink href="#">Trading Strategies</FooterLink>
                  <FooterLink href="#">Webinars</FooterLink>
                  <FooterLink href="#">Support</FooterLink>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Company</h3>
                <ul className="space-y-3">
                  <FooterLink href="#">About Us</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Press</FooterLink>
                  <FooterLink href="#">Partners</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
            © 2023 ForexPro. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            <FooterLinkSmall href="#">Privacy Policy</FooterLinkSmall>
            <FooterLinkSmall href="#">Terms of Service</FooterLinkSmall>
            <FooterLinkSmall href="#">Cookies</FooterLinkSmall>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href}>
      <div className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
        {children}
      </div>
    </Link>
  </li>
);

const FooterLinkSmall = ({ href, children }) => (
  <Link href={href}>
    <div className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
      {children}
    </div>
  </Link>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;