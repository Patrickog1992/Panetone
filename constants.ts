import { Recipe, Bonus, FaqItem } from './types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Panettone Indiano',
    image: 'https://i.imgur.com/HBho5yB.jpeg',
    calories: 90,
    time: '20 min',
    tags: ['Sem açúcar', 'Sem glúten', 'Sem lactose']
  },
  {
    id: '2',
    name: 'Panettone de Banana (AirFryer)',
    image: 'https://i.imgur.com/zfJ5HwR.jpeg',
    calories: 106,
    time: '20 min',
    tags: ['Sem açúcar', 'Sem glúten', 'Sem lactose']
  },
  {
    id: '3',
    name: 'Panettone de Limão (Liquidificador)',
    image: 'https://i.imgur.com/hXVaL5a.jpeg',
    calories: 100,
    time: '15 min',
    tags: ['Sem açúcar', 'Sem glúten', 'Sem lactose']
  },
  {
    id: '4',
    name: 'Panettone Formigueiro (5 ingredientes)',
    image: 'https://i.imgur.com/SJKpt5g.jpeg',
    calories: 108,
    time: '20 min',
    tags: ['Sem açúcar', 'Sem glúten', 'Sem lactose']
  },
  {
    id: '5',
    name: 'Panettone de Pistache (Super Rápido)',
    image: 'https://i.imgur.com/2k8yMKf.jpeg',
    calories: 105,
    time: '15 min',
    tags: ['Sem açúcar', 'Sem glúten', 'Sem lactose']
  }
];

export const EXTRA_RECIPES: Recipe[] = [
  { id: '6', name: 'Panettone de Frutas Fit', image: 'https://loremflickr.com/400/300/fruitcake/all', calories: 95, time: '25 min', tags: ['Sem gordura', 'Fit'] },
  { id: '7', name: 'Cheesecake Low Carb', image: 'https://loremflickr.com/400/300/cheesecake/all', calories: 140, time: '40 min', tags: ['Sem glúten', 'Sem açúcar'] },
  { id: '8', name: 'Panettone de Milho', image: 'https://loremflickr.com/400/300/cornbread/all', calories: 110, time: '30 min', tags: ['Sem glúten', 'Sem lactose'] },
  { id: '9', name: 'Panettone de Coco Gelado', image: 'https://loremflickr.com/400/300/coconut,cake/all', calories: 115, time: '15 min', tags: ['Fit', 'Refrescante'] },
];

export const BONUSES: Bonus[] = [
  {
    id: 'b1',
    title: 'Bônus 1: Pães Low Carb',
    description: 'Fofinhos e gostosos na sua própria cozinha.',
    features: ['Receitas testadas e aprovadas', 'Sabor de pão de verdade', 'Ideal para diabéticos e celíacos'],
    image: 'https://i.imgur.com/pHsxbW0.png'
  },
  {
    id: 'b2',
    title: 'Bônus 2: Marmitas Low Carb',
    description: 'Cardápios completos para a semana toda.',
    features: ['Fáceis de organizar', 'Baixo índice glicêmico', 'Praticidade sem sair da dieta'],
    image: 'https://i.imgur.com/jHaYJOY.png'
  },
  {
    id: 'b3',
    title: 'Bônus 3: 102 Receitas na AirFryer',
    description: 'Bolinhos, pães e snacks rápidos sem fritura.',
    features: ['Crocantes por fora, macios por dentro', 'Sem glúten', 'Economia de tempo'],
    image: 'https://i.imgur.com/KXSVF43.png'
  },
  {
    id: 'b4',
    title: 'Bônus 4: Bolos Sem Açúcar',
    description: 'Variedade e praticidade para comer sem culpa.',
    features: ['Passo a passo simples', 'Ingredientes acessíveis', 'Deliciosos'],
    image: 'https://i.imgur.com/8CGU6Zc.png'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como vou receber o livro de receitas?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail e uma mensagem no WhatsApp com o link para baixar seu livro digital e todos os bônus."
  },
  {
    question: "As receitas são difíceis de fazer?",
    answer: "Não! Todas as receitas foram desenvolvidas com um passo a passo simples, pensadas para quem não tem experiência na cozinha mas quer resultados profissionais."
  },
  {
    question: "Os ingredientes são caros?",
    answer: "De jeito nenhum. Um dos pilares do nosso método é usar ingredientes acessíveis que você encontra em qualquer supermercado ou loja de produtos naturais, sem gastar uma fortuna."
  },
  {
    question: "Tenho diabetes, posso consumir?",
    answer: "Sim! Temos diversas opções sem açúcar e de baixo índice glicêmico. No entanto, sempre recomendamos que você consulte seu médico ou nutricionista."
  }
];

export const PRICE_STACK = [
  { item: 'Curso Completo de Bolos Low Carb Sem Glúten', price: 'R$ 197,00' },
  { item: 'Livro Digital: 365 Receitas Exclusivas de Bolos Low Carb', price: 'R$ 67,00' },
  { item: 'Lista de Farinhas e Adoçantes Low Carb', price: 'R$ 29,90' },
  { item: 'Cardápio Doce da Semana', price: 'R$ 39,90' },
  { item: 'Guia de Coberturas & Recheios Low Carb', price: 'R$ 49,90' },
  { item: 'Planner para Organização das Receitas', price: 'R$ 29,90' },
  { item: 'Manual de Armazenamento e Congelamento', price: 'R$ 29,90' },
  { item: 'Guia de Utensílios Essenciais', price: 'R$ 19,90' },
  { item: 'Mini Curso: Bolos na Airfryer e Micro-ondas', price: 'R$ 59,90' },
  { item: 'Checklist de Compras Low Carb', price: 'R$ 19,90' },
];