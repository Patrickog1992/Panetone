import React from 'react';
import { BONUSES } from '../constants';
import { Gift } from 'lucide-react';

export const Bonuses = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-darkRed px-4 py-1 rounded-full font-bold mb-4">
            <Gift className="w-4 h-4" /> Bônus Exclusivos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Grátis para quem adquirir <span className="text-brand-gold">HOJE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Além do livro de receitas de Panettone, você vai levar todo esse arsenal para transformar sua alimentação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BONUSES.map((bonus) => (
            <div key={bonus.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-gold transition-colors duration-300">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-1/3 p-4 bg-slate-900/50 flex items-center justify-center relative">
                   {/* Changed object-cover to object-contain so full book covers are visible */}
                   <img 
                      src={bonus.image} 
                      alt={bonus.title} 
                      className="w-full h-auto max-h-48 sm:max-h-full object-contain" 
                      loading="lazy"
                      decoding="async"
                   />
                   <div className="absolute top-0 left-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                      GRÁTIS
                   </div>
                </div>
                <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                   <h3 className="text-xl font-bold text-brand-gold mb-2">{bonus.title}</h3>
                   <p className="text-white font-medium mb-3">{bonus.description}</p>
                   <ul className="space-y-1 text-sm text-slate-400">
                      {bonus.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                           <span className="text-green-400 mt-1">✓</span> {feat}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};