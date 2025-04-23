import React from 'react';
import { Bone as Drone, Wallet2, Twitter, Disc as Discord } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import NFTGallery from './components/NFTGallery';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="parallax-bg" />
      <div className="content-overlay">
        <Navbar />
        <main>
          <Hero />
          
          <NFTGallery />
          <Roadmap />
          <Team />
          <FAQ />
        </main>
        <Footer />
      </div>
      
      {/* Floating Drones */}
      <div className="fixed top-1/4 left-1/4 text-copper/30 animate-float">
        <Drone size={48} />
      </div>
      <div className="fixed top-1/2 right-1/4 text-copper/20 animate-float" style={{ animationDelay: '2s' }}>
        <Drone size={32} />
      </div>
    </div>
  );
}

export default App;