import React from 'react';
import { Button } from './Button';

const POST_PRICE_ITEMS = [
    {
        name: "Delicia de Panettone de chocolate sem açúcar é a sugestão para o lanche",
        image: "https://i.imgur.com/rtSmyOx.jpeg"
    },
    {
        name: "Panettone quatro leites (ZERO AÇÚCAR)",
        image: "https://i.imgur.com/uoavNwb.jpeg"
    },
    {
        name: "Panettone da Vóvó",
        image: "https://i.imgur.com/H3iq1Op.jpeg"
    }
];

const EXTRA_ITEMS = [
    { name: "Panettone de Frutas Fit (Sem Gorduras, sem Glúten, sem Lactose e sem Açúcar)", image: "https://i.imgur.com/jKL0am8.jpeg" },
    { name: "Cheesecake (Sem Glúten, sem Lactose e sem Açúcar)", image: "https://i.imgur.com/J2R4t5k.png" },
    { name: "Panettone de Milho (Sem Glúten, sem Lactose e sem Açúcar)", image: "https://i.imgur.com/4OMCmDU.jpeg" },
    { name: "Panettone de Coco (Gelado e Fit)", image: "https://i.imgur.com/IxXGn9i.jpeg" },
];

export const PostPricingGallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                
                {/* First batch */}
                <div className="space-y-12 mb-16">
                    {POST_PRICE_ITEMS.map((item, idx) => (
                        <div key={idx} className="bg-brand-cream rounded-2xl overflow-hidden shadow-lg border border-brand-lightGold">
                            <div className="overflow-hidden">
                                {/* Removed h-64 to show full image */}
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-auto"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-bold text-lg md:text-xl text-slate-800">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                     <h3 className="text-xl md:text-2xl font-bold text-brand-darkRed">
                         Essas e mais algumas delícias que você vai ter acesso pagando só R$37,90
                     </h3>
                </div>

                {/* Second batch */}
                <div className="space-y-12 mb-16">
                    {EXTRA_ITEMS.map((item, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                            {/* Removed fixed height so image is full */}
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-auto" 
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h3 className="font-bold text-white text-lg">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button className="w-full md:w-auto px-16 py-5 text-xl animate-pulse shadow-xl shadow-green-900/30">
                        QUERO AS RECEITAS AGORA
                    </Button>
                </div>

            </div>
        </section>
    );
};