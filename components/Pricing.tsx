import React from 'react';
import { PRICE_STACK } from '../constants';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const totalValue = "539,90";
  const promoPrice = "37,00";

  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-brand-cream to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-2 border-brand-gold/20">
          <div className="bg-brand-darkRed text-white p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Recapitulando tudo que você terá acesso:</h2>
          </div>
          
          <div className="p-6 md:p-10 bg-slate-50">
            <ul className="space-y-4">
              {PRICE_STACK.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-sm md:text-base border-b border-slate-200 pb-2 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                       <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700">{item.item}</span>
                  </div>
                  <div className="font-bold text-slate-400 line-through whitespace-nowrap ml-4">
                    {item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 text-center bg-white border-t border-slate-100">
             {/* Changed text color to red-600 */}
             <p className="text-red-600 mb-2 font-bold">No total, todo esse material devia custar <span className="line-through">R$ {totalValue}</span></p>
             <p className="text-2xl font-bold text-slate-800 mb-6">Mas hoje você terá acesso por apenas:</p>
             
             <div className="mb-2 flex justify-center items-center gap-2">
                <span className="text-6xl text-brand-green animate-bounce">⬇️</span>
             </div>

             <div className="inline-block relative mb-8">
                {/* Changed text color to bright green #25D366 */}
                <span className="text-6xl md:text-8xl font-black text-[#25D366] tracking-tighter">
                   R${promoPrice}
                </span>
             </div>

             <Button 
                fullWidth 
                className="max-w-md mx-auto py-6 text-xl animate-pulse" 
                scrollToOffer={false}
                onClick={() => {
                   window.location.href = "https://pay.kirvano.com/b1cd85cf-c97a-4771-bb56-4fcb7e9db043";
                }}
             >
                COMPRAR AGORA
             </Button>

             <div className="mt-6 flex flex-col items-center gap-2">
                <img src="https://placehold.co/300x40/png?text=Visa+Master+Pix+Boleto" alt="Métodos de Pagamento" className="opacity-70 h-8 object-contain" />
                <p className="text-sm text-slate-500 max-w-xs">
                   Receba instantaneamente por E-mail e Whatsapp após o pagamento. Zero espera.
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};