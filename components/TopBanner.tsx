import React from 'react';

export const TopBanner = () => {
  const today = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="bg-[#D32F2F] text-white text-center py-3 px-4 font-bold text-sm md:text-base uppercase tracking-wide">
      No dia <span className="text-[#FFFF00] font-extrabold mx-1 text-lg">{today}</span> teremos uma super promoção de 70% off aproveite!
    </div>
  );
};