import { useState } from 'react';
import { Wallet2, Twitter, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  title: string;
  items: { label: string; to: string }[];
};

const MenuItem: React.FC<MenuItemProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-desert-sand hover:text-copper transition-colors font-medium">
        {title}
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-charcoal border border-copper/30 rounded shadow-lg z-50">
          <ul className="py-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="block px-4 py-2 text-sm text-desert-sand hover:bg-copper/10 hover:text-copper transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-charcoal/80 backdrop-blur-sm border-b border-copper/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-orbitron text-copper text-xl font-bold copper-glow">COPPER SKY</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <MenuItem
              title="Archive"
              items={[
                { label: 'Lore Overview', to: '/lore' },
                { label: 'Map of Anomalies', to: '/map' },
                { label: 'Factions / Entities', to: '/factions' },
                { label: 'Timeline', to: '/timeline' },
                { label: 'The Signal', to: '/signal' },
                { label: 'Artifacts', to: '/artifacts' },
                { label: 'Logs / Journals', to: '/logs' },
              ]}
            />
            <MenuItem
              title="Gallery"
              items={[
                { label: 'All NFTs', to: '/gallery' },
                { label: 'Featured', to: '/gallery/featured' },
                { label: '1/1 Pieces', to: '/gallery/one-of-ones' },
                { label: 'Fan Art', to: '/gallery/fan-art' },
                { label: 'Behind the Scenes', to: '/gallery/bts' },
              ]}
            />
            <MenuItem
              title="Roadmap"
              items={[
                { label: 'Phase 1: Launch', to: '/roadmap#phase1' },
                { label: 'Phase 2: Expansion', to: '/roadmap#phase2' },
                { label: 'Phase 3: World Events', to: '/roadmap#phase3' },
                { label: 'Tech Goals', to: '/roadmap#tech' },
              ]}
            />
            <MenuItem
              title="The Team"
              items={[
                { label: 'Humans', to: '/team' },
                { label: 'AI Agents', to: '/team/ai' },
                { label: 'Collaborators', to: '/team/collab' },
              ]}
            />
            <MenuItem
              title="FAQ"
              items={[
                { label: 'General Questions', to: '/faq#general' },
                { label: 'Minting Info', to: '/faq#minting' },
                { label: 'Lore-Specific Questions', to: '/faq#lore' },
                { label: 'Utility & Use Cases', to: '/faq#utility' },
              ]}
            />
            <MenuItem
              title="Join Us"
              items={[
                { label: 'Discord', to: '/join/discord' },
                { label: 'Twitter', to: '/join/twitter' },
                { label: 'Newsletter', to: '/join/newsletter' },
                { label: 'Mint Page', to: '/mint' },
                { label: 'Contact', to: '/contact' },
              ]}
            />
            <Link
              to="/encrypted"
              className="text-desert-sand hover:text-copper font-medium transition-colors"
            >
              Encrypted Files
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="wasteland-button flex items-center space-x-2">
              <Wallet2 size={20} />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
// minimal navbar
// export default Navbar;


// import { Wallet2, Twitter, Disc as Discord } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-sm border-b border-copper/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <span className="font-orbitron text-copper text-xl font-bold copper-glow">COPPER SKY</span>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {/* Correct the link to use `to="/lore"` */}
//             <Link to="/lore" className="text-desert-sand hover:text-copper transition-colors">Lore</Link>
//             <a href="#gallery" className="text-desert-sand hover:text-copper transition-colors">Gallery</a>
//             <a href="#roadmap" className="text-desert-sand hover:text-copper transition-colors">Roadmap</a>
//             <a href="#team" className="text-desert-sand hover:text-copper transition-colors">Team</a>
//             <a href="#faq" className="text-desert-sand hover:text-copper transition-colors">FAQ</a>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className="wasteland-button flex items-center space-x-2">
//               <Wallet2 size={20} />
//               <span>Connect</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


// export default Navbar;