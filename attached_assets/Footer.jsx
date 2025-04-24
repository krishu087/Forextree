import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-300">
      <div className="container mx-auto px-5">
        
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src="/src/images/logo_01.png" alt="Logo" className="w-80 h-72" />
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm w-full">
            <div>
              <h4 className="font-semibold mb-3">PROP FIRMS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">All Prop Firms</a></li>
                <li><a href="#" className="hover:underline">Compare Challenges</a></li>
                <li><a href="#" className="hover:underline">Best Sellers</a></li>
                <li><a href="#" className="hover:underline">Favorite Firms</a></li>
                <li><a href="#" className="hover:underline">Announcements</a></li>
                <li><a href="#" className="hover:underline">Prop Firm Rules</a></li>
                <li><a href="#" className="hover:underline">Reviews</a></li>
                <li><a href="#" className="hover:underline">Demo Accounts</a></li>
                <li><a href="#" className="hover:underline">Unlisted Firms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">OFFERS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Exclusive Offers</a></li>
                <li><a href="#" className="hover:underline">Extra Account Promo</a></li>
                <li><a href="#" className="hover:underline">All Current Offers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">PROGRAMS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Loyalty Program</a></li>
                <li><a href="#" className="hover:underline">Affiliate Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">RESOURCES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">High Impact News</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Prop Firm Features</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Prop Firm Business</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">GET HELP</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">How it Works</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 Prop Firm Match. All rights reserved. 
            <a href="#" className="ml-3 hover:underline">Privacy Policy</a> | 
            <a href="#" className="ml-2 hover:underline">Terms & Conditions</a>
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="X" className="w-6"/></a>
            <a href="#"><img src="/src/images/instagram.png" alt="Instagram" className="w-6"/></a>
            <a href="#"><img src="/src/images/youtube.png" alt="YouTube" className="w-7"/></a>
            <a href="#"><img src="/src/images/linkedin.png" alt="Linkedin" className="w-6"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
