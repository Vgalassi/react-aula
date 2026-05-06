export type Product = {
  name: string;
  price: number;
  category: 'Eletrônicos' | 'Livros' | 'Decoração' | 'Carros';
  quantity: number
};

export const PRODUCTS: Product[] = [
  // Eletrônicos
  { name: "Smartphone Galaxy", price: 3500, category: "Eletrônicos" ,quantity:0},
  { name: "Notebook Gamer", price: 7200, category: "Eletrônicos",quantity:0 },
  { name: "Fone de Ouvido Bluetooth", price: 299, category: "Eletrônicos" ,quantity:0},
  { name: "Monitor 4K", price: 1800, category: "Eletrônicos",quantity:0 },
  { name: "Smartwatch", price: 1200, category: "Eletrônicos",quantity:0 },

  // Livros
  { name: "O Senhor dos Anéis", price: 89, category: "Livros", quantity: 0 },
  { name: "Clean Code", price: 120, category: "Livros", quantity: 0 },
  { name: "1984", price: 45, category: "Livros", quantity: 0 },
  { name: "Dom Casmurro", price: 35, category: "Livros", quantity: 0 },
  { name: "Pai Rico, Pai Pobre", price: 55, category: "Livros", quantity: 0 },

  // Decoração
  { name: "Vaso de Cerâmica", price: 150, category: "Decoração", quantity: 0 },
  { name: "Quadro Abstrato", price: 250, category: "Decoração", quantity: 0 },
  { name: "Luminária de Mesa", price: 85, category: "Decoração", quantity: 0 },
  { name: "Tapete Persa", price: 1200, category: "Decoração" , quantity: 0},
  { name: "Espelho Adnet", price: 210, category: "Decoração" , quantity: 0},

  // Carros
  { name: "Tesla Model 3", price: 320000, category: "Carros" , quantity: 0},
  { name: "Honda Civic", price: 150000, category: "Carros" , quantity: 0},
  { name: "Toyota Corolla", price: 145000, category: "Carros" , quantity: 0},
  { name: "Ford Mustang", price: 500000, category: "Carros", quantity: 0 },
  { name: "Jeep Renegade", price: 130000, category: "Carros" , quantity: 0},
];