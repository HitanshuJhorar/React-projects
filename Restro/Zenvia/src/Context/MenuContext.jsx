import { createContext, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children}) => {
  const MenuData = [
  {
    id: 1,
    name: "Aged Wagyu Tartare",
    price: 24,
    category: "Non-Veg",
    desc: "Hand-cut premium beef, egg yolk, truffle emulsion.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 2,
    name: "Glazed King Salmon",
    price: 38,
    category: "Non-Veg",
    desc: "Miso-glazed salmon with bok choy.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  },
  {
    id: 3,
    name: "Truffle Pappardelle",
    price: 32,
    category: "Veg",
    desc: "Fresh pasta with mushrooms and black truffle.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
  },

  {
    id: 4,
    name: "Grilled Ribeye Steak",
    price: 52,
    category: "Non-Veg",
    desc: "Juicy steak with garlic butter.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
  },
  
  {
    id: 5,
    name: "Caesar Salad",
    price: 14,
    category: "Veg",
    desc: "Crisp lettuce with Caesar dressing.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: 6,
    name: "Butter Chicken",
    price: 22,
    category: "Non-Veg",
    desc: "Rich tomato-based curry with tender chicken.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  },
  {
    id: 7,
    name: "Paneer Tikka",
    price: 16,
    category: "Veg",
    desc: "Grilled paneer cubes with spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
  },
  {
    id: 8,
    name: "Sushi Platter",
    price: 40,
    category: "Non-Veg",
    desc: "Assorted fresh sushi selection.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    id: 9,
    name: "Veg Hakka Noodles",
    price: 15,
    category: "Veg",
    desc: "Stir-fried noodles with vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    id: 10,
    name: "Chocolate Lava Cake",
    price: 12,
    category: "Dessert",
    desc: "Warm cake with molten chocolate center.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    id: 11,
    name: "Cheesecake",
    price: 10,
    category: "Dessert",
    desc: "Creamy New York-style cheesecake.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  },
  {
    id: 12,
    name: "Cold Coffee",
    price: 8,
    category: "Beverage",
    desc: "Chilled coffee with ice cream.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
  },
];
  return(
    <MenuContext.Provider value={{MenuData}}>{children}</MenuContext.Provider>
  );
};

export const useMenu=()=> useContext(MenuContext);