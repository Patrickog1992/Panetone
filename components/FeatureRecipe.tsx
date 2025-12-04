import React from 'react';
import { Clock, Flame, Ban } from 'lucide-react';
import { Button } from './Button';

export const FeatureRecipe = () => {
  return (
    <section className="py-16 bg-brand-darkRed text-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        
        {/* 1. Stats */}
        <div className="flex justify-center gap-6 mb-8 text-brand-gold">
           <div className="text-center">
             <span className="block font-bold text-xl">120</span>
             <span className="text-xs uppercase opacity-80">Calorias</span>
           </div>
           <div className="w-px bg-white/20"></div>
           <div className="text-center">
             <span className="block font-bold text-xl">20 min</span>
             <span className="text-xs uppercase opacity-80">Tempo</span>
           </div>
           <div className="w-px bg-white/20"></div>
           <div className="text-center">
             <span className="block font-bold text-xl">Zero</span>
             <span className="text-xs uppercase opacity-80">Açúcar/Glúten</span>
           </div>
        </div>

        {/* 2. Image */}
        <div className="mb-8">
            <img 
               src="https://i.imgur.com/MNBZPwh.jpeg" 
               alt="Panettone de Chocolate" 
               className="rounded-3xl shadow-2xl border-4 border-brand-gold w-full h-auto"
               loading="lazy"
               decoding="async"
            />
        </div>

        {/* 3. Content */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Panettone de chocolate low carb fit
        </h2>
        <p className="text-lg text-brand-cream mb-8 leading-relaxed">
          Imagine poder comer todos os dias sem culpa, sem sair da dieta e ainda cuidando da sua saúde.
        </p>

        {/* 4. Delivery Info */}
        <div className="bg-black/20 p-6 rounded-xl border border-white/10 mb-8">
           <h3 className="font-bold text-xl mb-2">E como vou receber?</h3>
           <p className="opacity-90">Receba instantaneamente por E-mail e Whatsapp após o pagamento. Zero espera.</p>
        </div>

      </div>
    </section>
  );
};