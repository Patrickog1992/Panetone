import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const SALES_DATA = [
  { name: 'Maria S.', city: 'São Paulo' },
  { name: 'Ana P.', city: 'Rio de Janeiro' },
  { name: 'Fernanda L.', city: 'Curitiba' },
  { name: 'Juliana M.', city: 'Belo Horizonte' },
  { name: 'Patricia C.', city: 'Salvador' },
  { name: 'Bruna R.', city: 'Porto Alegre' },
  { name: 'Camila T.', city: 'Brasília' },
  { name: 'Larissa B.', city: 'Recife' },
  { name: 'Mariana D.', city: 'Campinas' },
  { name: 'Renata F.', city: 'Florianópolis' },
  { name: 'Sueli G.', city: 'Goiânia' },
  { name: 'Beatriz A.', city: 'Fortaleza' }
];

export const SalesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(SALES_DATA[0]);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      triggerPopup();
    }, 3000);

    const triggerPopup = () => {
      // Select random person
      const randomPerson = SALES_DATA[Math.floor(Math.random() * SALES_DATA.length)];
      setCurrentSale(randomPerson);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
        
        // Schedule next popup (random time between 8 and 15 seconds)
        const nextTime = Math.random() * (15000 - 8000) + 8000;
        setTimeout(triggerPopup, nextTime);
      }, 4000);
    };

    return () => clearTimeout(initialTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 right-2 md:top-4 md:right-4 z-50 bg-white/95 backdrop-blur-sm rounded shadow-md border-l-2 border-green-500 py-2 px-3 flex items-center gap-2 w-auto max-w-[260px] animate-[slideIn_0.5s_ease-out] transition-all">
       <div className="bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
         <CheckCircle2 size={14} />
       </div>
       <div className="flex-1 min-w-0">
         <p className="text-[11px] font-bold text-slate-800 leading-tight">
           {currentSale.name}
         </p>
         <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
           de {currentSale.city} recebeu as receitas
         </p>
       </div>
    </div>
  );
};