import React from 'react';
import { Hero } from './components/Hero';
import { ProductPresentation } from './components/ProductPresentation';
import { FeatureRecipe } from './components/FeatureRecipe';
import { RecipeGallery } from './components/RecipeGallery';
import { Author } from './components/Author';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { PostPricingGallery } from './components/PostPricingGallery';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { SalesPopup } from './components/SalesPopup';
import { TopBanner } from './components/TopBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <TopBanner />
      <SalesPopup />
      <Hero />
      <ProductPresentation />
      <FeatureRecipe />
      <RecipeGallery />
      <Author />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <PostPricingGallery />
      <Guarantee />
      <FAQ />
      
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} Panettone Sem Glúten - Suelen Costa.</p>
          <p>Todos os direitos reservados.</p>
          <p className="mt-2 text-xs opacity-70">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
