import React from 'react';
import { Milestone, CircuitBoard, Cpu, Globe, Rocket } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      icon: <CircuitBoard className="text-copper" size={32} />,
      phase: "Phase 1",
      title: "Genesis Launch",
      description: "Initial release of 1,000 unique CopperDrone NFTs, each with distinct quantum signatures.",
    },
    {
      icon: <Cpu className="text-copper" size={32} />,
      phase: "Phase 2",
      title: "Neural Evolution",
      description: "Implement AI-driven evolution system allowing drones to develop unique characteristics.",
    },
    {
      icon: <Globe className="text-copper" size={32} />,
      phase: "Phase 3",
      title: "Metaverse Integration",
      description: "Deploy CopperDrones across multiple metaverse platforms with cross-platform compatibility.",
    },
    {
      icon: <Rocket className="text-copper" size={32} />,
      phase: "Phase 4",
      title: "Quantum Expansion",
      description: "Launch advanced features including drone fusion and quantum-based gameplay mechanics.",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-charcoal/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-copper mb-16">Roadmap</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start mb-16 last:mb-0">
              {/* Connector Line */}
              {index !== milestones.length - 1 && (
                <div className="absolute top-12 left-6 w-0.5 h-full bg-copper/30" />
              )}
              
              {/* Content */}
              <div className="flex items-start">
                <div className="bg-charcoal p-2 rounded-lg z-10">
                  {milestone.icon}
                </div>
                <div className="ml-8">
                  <div className="text-copper font-mono mb-1">{milestone.phase}</div>
                  <h3 className="text-2xl font-bold text-desert-sand mb-2">{milestone.title}</h3>
                  <p className="text-desert-sand/70">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;