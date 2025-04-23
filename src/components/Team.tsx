
const Team = () => {
  const teamMembers = [
    {
      name: "mixalakis",
      role: "Founder & Creative Director &gamias",
      image: "/serdais.jpg",
    },
    {
      name: "x",
      role: "Lead Developer",
      image: "/tsalou.jpeg",
    },
    {
      name: "sugoi",
      role: "Art Director,apex predator",
      image: "/liakos.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-copper mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-copper"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-copper text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;