export interface Recipe {
  id: string;
  name: string;
  image: string;
  calories: number;
  time: string;
  tags: string[];
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}