export type Product = {
  name: string;
  price: number;
  category: 'Eletrônicos' | 'Livros' | 'Decoração' | 'Carros';
};

export const PRODUCTS: Product[] = [
  // Eletrônicos
  { name: "Smartphone Galaxy", price: 3500, category: "Eletrônicos" },
  { name: "Notebook Gamer", price: 7200, category: "Eletrônicos" },
  { name: "Fone de Ouvido Bluetooth", price: 299, category: "Eletrônicos" },
  { name: "Monitor 4K", price: 1800, category: "Eletrônicos" },
  { name: "Smartwatch", price: 1200, category: "Eletrônicos" },

  // Livros
  { name: "O Senhor dos Anéis", price: 89, category: "Livros" },
  { name: "Clean Code", price: 120, category: "Livros" },
  { name: "1984", price: 45, category: "Livros" },
  { name: "Dom Casmurro", price: 35, category: "Livros" },
  { name: "Pai Rico, Pai Pobre", price: 55, category: "Livros" },

  // Decoração
  { name: "Vaso de Cerâmica", price: 150, category: "Decoração" },
  { name: "Quadro Abstrato", price: 250, category: "Decoração" },
  { name: "Luminária de Mesa", price: 85, category: "Decoração" },
  { name: "Tapete Persa", price: 1200, category: "Decoração" },
  { name: "Espelho Adnet", price: 210, category: "Decoração" },

  // Carros
  { name: "Tesla Model 3", price: 320000, category: "Carros" },
  { name: "Honda Civic", price: 150000, category: "Carros" },
  { name: "Toyota Corolla", price: 145000, category: "Carros" },
  { name: "Ford Mustang", price: 500000, category: "Carros" },
  { name: "Jeep Renegade", price: 130000, category: "Carros" },
];