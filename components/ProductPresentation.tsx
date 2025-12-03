import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const ProductPresentation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        {/* Intro Text */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Apresento o <br/>
          livro de receitas de <br/>
          <span className="text-brand-red bg-brand-lightGold/30 px-2 rounded">Panettone &gt;&gt; Sem Glúten &lt;&lt;</span>
        </h2>
        
        <p className="text-xl text-slate-600 font-medium mb-4">
          Mais de 100 receitas
        </p>

        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Descubra como comer panettone deliciosos sem glúten, sem lactose e sem açúcar. com gostinho do Natal.
        </p>

        {/* Tablet Image (Strictly positioned here) */}
        <div className="relative mx-auto mb-10 transform hover:scale-105 transition-transform duration-500">
            <div className="relative mx-auto bg-slate-900 border-[12px] border-slate-900 rounded-[2rem] h-[400px] w-[280px] md:h-[500px] md:w-[350px] shadow-2xl flex items-center justify-center overflow-hidden ring-4 ring-gray-200">
                <div className="w-full h-full bg-white relative overflow-hidden group">
                    {/* Changed object-cover to object-contain so the full book cover is visible inside the tablet frame */}
                    <img src="https://i.imgur.com/3YLvpck.jpeg" className="object-contain w-full h-full opacity-100 group-hover:scale-110 transition-transform duration-700 bg-white" alt="Capa do eBook" />
                    {/* Overlay removed to show the user's specific image clearly */}
                </div>
            </div>
            {/* Panettone image next to it - kept for decoration as per original design unless requested otherwise */}
            <img 
                src="https://loremflickr.com/200/200/panettone,slice/all" 
                alt="Panettone slice"
                className="absolute -bottom-6 -right-6 md:-right-12 w-32 h-32 rounded-full border-4 border-white shadow-lg animate-bounce-slow object-cover"
            />
        </div>

        {/* Feature List Text */}
        <div className="bg-brand-cream rounded-2xl p-8 mb-8 border border-brand-lightGold shadow-inner">
          <h3 className="text-2xl font-bold text-brand-darkRed mb-2">Você receberá 100 receitas inéditas!</h3>
          <p className="text-slate-600 mb-6">Com foto real e passo a passo simples.</p>
          
          <ul className="space-y-3 text-left inline-block mx-auto">
            <li className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="text-brand-green w-6 h-6" /> SEM GLÚTEN
            </li>
            <li className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="text-brand-green w-6 h-6" /> SEM LEITE
            </li>
            <li className="flex items-center gap-2 font-bold text-slate-800">
              <CheckCircle2 className="text-brand-green w-6 h-6" /> SEM CONSERVANTES
            </li>
            <li className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="text-brand-green w-6 h-6" /> AÇUCAR: COM OU SEM, VOCÊ DECIDE
            </li>
            <li className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="text-brand-green w-6 h-6" /> OVOS: COM OU SEM. É OPCIONAL.
            </li>
          </ul>
        </div>

        <Button className="w-full md:w-auto px-12 text-xl shadow-xl shadow-green-900/30 animate-pulse">
          QUERO AS RECEITAS AGORA
        </Button>

      </div>
    </section>
  );
};