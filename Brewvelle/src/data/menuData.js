import signatureLatteImage from '../assets/images/signature-latte.png'

const drinkImageA =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
const drinkImageB =
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80'
const drinkImageC =
  'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80'
const drinkImageD =
  'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80'
const drinkImageE =
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'
const drinkImageF =
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80'
const pastryImageA =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
const pastryImageB =
  'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80'
const pastryImageC =
  'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80'
const pastryImageD =
  'https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=900&q=80'
const dessertImageA =
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80'
const dessertImageB =
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80'
const dessertImageC =
  'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80'
const dessertImageD =
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'
const toastImageA =
  'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80'
const toastImageB =
  'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80'
const toastImageC =
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80'
const toastImageD =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
const sandwichImageA =
  'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80'
const sandwichImageB =
  'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=900&q=80'
const sandwichImageC =
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80'
const friesImage =
  'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80'
const brunchImage =
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80'
const brunchImageB =
  'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80'
const brunchImageC =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
const soupImage =
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80'

const drinks = [
  {
    title: 'Signature Honey Lavender Latte',
    description: 'Ristretto espresso, steamed oat milk, local honey, and organic lavender.',
    price: '$7.50',
    badge: 'Signature',
    image: signatureLatteImage,
  },
  {
    title: 'Salted Caramel Cold Brew',
    description: '18-hour steep with house cold foam and a delicate sea salt finish.',
    price: '$5.75',
    badge: 'Bold',
    image: drinkImageA,
  },
  {
    title: 'Rose Pistachio Latte',
    description: 'Espresso layered with pistachio cream and a soft rose finish.',
    price: '$6.80',
    badge: 'Floral',
    image: drinkImageB,
  },
  {
    title: 'Matcha Cloud',
    description: 'Ceremonial matcha with vanilla cream and a whisper of lime zest.',
    price: '$6.40',
    badge: 'Green',
    image: drinkImageD,
  },
  {
    title: 'Orange Mocha',
    description: 'Dark chocolate espresso brightened with candied orange.',
    price: '$6.10',
    badge: 'Seasonal',
    image: drinkImageC,
  },
  {
    title: 'Citrus Tonic Espresso',
    description: 'Sparkling tonic, orange peel, and a lively double espresso pour.',
    price: '$5.95',
    badge: 'Bright',
    image: drinkImageE,
  },
  {
    title: 'Vanilla Bean Affogato',
    description: 'Vanilla bean gelato drowned in hot espresso with cacao nibs.',
    price: '$6.70',
    badge: 'Dessert',
    image: dessertImageB,
  },
  {
    title: 'Midnight Oat Flat White',
    description: 'Double-shot flat white with velvety oat milk and toasted sugar.',
    price: '$5.90',
    badge: 'Smooth',
    image: drinkImageF,
  },
]

const desserts = [
  {
    title: 'Almond Croissant',
    description: 'Twice-baked flaky pastry filled with rich frangipane and almonds.',
    price: '$5.50',
    badge: 'Flaky',
    image: pastryImageA,
  },
  {
    title: 'Maple Cinnamon Bun',
    description: 'Warm spiral pastry glazed with brown butter maple icing.',
    price: '$5.20',
    badge: 'Bakery',
    image: pastryImageB,
  },
  {
    title: 'Honey Butter Scone',
    description: 'Tender crumb with whipped honey butter and toasted sugar top.',
    price: '$4.90',
    badge: 'Fresh',
    image: pastryImageC,
  },
  {
    title: 'Pear Almond Danish',
    description: 'Poached pear, almond cream, and crisp laminated pastry layers.',
    price: '$5.60',
    badge: 'Pastry',
    image: pastryImageD,
  },
  {
    title: 'Basque Cheesecake Slice',
    description: 'Burnt-top cheesecake with vanilla bean cream and berry glaze.',
    price: '$6.90',
    badge: 'Creamy',
    image: dessertImageA,
  },
  {
    title: 'Dark Chocolate Tart',
    description: 'Silky ganache tart with cocoa crust and sea salt flakes.',
    price: '$7.10',
    badge: 'Rich',
    image: dessertImageC,
  },
  {
    title: 'Lemon Olive Oil Cake',
    description: 'Moist citrus cake with whipped mascarpone and candied peel.',
    price: '$6.25',
    badge: 'Citrus',
    image: dessertImageD,
  },
  {
    title: 'Tiramisu Pot',
    description: 'Espresso-soaked layers, mascarpone cream, and dusted cocoa.',
    price: '$6.80',
    badge: 'Classic',
    image: dessertImageC,
  },
]

const fastFood = [
  {
    title: 'Avocado Rose Toast',
    description: 'Smashed avocado, microgreens, and chili flakes on sourdough.',
    price: '$12.00',
    badge: 'Savory',
    image: toastImageA,
  },
  {
    title: 'Truffle Mushroom Toast',
    description: 'Roasted mushrooms, whipped ricotta, and truffle oil on toast.',
    price: '$13.50',
    badge: 'Earthy',
    image: toastImageB,
  },
  {
    title: 'Burrata Tomato Tartine',
    description: 'Heirloom tomatoes, whipped burrata, basil oil, and cracked pepper.',
    price: '$14.20',
    badge: 'House',
    image: toastImageC,
  },
  {
    title: 'Smoked Turkey Melt',
    description: 'Smoked turkey, provolone, tomato jam, and arugula on focaccia.',
    price: '$13.80',
    badge: 'Toasted',
    image: sandwichImageB,
  },
  {
    title: 'Pesto Chicken Panini',
    description: 'Grilled chicken, pesto, mozzarella, and roasted peppers.',
    price: '$14.40',
    badge: 'Panini',
    image: sandwichImageC,
  },
  {
    title: 'Crispy Halloumi Wrap',
    description: 'Warm flatbread with halloumi, cucumber ribbons, and herb yogurt.',
    price: '$12.90',
    badge: 'Wrap',
    image: toastImageD,
  },
  {
    title: 'Breakfast Brioche',
    description: 'Soft brioche with egg, cheddar, caramelized onion, and aioli.',
    price: '$11.75',
    badge: 'Morning',
    image: sandwichImageB,
  },
  {
    title: 'Loaded Herb Fries',
    description: 'Crisp fries with parmesan, rosemary salt, and garlic aioli.',
    price: '$7.40',
    badge: 'Snack',
    image: friesImage,
  },
]

const specials = [
  {
    title: 'Brewvelle Brunch Board',
    description: 'Mini pastries, fruit, cheeses, and seasonal spreads for sharing.',
    price: '$18.50',
    badge: 'Chef Pick',
    image: brunchImage,
  },
  {
    title: 'Saffron Milk Cake',
    description: 'Soft sponge soaked in saffron cream with pistachio dust.',
    price: '$7.90',
    badge: 'Limited',
    image: dessertImageD,
  },
  {
    title: 'Brown Butter Gnocchi Bowl',
    description: 'Pillowy gnocchi with sage butter, parmesan, and toasted hazelnuts.',
    price: '$16.20',
    badge: 'Warm Plate',
    image: brunchImageB,
  },
  {
    title: 'Strawberry Cream Matcha',
    description: 'Layered iced matcha with fresh strawberry puree and cream cap.',
    price: '$6.95',
    badge: 'Featured',
    image: drinkImageF,
  },
  {
    title: 'Hot Honey Chicken Croffle',
    description: 'Crisp croffle topped with fried chicken and hot honey glaze.',
    price: '$15.10',
    badge: 'Best Seller',
    image: brunchImageC,
  },
  {
    title: 'Roasted Tomato Soup Cup',
    description: 'Slow-roasted tomato soup finished with basil cream.',
    price: '$8.30',
    badge: 'Cozy',
    image: soupImage,
  },
  {
    title: 'Espresso Soft Serve Float',
    description: 'Soft serve, chilled espresso, and dark caramel drizzle.',
    price: '$7.25',
    badge: 'Cold Treat',
    image: dessertImageA,
  },
  {
    title: 'Seasonal Fruit Toast',
    description: 'Mascarpone toast with roasted fruit, herbs, and blossom honey.',
    price: '$12.60',
    badge: 'Fresh Pick',
    image: toastImageD,
  },
]

export const menuSections = [
  {
    id: 'drinks',
    label: 'Drinks',
    eyebrow: 'House pours',
    title: 'Slow coffee, matcha, and café signatures.',
    description: 'Balanced, aromatic, and brewed for long conversations.',
    items: drinks,
  },
  {
    id: 'desserts',
    label: 'Desserts',
    eyebrow: 'Bakery case',
    title: 'Pastries and sweets with a warm finish.',
    description: 'Flaky classics, soft cakes, and coffee-friendly desserts.',
    items: desserts,
  },
  {
    id: 'fast-food',
    label: 'Fast Food',
    eyebrow: 'Quick bites',
    title: 'Toasts, melts, wraps, and café comfort food.',
    description: 'Made for hungry mornings, easy lunches, and late brunch tables.',
    items: fastFood,
  },
  {
    id: 'specials',
    label: 'Specials',
    eyebrow: 'Seasonal table',
    title: 'Rotating plates and standout house favorites.',
    description: 'A curated mix of limited pours, shareables, and chef-led plates.',
    items: specials,
  },
]

export const featuredDrinks = drinks.slice(1, 4)

export const featuredSpotlight = drinks[0]

export const menuGroups = menuSections

export const fullMenuItems = menuSections.flatMap((section) => section.items)
