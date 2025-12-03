import React from 'react';
import { RECIPES } from '../constants';
import { Clock, Flame } from 'lucide-react';
import { Button } from './Button';

export const RecipeGallery = () => {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-xl text-slate-700 font-medium">
            Essa e diversas outras receitas você vai ter acesso
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md border border-brand-lightGold/50">
              {/* Removed h-48 fixed height to prevent cropping, allowed auto height */}
              <div className="md:w-5/12">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-auto object-contain md:object-cover bg-brand-cream/10"
                />
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-3 text-brand-darkRed">{recipe.name}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                   <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-brand-gold" />
                      <strong>Calorias:</strong> {recipe.calories}
                   </div>
                   <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-brand-gold" />
                      <strong>Tempo:</strong> {recipe.time}
                   </div>
                </div>
                
                <p className="text-sm text-slate-500 italic">
                  Sem açúcar, glúten e lactose
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button className="w-full md:w-auto px-12 animate-pulse shadow-xl">
                QUERO AS RECEITAS AGORA
            </Button>
        </div>
      </div>
    </section>
  );
};