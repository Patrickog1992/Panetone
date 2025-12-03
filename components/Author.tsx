import React from 'react';

export const Author = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/3">
             <div className="relative">
                <div className="absolute inset-0 bg-brand-gold rounded-full transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://i.imgur.com/z4lCPJB.jpeg" 
                  alt="Suelen Costa" 
                  className="rounded-full w-full relative z-10 border-8 border-white shadow-xl hover:scale-105 transition-all duration-500 object-cover aspect-square"
                />
             </div>
          </div>
          <div className="md:w-2/3">
             <span className="text-brand-red font-bold uppercase tracking-wider text-sm mb-2 block">Sobre a Autora</span>
             <h2 className="text-4xl font-bold mb-6 text-slate-800">Suelen Costa</h2>
             <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Olá! Eu sou a Suelen Costa. Minha história com a culinária começou na cozinha da minha avó, entre cheiros, afeto e receitas de família.
                </p>
                <p>
                  Depois de estudar gastronomia no <strong>Brasil, Alemanha e Argentina</strong>, tudo mudou quando veio o diagnóstico de câncer do meu marido. Eu sabia que precisava mudar nossa alimentação de forma definitiva.
                </p>
                <p>
                  Foi aí que mergulhei no universo da alimentação saudável, especialmente na <strong>Low Carb</strong>, e desde 2013 venho desenvolvendo receitas deliciosas e equilibradas.
                </p>
                <p className="font-semibold text-brand-darkRed">
                  Já ajudei milhares de pessoas a cuidarem da saúde e até mesmo empreenderem com comidas saudáveis e gostosas!
                </p>
             </div>
             <p className="mt-8 font-handwriting text-2xl text-brand-gold">Desvende os segredos dos Panettones sem glúten perfeitos!</p>
          </div>
        </div>
      </div>
    </section>
  );
};