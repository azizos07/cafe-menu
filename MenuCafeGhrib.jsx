import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MenuCafeGhrib() {
  const [category, setCategory] = useState('cafes');
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  // Générer l'URL pour le QR code
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQrUrl(window.location.href);
    }
  }, []);

  const categories = [
    { id: 'cafes', label: 'Cafés & Spécialités', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80' },
    { id: 'boissons', label: 'Boissons fraîches', image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1000&q=80' },
    { id: 'desserts', label: 'Desserts Maison', image: 'https://images.unsplash.com/photo-1578985545062-69928b1be8f1?auto=format&fit=crop&w=1000&q=80' },
    { id: 'chicha', label: 'Chicha & Détente', image: 'https://images.unsplash.com/photo-1617112021475-3d3e09e1c6b3?auto=format&fit=crop&w=1000&q=80' },
  ];

  const produits = {
    cafes: [
      { nom: 'Filtre', prix: '1,300 DT', desc: 'Café filtre traditionnel, doux et équilibré.' },
      { nom: 'Express', prix: '1,900 DT', desc: 'Expresso intense et corsé, servi chaud.' },
      { nom: 'Cappuccin', prix: '2,300 DT', desc: 'Cappuccino crémeux avec mousse de lait onctueuse.' },
      { nom: 'Express Nestlé', prix: '2,300 DT', desc: 'Expresso Nestlé, riche et aromatique.' },
      { nom: 'Armatora', prix: '2,500 DT', desc: 'Café armatora, spécialité locale authentique.' },
      { nom: 'Direct', prix: '2,500 DT', desc: 'Café direct, servi sans filtre pour plus d\'intensité.' },
      { nom: 'Cappuccino', prix: '2,300 DT', desc: 'Cappuccino classique avec cacao en poudre.' },
      { nom: 'Chtare sghira', prix: '1,000 DT', desc: 'Petit café traditionnel, concentré et savoureux.' },
      { nom: 'Verre Yaourte', prix: '2,000 DT', desc: 'Yaourt frais servi dans un verre, rafraîchissant.' },
      { nom: 'Café au Lait', prix: '1,500 DT', desc: 'Café doux mélangé avec du lait chaud.' },
      { nom: 'Verre de Lait', prix: '1,500 DT', desc: 'Lait chaud ou froid selon votre préférence.' },
      { nom: 'Café chtar', prix: '2,000 DT', desc: 'Café chtar, spécialité locale riche en saveurs.' },
      { nom: 'Chocolat Chaud', prix: '3,500 DT', desc: 'Chocolat chaud crémeux et réconfortant.' },
      { nom: 'Chocolat Chaud fruits Sec', prix: '4,000 DT', desc: 'Chocolat chaud garni de fruits secs croquants.' },
      { nom: 'Café Turc', prix: '2,000 DT', desc: 'Café turc traditionnel, moulu fin et épicé.' },
      { nom: 'Café Chocolat PM', prix: '1,500 DT', desc: 'Petit format café au chocolat, doux et onctueux.' },
      { nom: 'Café Chocolat GM', prix: '2,000 DT', desc: 'Grand format café au chocolat, généreux et savoureux.' },
      { nom: 'Thé', prix: '1,300 DT', desc: 'Thé traditionnel, chaud et parfumé.' },
      { nom: 'Thé Menthe', prix: '1,500 DT', desc: 'Thé à la menthe fraîche, rafraîchissant et aromatique.' },
      { nom: 'Thé au Amande Sec', prix: '5,000 DT', desc: 'Thé aux amandes sèches, riche et nutritif.' },
      { nom: 'Thé Amandes Fraiche', prix: '5,000 DT', desc: 'Thé aux amandes fraîches, délicat et parfumé.' },
      { nom: 'Thé Americain', prix: '1,500 DT', desc: 'Thé américain, léger et désaltérant.' },
      { nom: 'Tizana', prix: '1,500 DT', desc: 'Tisane aux fruits, douce et apaisante.' },
      { nom: 'Thé Amandes Noisette', prix: '5,000 DT', desc: 'Thé aux amandes et noisettes, gourmand et réconfortant.' },
    ],
    boissons: [
      { nom: 'Eau 1,5 L', prix: '2,000 DT', desc: 'Eau minérale naturelle, format 1,5 litre.' },
      { nom: 'Eau 0,5 L', prix: '1,000 DT', desc: 'Eau minérale naturelle, format 0,5 litre.' },
      { nom: 'Eau 1L', prix: '1,500 DT', desc: 'Eau minérale naturelle, format 1 litre.' },
      { nom: 'Eau Gazefier 0,5 L', prix: '1,500 DT', desc: 'Eau gazeuse rafraîchissante, format 0,5 litre.' },
      { nom: 'Eau Gazefier 1L', prix: '2,000 DT', desc: 'Eau gazeuse pétillante, format 1 litre.' },
      { nom: 'Apla Verre', prix: '2,000 DT', desc: 'Apla servi dans un verre, frais et désaltérant.' },
      { nom: 'Fanta Verre', prix: '2,000 DT', desc: 'Fanta orange servi dans un verre, pétillant et fruité.' },
      { nom: 'Boga Verre', prix: '2,000 DT', desc: 'Boga servi dans un verre, rafraîchissant.' },
      { nom: 'Coca Boite', prix: '2,500 DT', desc: 'Coca-Cola en boîte, classique et pétillant.' },
      { nom: 'Fanta Boite', prix: '2,500 DT', desc: 'Fanta en boîte, orange et fruité.' },
      { nom: 'Déleo', prix: '1,500 DT', desc: 'Déleo, boisson rafraîchissante aux fruits.' },
      { nom: 'Jus Oh', prix: '2,000 DT', desc: 'Jus Oh, boisson aux fruits naturels.' },
      { nom: 'Délio Peche', prix: '1,500 DT', desc: 'Délio à la pêche, doux et fruité.' },
      { nom: 'Délio Poire', prix: '1,500 DT', desc: 'Délio à la poire, rafraîchissant et léger.' },
      { nom: 'Délio Menthe', prix: '1,500 DT', desc: 'Délio à la menthe, frais et désaltérant.' },
      { nom: 'Jus fraise Amande', prix: '7,500 DT', desc: 'Jus de fraise aux amandes, crémeux et gourmand.' },
      { nom: 'Shop Citron', prix: '3,000 DT', desc: 'Smoothie au citron, frais et vitaminé.' },
      { nom: 'Citron Amande', prix: '6,500 DT', desc: 'Boisson citron aux amandes, rafraîchissante et nutritive.' },
      { nom: 'Verre Citron', prix: '2,000 DT', desc: 'Jus de citron frais, acidulé et désaltérant.' },
      { nom: 'Verre Rozata', prix: '1,500 DT', desc: 'Rozata servi dans un verre, doux et parfumé.' },
      { nom: 'Shop Rozata', prix: '2,500 DT', desc: 'Smoothie Rozata, onctueux et savoureux.' },
      { nom: 'Jus Carotte', prix: '2,500 DT', desc: 'Jus de carotte frais, naturel et vitaminé.' },
      { nom: 'Jus Fraise', prix: '4,000 DT', desc: 'Jus de fraise frais, sucré et fruité.' },
      { nom: 'Lait de Poule', prix: '4,000 DT', desc: 'Lait de poule, boisson traditionnelle réconfortante.' },
      { nom: 'Jus Fruit', prix: '4,500 DT', desc: 'Jus de fruits mixés, frais et vitaminé.' },
      { nom: 'Jus Fruits Sec', prix: '7,500 DT', desc: 'Jus aux fruits secs, riche et nutritif.' },
      { nom: 'Mini Fruit sec', prix: '5,000 DT', desc: 'Petit format jus aux fruits secs, concentré et savoureux.' },
      { nom: 'Jus Orange', prix: '2,500 DT', desc: 'Jus d\'orange frais, vitaminé et désaltérant.' },
      { nom: 'Mojito', prix: '3,500 DT', desc: 'Mojito sans alcool, frais à la menthe et citron.' },
      { nom: 'Mini Jwajem', prix: '5,000 DT', desc: 'Petit format Jwajem, spécialité locale rafraîchissante.' },
      { nom: 'Shop Citron Amande', prix: '6,500 DT', desc: 'Smoothie citron aux amandes, crémeux et vitaminé.' },
    ],
    desserts: [
      { nom: 'Tranche Gateau', prix: '2,000 DT', desc: 'Tranche de gâteau maison, moelleuse et savoureuse.' },
      { nom: 'Mille feuille', prix: '1,500 DT', desc: 'Mille-feuille traditionnel, feuilleté et crémeux.' },
      { nom: 'Tarte', prix: '2,000 DT', desc: 'Tarte maison, croustillante et généreuse.' },
      { nom: 'Délice', prix: '2,000 DT', desc: 'Délice pâtissier, gourmand et raffiné.' },
      { nom: 'Cheese Cake', prix: '2,500 DT', desc: 'Cheesecake crémeux, onctueux et délicieux.' },
      { nom: 'Croissant', prix: '1,500 DT', desc: 'Croissant beurré, croustillant et doré.' },
      { nom: 'Pain Chocolat', prix: '1,500 DT', desc: 'Pain au chocolat, feuilleté et généreux en chocolat.' },
      { nom: 'Pate Amande', prix: '1,500 DT', desc: 'Pâte d\'amande, douce et parfumée.' },
      { nom: 'Tranche Cake', prix: '1,200 DT', desc: 'Tranche de cake, moelleuse et savoureuse.' },
      { nom: 'Pronkon', prix: '0,800 DT', desc: 'Pronkon, pâtisserie locale traditionnelle.' },
      { nom: 'Doze Amande', prix: '4,000 DT', desc: 'Doze aux amandes, riche et gourmand.' },
      { nom: 'Doze Amande Séche', prix: '4,000 DT', desc: 'Doze aux amandes sèches, croquant et savoureux.' },
      { nom: 'Fricasse', prix: '1,500 DT', desc: 'Fricassé tunisien, croustillant et savoureux.' },
      { nom: 'Sandwich Thon Baguette', prix: '2,500 DT', desc: 'Sandwich au thon sur baguette, frais et copieux.' },
      { nom: 'Sandwich Thon Mbasses', prix: '2,500 DT', desc: 'Sandwich au thon sur pain Mbasses, traditionnel.' },
      { nom: 'Galette', prix: '2,500 DT', desc: 'Galette salée, croustillante et généreuse.' },
      { nom: 'Tranche Pizza', prix: '2,500 DT', desc: 'Tranche de pizza, chaude et savoureuse.' },
      { nom: 'PATTEE', prix: '2,000 DT', desc: 'Patte, spécialité locale croustillante.' },
      { nom: 'Belote', prix: '3,500 DT', desc: 'Belote, pâtisserie traditionnelle sucrée.' },
      { nom: 'Chkobba', prix: '3,000 DT', desc: 'Chkobba, spécialité tunisienne savoureuse.' },
    ],
    chicha: [
      { nom: '1/4 Chikh', prix: '4,000 DT', desc: 'Quart de chicha Chikh, saveur traditionnelle.' },
      { nom: '1/4 Jirak', prix: '4,500 DT', desc: 'Quart de chicha Jirak, aromatique et doux.' },
      { nom: 'Sa7fa Jirak GM', prix: '5,000 DT', desc: 'Grande chicha Jirak, généreuse et parfumée.' },
      { nom: 'Chicha Menthe', prix: '5,000 DT', desc: 'Chicha à la menthe, fraîche et rafraîchissante.' },
      { nom: 'Chicha Pomme', prix: '5,000 DT', desc: 'Chicha à la pomme, douce et fruitée.' },
      { nom: 'Chicha Raisin Menthe', prix: '5,000 DT', desc: 'Chicha raisin menthe, équilibrée et aromatique.' },
      { nom: 'LOVE', prix: '5,000 DT', desc: 'Chicha LOVE, saveur unique et enveloppante.' },
      { nom: 'MIA MOR', prix: '5,000 DT', desc: 'Chicha MIA MOR, aromatique et douce.' },
      { nom: 'CHIKH MONEY', prix: '5,000 DT', desc: 'Chicha CHIKH MONEY, saveur premium et raffinée.' },
      { nom: 'HAWAI', prix: '5,000 DT', desc: 'Chicha HAWAI, saveur tropicale et fruitée.' },
      { nom: 'SALOUM W NA3NA3', prix: '5,000 DT', desc: 'Chicha SALOUM W NA3NA3, menthe et saveurs locales.' },
      { nom: 'JWAJEM', prix: '8,000 DT', desc: 'Chicha JWAJEM, spécialité premium et généreuse.' },
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
      <header className="bg-[#7B3F00] text-white py-6 px-8 shadow-2xl flex flex-col items-center justify-center md:flex-row md:justify-between">
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
                  : 'text-white hover:text-amber-200 hover:bg-[#a05a18]'
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
      <main className="flex-1 relative overflow-hidden">
        <img
          src={categories.find((c) => c.id === category)?.image}
          alt={category}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 text-white p-6 sm:p-10 max-w-3xl">
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
              <p className="text-sm text-white/80 mt-1">{item.desc}</p>
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

