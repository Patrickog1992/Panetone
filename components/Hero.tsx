import React from 'react';
import { BadgeCheck, Leaf, DollarSign } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative bg-brand-cream pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
      
      <div className="container mx-auto px-4 pt-10 md:pt-16">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          
          {/* 1. SEM GLÚTEN */}
          <span className="inline-block py-1 px-4 bg-brand-red text-white rounded-full text-sm font-bold tracking-widest mb-6 animate-pulse">
            SEM GLÚTEN
          </span>

          {/* 2. Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-darkRed mb-8 leading-tight">
            Receitas de Panettone para comer sem culpa
          </h1>
          
          {/* 3. Image (Logo após o título conforme pedido) */}
          <div className="relative w-full max-w-lg mx-auto mb-8">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-gold/20 rounded-full blur-3xl -z-10"></div>
             {/* Removed aspect-square and object-cover to show full image */}
             <img 
               src="https://i.imgur.com/zqJ4Ke2.jpeg" 
               alt="Panettone Delicioso Sem Glúten" 
               className="rounded-3xl shadow-2xl border-4 border-white rotate-1 w-full h-auto"
             />
          </div>

          {/* 4. List (Testadas, Sem leite, Baratos) */}
          <div className="w-full bg-white/50 backdrop-blur-sm border border-brand-gold/30 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-brand-darkRed mb-4 flex items-center justify-center gap-2">
              <BadgeCheck className="text-brand-green" />
              Testadas e APROVADAS
            </h3>
            <ul className="flex flex-col gap-3 text-lg font-medium text-slate-700">
              <li className="flex items-center justify-center gap-2">
                <Leaf className="text-brand-green w-5 h-5" />
                Sem leite e sem açúcar
              </li>
              <li className="flex items-center justify-center gap-2">
                <DollarSign className="text-brand-green w-5 h-5" />
                Ingredientes baratos
              </li>
            </ul>
          </div>
          
          {/* (Imagem) - Represented by a decorative divider or spacing as we transition to the next section */}
          <div className="my-8 w-16 h-1 bg-brand-gold/50 rounded-full"></div>

        </div>
      </div>
    </header>
  );
};