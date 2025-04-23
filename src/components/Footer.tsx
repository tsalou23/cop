import React from 'react';
import { Twitter, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal/80 border-t border-copper/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="font-orbitron text-copper text-xl font-bold copper-glow">COPPER SKY</span>
            <p className="mt-2 text-desert-sand/60 font-mono">
              COORDINATES: 34°03'N 118°15'W
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-desert-sand hover:text-copper transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-desert-sand hover:text-copper transition-colors">
              <Discord size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-copper/20 text-center text-desert-sand/60">
          <p>&copy; 2025 Copper Sky. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;