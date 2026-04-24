export const roomFilters = [
  { label: "All Rooms", value: "all" },
  { label: "Luxury", value: "luxury" },
  { label: "Budget", value: "budget" },
  { label: "Suite", value: "suite" },
];

export const rooms = [
  {
    title: "Deluxe Garden View",
    categories: ["all", "budget"],
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    features: ["AC", "High-speed WiFi", "King Bed", "Mini Bar"],
  },
  {
    title: "Royal Suite",
    categories: ["all", "suite", "luxury"],
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Separate Living Area",
      "Soaking Tub",
      "24/7 Butler Service",
      "Private Balcony",
    ],
  },
  {
    title: "Executive Suite",
    categories: ["all", "suite", "luxury"],
    price: "$550",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dedicated Workspace",
      "Espresso Machine",
      "King Bed",
      "Lounge Access",
    ],
  },
  {
    title: "Grand Penthouse",
    categories: ["all", "luxury", "suite"],
    price: "$1,200",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Panoramic Views",
      "Grand Piano",
      "Private Pool Access",
      "Dedicated Butler",
    ],
  },
  {
    title: "Tranquil Garden Room",
    categories: ["all", "budget"],
    price: "$290",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-10",
    features: [
      "Private Patio",
      "Outdoor Shower",
      "King Bed",
      "Direct Garden Access",
    ],
  },
  {
    title: "Presidential Suite",
    categories: ["all", "suite", "luxury"],
    price: "$1,500",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Formal Dining Room",
      "Grand Master Bath",
      "Private Security Access",
      "Premium Wet Bar",
    ],
  },
  {
    title: "Skyline Club Room",
    categories: ["all", "luxury"],
    price: "$480",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "City Skyline View",
      "Club Lounge Access",
      "King Bed",
      "Espresso Machine",
    ],
  },
  {
    title: "Signature Terrace Suite",
    categories: ["all", "suite", "luxury"],
    price: "$980",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Private Terrace",
      "Separate Living Area",
      "Outdoor Soaking Tub",
      "Butler Pantry",
    ],
  },
  {
    title: "Classic City Room",
    categories: ["all", "budget"],
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Queen Bed",
      "Workspace",
      "Rain Shower",
      "Fast WiFi",
    ],
  },
];

export const roomAmenities = [
  {
    title: "24/7 Room Service",
    description: "Fresh, delicious meals anytime you desire.",
    icon: "serviceBell",
  },
  {
    title: "Complimentary Breakfast",
    description: "A curated breakfast to start your day right.",
    icon: "cutlery",
  },
  {
    title: "Smart TV & Entertainment",
    description: "Stream, relax, and unwind with premium content.",
    icon: "screen",
  },
  {
    title: "Premium Linens",
    description: "Luxurious linens for the perfect night's sleep.",
    icon: "linen",
  },
];
