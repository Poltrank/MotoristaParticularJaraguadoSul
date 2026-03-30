import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, ChevronRight, Car, Info, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CityQuote {
  city: string;
  price: number;
}

const QUOTES: CityQuote[] = [
  { city: "Jaraguá do Sul", price: 35 },
  { city: "Guaramirim", price: 40 },
  { city: "Schroeder", price: 50 },
  { city: "Corupá", price: 90 },
  { city: "Massaranduba", price: 100 },
  { city: "Araquari", price: 130 },
  { city: "Pomerode", price: 100 },
  { city: "Joinville (Cidade)", price: 160 },
  { city: "Joinville (Aeroporto)", price: 180 },
  { city: "Barra Velha", price: 200 },
  { city: "Blumenau", price: 220 },
  { city: "São Bento do Sul", price: 220 },
  { city: "São Francisco do Sul", price: 250 },
  { city: "Navegantes", price: 280 },
  { city: "Balneário Camboriú", price: 320 },
  { city: "Itapema", price: 350 },
  { city: "Curitiba", price: 500 },
  { city: "Outro Destino", price: 0 }
];

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<CityQuote | null>(null);

  const filteredQuotes = useMemo(() => {
    return QUOTES.filter(q => 
      q.city.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleContact = (city: string, price: number) => {
    const priceText = price > 0 ? `O valor no app é R$ ${price}` : 'Gostaria de combinar o valor';
    const message = encodeURIComponent(`Olá! Gostaria de solicitar uma viagem profissional para ${city}. ${priceText}.`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col max-w-md mx-auto relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/FL3LRj7M/image.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if the direct link pattern is wrong
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/executive/1080/1920?blur=10";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Grid Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[40%] bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="px-6 pt-12 pb-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="relative">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_5px_#3b82f6]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500/80">Professional Service</span>
            </div>
            <h1 className="text-5xl font-light tracking-tight font-serif italic leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] text-white">Executive</h1>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-0.5">
                <div className="px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded-[4px]">
                  <span className="text-[8px] font-black text-blue-400 tracking-widest uppercase">100% Electric</span>
                </div>
              </div>
              <h2 className="text-right text-sm font-bold tracking-[0.15em] text-white uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                BYD Dolphin Mini <span className="text-blue-500">2026</span>
              </h2>
            </div>

            {/* Vehicle Status Indicators */}
            <div className="flex gap-2 mt-1">
              <div className="flex flex-col items-end">
                <span className="text-[7px] text-zinc-500 uppercase font-bold tracking-widest">Battery Status</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-12 h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5 p-[1px]">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[100%] rounded-full shadow-[0_0_8px_#3b82f6]" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-blue-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-all duration-700 blur-sm" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl opacity-50 group-focus-within:from-blue-600/30 group-focus-within:to-cyan-400/30 transition-all duration-500" />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-blue-400 transition-colors z-10" />
          <input
            type="text"
            placeholder="Para onde vamos hoje?"
            className="relative w-full bg-zinc-950/80 border border-zinc-800/50 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500/30 transition-all outline-none backdrop-blur-xl placeholder:text-zinc-800 z-10 text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Tech Accent */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-500/20 rounded-full z-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 space-y-4 relative z-10 pb-24">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Destinos Populares</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Premium</span>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredQuotes.map((quote, index) => (
            <motion.div
              key={quote.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ delay: index * 0.02, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setSelectedCity(quote)}
              className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all active:scale-[0.98] backdrop-blur-md overflow-hidden"
            >
              {/* Tech Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30 group-hover:border-blue-500/50 group-hover:bg-zinc-700/50 transition-all">
                  <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-[16px] tracking-tight text-white group-hover:text-blue-50 transition-colors">{quote.city}</h3>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5 group-hover:text-zinc-400 transition-colors">Transfer</p>
                </div>
              </div>
              
              <div className="text-right flex items-center gap-3 relative z-10">
                <div className="flex flex-col items-end">
                  <span className="text-lg font-light tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                    {quote.price > 0 ? `R$ ${quote.price}` : 'Consultar'}
                  </span>
                  <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest group-hover:text-zinc-500 transition-colors">
                    {quote.price > 0 ? 'FIXED RATE' : 'CUSTOM'}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-800 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1" />
              </div>

              {/* Selection Indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 text-[7px] font-bold text-zinc-700 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]" />
              <span className="text-blue-400/80">System Ready</span>
            </div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-2 h-2 text-zinc-800" />
              <span>Secure Link</span>
            </div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <span>v2.0.26-EV</span>
          </div>
          <div className="h-[1px] w-12 bg-zinc-800/50" />
          <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-bold text-center leading-relaxed">
            BYD Dolphin Mini 2026<br/>
            <span className="text-zinc-800">Premium Electric Experience</span>
          </p>
        </div>
      </footer>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end justify-center"
            onClick={() => setSelectedCity(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-zinc-950 w-full max-w-md rounded-t-[40px] border-t border-zinc-800 p-8 pb-12 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-full" />
              
              <div className="mt-4 mb-10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Detalhes da Viagem</span>
                </div>
                <div className="flex items-end justify-between">
                  <h2 className="text-4xl font-serif italic tracking-tight">{selectedCity.city}</h2>
                  <div className="text-right">
                    <span className="text-3xl font-light tracking-tighter block">
                      {selectedCity.price > 0 ? `R$ ${selectedCity.price}` : 'A combinar'}
                    </span>
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Valor Estimado</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl relative overflow-hidden group">
                  <Car className="w-5 h-5 text-blue-400 mb-3" />
                  <p className="text-sm font-medium mb-1 text-white">Dolphin Mini</p>
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">100% Electric</p>
                </div>
                <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl relative overflow-hidden group">
                  <ShieldCheck className="w-5 h-5 text-blue-400 mb-3" />
                  <p className="text-sm font-medium mb-1 text-white">Segurança</p>
                  <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Monitoramento Real-time</p>
                </div>
              </div>

              <button
                onClick={() => handleContact(selectedCity.city, selectedCity.price)}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:bg-zinc-100 shadow-xl shadow-white/5">
                  <Phone className="w-5 h-5" />
                  Solicitar via WhatsApp
                </div>
              </button>
              
              <p className="text-center mt-6 text-[10px] text-zinc-700 uppercase tracking-[0.2em] font-bold">
                Atendimento 24h sob agendamento
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
