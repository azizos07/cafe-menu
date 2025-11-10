import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MenuCafeGhrib() {
  const [category, setCategory] = useState('cafes');
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  // Générer l'URL pour le QR code
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // S'assurer que l'URL est correcte et sans slash final
      let url = window.location.href;
      // Enlever le slash final s'il existe (sauf pour la racine)
      if (url.endsWith('/') && url !== 'https://menu-cafe-ghrib.netlify.app/') {
        url = url.slice(0, -1);
      }
      // Forcer l'URL Netlify si on est sur Netlify
      if (url.includes('netlify.app')) {
        url = 'https://menu-cafe-ghrib.netlify.app';
      }
      setQrUrl(url);
    }
  }, []);

  const categories = [
    { id: 'cafes', label: 'Cafés & Spécialités', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80' },
    { id: 'boissons', label: 'Boissons fraîches', image: 'boisson fraiche.jpg' },
    { id: 'desserts', label: 'Desserts Maison', image: 'dessert maison.webp' },
    { id: 'chicha', label: 'Chicha & Détente', image: 'chicha.jpg' },
    { id: 'jeux', label: 'Jeux de Carte', image: 'jeu de carte.jfif' },
  ];

  const produits = {
    cafes: [
      { nom: 'Filtre', prix: '1,300 DT' },
      { nom: 'Express', prix: '1,900 DT' },
      { nom: 'Cappuccin', prix: '2,300 DT' },
      { nom: 'Express Nestlé', prix: '2,300 DT' },
      { nom: 'Armatora', prix: '2,500 DT' },
      { nom: 'Direct', prix: '2,500 DT' },
      { nom: 'Cappuccino', prix: '2,300 DT' },
      { nom: 'Chtare sghira', prix: '1,000 DT' },
      { nom: 'Verre Yaourte', prix: '2,000 DT' },
      { nom: 'Café au Lait', prix: '1,500 DT' },
      { nom: 'Verre de Lait', prix: '1,500 DT' },
      { nom: 'Café chtar', prix: '2,000 DT' },
      { nom: 'Chocolat Chaud', prix: '3,500 DT' },
      { nom: 'Chocolat Chaud fruits Sec', prix: '4,000 DT' },
      { nom: 'Café Turc', prix: '2,000 DT' },
      { nom: 'Café Chocolat PM', prix: '1,500 DT' },
      { nom: 'Café Chocolat GM', prix: '2,000 DT' },
      { nom: 'Thé', prix: '1,300 DT' },
      { nom: 'Thé Menthe', prix: '1,500 DT' },
      { nom: 'Thé au Amande Sec', prix: '5,000 DT' },
      { nom: 'Thé Amandes Fraiche', prix: '5,000 DT' },
      { nom: 'Thé Americain', prix: '1,500 DT' },
      { nom: 'Tizana', prix: '1,500 DT' },
      { nom: 'Thé Amandes Noisette', prix: '5,000 DT' },
    ],
    boissons: [
      { nom: 'Eau 1,5 L', prix: '2,000 DT' },
      { nom: 'Eau 0,5 L', prix: '1,000 DT' },
      { nom: 'Eau 1L', prix: '1,500 DT' },
      { nom: 'Eau Gazefier 0,5 L', prix: '1,500 DT' },
      { nom: 'Eau Gazefier 1L', prix: '2,000 DT' },
      { nom: 'Apla Verre', prix: '2,000 DT' },
      { nom: 'Fanta Verre', prix: '2,000 DT' },
      { nom: 'Boga Verre', prix: '2,000 DT' },
      { nom: 'Coca Boite', prix: '2,500 DT' },
      { nom: 'Fanta Boite', prix: '2,500 DT' },
      { nom: 'Déleo', prix: '1,500 DT' },
      { nom: 'Jus Oh', prix: '2,000 DT' },
      { nom: 'Délio Peche', prix: '1,500 DT' },
      { nom: 'Délio Poire', prix: '1,500 DT' },
      { nom: 'Délio Menthe', prix: '1,500 DT' },
      { nom: 'Jus fraise Amande', prix: '7,500 DT' },
      { nom: 'Shop Citron', prix: '3,000 DT' },
      { nom: 'Citron Amande', prix: '6,500 DT' },
      { nom: 'Verre Citron', prix: '2,000 DT' },
      { nom: 'Verre Rozata', prix: '1,500 DT' },
      { nom: 'Shop Rozata', prix: '2,500 DT' },
      { nom: 'Jus Carotte', prix: '2,500 DT' },
      { nom: 'Jus Fraise', prix: '4,000 DT' },
      { nom: 'Lait de Poule', prix: '4,000 DT' },
      { nom: 'Jus Fruit', prix: '4,500 DT' },
      { nom: 'Jus Fruits Sec', prix: '7,500 DT' },
      { nom: 'Mini Fruit sec', prix: '5,000 DT' },
      { nom: 'Jus Orange', prix: '2,500 DT' },
      { nom: 'Mojito', prix: '3,500 DT' },
      { nom: 'JWAJEM', prix: '8,000 DT' },
      { nom: 'Mini Jwajem', prix: '5,000 DT' },
      { nom: 'Shop Citron Amande', prix: '6,500 DT' },
    ],
    desserts: [
      { nom: 'Tranche Gateau', prix: '2,000 DT' },
      { nom: 'Mille feuille', prix: '1,500 DT' },
      { nom: 'Tarte', prix: '2,000 DT' },
      { nom: 'Délice', prix: '2,000 DT' },
      { nom: 'Cheese Cake', prix: '2,500 DT' },
      { nom: 'Croissant', prix: '1,500 DT' },
      { nom: 'Pain Chocolat', prix: '1,500 DT' },
      { nom: 'Pate Amande', prix: '1,500 DT' },
      { nom: 'Tranche Cake', prix: '1,200 DT' },
      { nom: 'Pronkon', prix: '0,800 DT' },
      { nom: 'Doze Amande', prix: '4,000 DT' },
      { nom: 'Doze Amande Séche', prix: '4,000 DT' },
      { nom: 'Fricasse', prix: '1,500 DT' },
      { nom: 'Sandwich Thon Baguette', prix: '2,500 DT' },
      { nom: 'Sandwich Thon Mbasses', prix: '2,500 DT' },
      { nom: 'Galette', prix: '2,500 DT' },
      { nom: 'Tranche Pizza', prix: '2,500 DT' },
      { nom: 'PATTEE', prix: '2,000 DT' },
    ],
    chicha: [
      { nom: '1/4 Chikh', prix: '4,000 DT' },
      { nom: '1/4 Jirak', prix: '4,500 DT' },
      { nom: 'Sa7fa Jirak GM', prix: '5,000 DT' },
      { nom: 'Chicha Menthe', prix: '5,000 DT' },
      { nom: 'Chicha Pomme', prix: '5,000 DT' },
      { nom: 'Chicha Raisin Menthe', prix: '5,000 DT' },
      { nom: 'LOVE', prix: '5,000 DT' },
      { nom: 'MIA MOR', prix: '5,000 DT' },
      { nom: 'CHIKH MONEY', prix: '5,000 DT' },
      { nom: 'HAWAI', prix: '5,000 DT' },
      { nom: 'SALOUM W NA3NA3', prix: '5,000 DT' },
    ],
    jeux: [
      { nom: 'Belote', prix: '3,500 DT' },
      { nom: 'Chkobba', prix: '3,000 DT' },
      { nom: 'Rami', prix: '4,000 DT' },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col font-['Poppins'] bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100"
    >
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-[#7B3F00] text-white py-6 px-8 shadow-2xl flex flex-col items-center justify-center md:flex-row md:justify-between z-50">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-4 md:mb-0 text-center"
        >
          Menu Café Ghrib
        </motion.h1>

        {/* Horizontal Scrollable Categories */}
        <nav className="flex overflow-x-auto space-x-3 scrollbar-hide px-2 py-2 md:justify-end w-full md:w-auto items-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`text-base whitespace-nowrap font-semibold transition-all duration-300 px-4 py-2 rounded-full flex-shrink-0 ${
                category === c.id
                  ? 'bg-amber-300 text-[#7B3F00] shadow-md'
                  : 'text-white border-2 border-white bg-transparent hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
          {/* QR Code Button */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="ml-2 text-white hover:text-amber-200 hover:bg-[#a05a18] px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0"
            title="Afficher le code QR"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex-1 relative overflow-hidden pt-40 md:pt-28">
        <img
          src={(() => {
            const img = categories.find((c) => c.id === category)?.image;
            return img?.startsWith('http') ? img : encodeURI(img || '');
          })()}
          alt={category}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 text-white p-6 sm:p-10 max-w-3xl mx-auto">
          {produits[category].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="mb-6 border-b border-white/30 pb-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{item.nom}</h2>
                <motion.span
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  className="text-amber-300 font-semibold cursor-pointer"
                >
                  {item.prix}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* QR Code Modal */}
      {showQR && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowQR(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#7B3F00] mb-4">Code QR du Menu</h3>
              <p className="text-gray-600 mb-6">Scannez pour partager le menu</p>
              
              {/* QR Code using API */}
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrUrl)}`}
                  alt="QR Code Menu"
                  className="w-64 h-64 mx-auto"
                />
              </div>
              
              <p className="text-sm text-gray-500 mb-4 break-all">{qrUrl}</p>
              
              <button
                onClick={() => setShowQR(false)}
                className="bg-[#7B3F00] text-white px-6 py-2 rounded-full hover:bg-[#a05a18] transition-colors"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

