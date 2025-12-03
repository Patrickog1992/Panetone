import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
           <HelpCircle className="w-12 h-12 mx-auto text-brand-gold mb-4" />
           <h2 className="text-3xl md:text-4xl font-bold text-brand-darkRed">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
           {FAQS.map((faq, index) => (
             <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-brand-red" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 py-4 opacity-100 border-t border-slate-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                   <p className="text-slate-600">{faq.answer}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};