import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="border-4 border-dashed border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-slate-50">
           <div className="flex-shrink-0">
              <ShieldCheck className="w-32 h-32 text-brand-darkRed" />
           </div>
           <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-darkRed mb-4">Garantia Incondicional de 7 Dias</h3>
              <p className="text-slate-600 mb-4">
                 O risco é todo meu. Se você comprar o livro de receitas, testar e achar que não valeu a pena, ou simplesmente não gostar das receitas, eu devolvo <strong>100% do seu dinheiro</strong>.
              </p>
              <p className="font-bold text-slate-800">
                 Basta enviar um único e-mail. Sem letras miúdas e sem perguntas.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};