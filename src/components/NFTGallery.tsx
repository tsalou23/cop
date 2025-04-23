
const NFTGallery = () => {
  const nfts = [
    {
      id: 1,
      name: "Cyber Drone #001",
      image: "/nft.jpg",
    },
    {
      id: 2,
      name: "Cyber Drone #002",
      image: "/nft.jpg",
    },
    {
      id: 3,
      name: "Cyber Drone #003",
      image: "/nft.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-copper mb-12">Featured NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={nft.image} 
                alt={nft.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-copper">{nft.name}</h3>
                <button className="mt-4 bg-copper text-black px-6 py-2 rounded-full font-semibold hover:bg-copper/80 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;