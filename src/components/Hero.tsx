import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-copper mb-6 copper-glow">
          COPPER SKY
        </h1>
        <p className="text-xl md:text-2xl text-desert-sand mb-12 max-w-2xl mx-auto">
          What remains beyond the fall of man.
        </p>
        <button className="wasteland-button text-lg">
          ENTER THE WASTELAND
        </button>
      </div>
      
      <div className="absolute bottom-8 w-full text-center animate-bounce">
        <ChevronDown className="mx-auto text-copper" size={32} />
      </div>
    </section>
  );
};

export default Hero;