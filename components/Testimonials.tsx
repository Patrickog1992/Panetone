import React from 'react';
import { ThumbsUp, Heart } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Cláudia Ribeiro",
    image: "https://i.imgur.com/Sza1ZfT.png",
    text: "Menina do céu, fiz o de chocolate pro café da tarde e o pessoal aqui de casa nem acreditou que era fit! Kkkk muito bom! Já vou fazer outro pro final de semana.",
    time: "Há 2 horas",
    likes: 24
  },
  {
    id: 2,
    name: "Márcia Santos",
    image: "https://i.imgur.com/GJZpDHa.png",
    text: "Suelen, obrigada!! Consegui vender 15 panetones essa semana só no meu trabalho. Renda extra garantida pra pagar as contas de janeiro. 🙏",
    time: "Há 5 horas",
    likes: 156
  },
  {
    id: 3,
    name: "Dona Ivone",
    image: "https://i.imgur.com/K5tLVza.jpg",
    text: "Minha neta tem intolerância e chorava pq não podia comer nada no Natal. Fiz o de frutas e ela amou. Gratidão eterna! ❤️",
    time: "Há 1 dia",
    likes: 89
  },
  {
    id: 4,
    name: "Patrícia Lima",
    image: "https://i.imgur.com/NVXnmUf.jpg",
    text: "Eu achava que ia ficar duro igual pão velho, mas ficou fofinho! O segredo é seguir o passo a passo direitinho. Podem comprar sem medo.",
    time: "Há 1 dia",
    likes: 42
  },
  {
    id: 5,
    name: "Juliana Costa",
    image: "https://i.imgur.com/UA8o4Kz.png",
    text: "Amei o bônus da Airfryer. Faço rapidinho e não sujo quase nada. Recomendo demais, viu? O preço tá de graça por tudo que ensina.",
    time: "Há 2 dias",
    likes: 31
  },
  {
    id: 6,
    name: "Rosemary Silva",
    image: "https://i.imgur.com/SPsVs9s.jpg",
    text: "Comprei com medo mas me surpreendi. É muito fácil de achar os ingredientes, achei tudo no mercadinho aqui da rua mesmo. Nota 10!",
    time: "Há 3 dias",
    likes: 67
  }
];

// Duplicate the array to ensure seamless looping
const CAROUSEL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Veja o que minhas alunas estão falando:
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carousel Container with Mask for Fade Effect */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] w-max">
            {CAROUSEL_ITEMS.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="w-[350px] mx-4 bg-white rounded-xl shadow-lg border border-slate-100 p-5 hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-green flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                    <div className="flex -space-x-1">
                       <div className="bg-blue-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center border border-white">
                          <ThumbsUp size={10} fill="white" />
                       </div>
                       <div className="bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center border border-white">
                          <Heart size={10} fill="white" />
                       </div>
                    </div>
                    <span className="ml-1">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs ml-auto">
                     <span className="hover:underline cursor-pointer">Curtir</span>
                     <span>•</span>
                     <span className="hover:underline cursor-pointer">Responder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};