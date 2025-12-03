import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  scrollToOffer?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  scrollToOffer = true,
  ...props 
}) => {
  // Added animate-pulse to baseStyles and ensured green colors for primary
  const baseStyles = "py-4 px-8 rounded-full font-bold text-lg uppercase tracking-wide transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 animate-pulse";
  
  // Updated variants to prioritize Green as requested ("TODOS OS BOTÕES... EM VERDE")
  const variants = {
    // Making primary a vibrant green
    primary: "bg-[#25D366] hover:bg-[#128C7E] text-white shadow-green-900/20 border-2 border-[#25D366]",
    // Even secondary is now green-ish or compatible, but we will mostly use primary. 
    // If we want STRICTLY all buttons green, we can make secondary green too, 
    // but usually 'secondary' implies a hierarchy. 
    // However, I will map primary to the requested 'Verde Pulsante'.
    secondary: "bg-brand-green hover:bg-green-700 text-white shadow-green-900/20",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
  };

  const width = fullWidth ? "w-full" : "";

  // Helper to ensure we use the green primary style if the user requested "ALL GREEN"
  const selectedVariant = variant === 'secondary' ? variants.primary : variants[variant];

  return (
    <button 
      className={`${baseStyles} ${selectedVariant} ${width} ${className}`} 
      {...props}
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
        if (scrollToOffer) {
          document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {children}
    </button>
  );
};