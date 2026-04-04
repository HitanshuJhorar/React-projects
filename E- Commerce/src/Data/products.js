const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium wireless headphones with active noise cancellation and immersive sound quality.",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced smartwatch with fitness tracking, heart monitoring, and sleek modern design.",
  },
  {
    id: 3,
    name: "Aluminum Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Minimal aluminum stand for better posture and a cleaner desk setup.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard RGB",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description: "Precision mechanical keyboard with customizable RGB lighting.",
  },
  {
    id: 5,
    name: "USB-C Hub Multiport",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description: "Expand your connectivity with HDMI, USB 3.0, and SD card support.",
  },
  {
    id: 6,
    name: "Wireless Mouse Pro",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description: "Ergonomic design with smooth tracking and long battery life.",
  },
  {
    id: 7,
    name: "Dual Monitor Stand",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description: "Adjustable dual monitor stand for a productive workspace.",
  },
  {
    id: 8,
    name: "HD Webcam 1080p",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description: "Crystal clear video quality with built-in microphone.",
  },
  
];


export function getProduct(){
    return products;
}
export function getProductId(id){
    return products.find(p=> p.id=== Number(id));
}