import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
       <Button fullWidth className="py-3 text-base shadow-none">
          QUERO AS RECEITAS AGORA
       </Button>
    </div>
  );
};