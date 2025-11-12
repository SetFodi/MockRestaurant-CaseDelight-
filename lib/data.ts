export type MenuCategory = "Starters" | "Main Courses" | "Desserts" | "Drinks";

export type Dish = {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
};

export const menuCategories: MenuCategory[] = [
  "Starters",
  "Main Courses",
  "Desserts",
  "Drinks",
];

export const dishes: Dish[] = [
  {
    name: "Adjika Smoked Trout",
    description:
      "Cold-smoked Racha trout, adjika aioli, marinated tkemali pearls, burnt lemon.",
    price: "38 ₾",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Badrijani Royal",
    description:
      "Velvet-fried eggplant, walnut paste, pomegranate caviar, pickled red basil.",
    price: "29 ₾",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Svaneti Beet Tartare",
    description:
      "Charred beetroot tartare, smoked sulguni cream, crispy mchadi crumble.",
    price: "34 ₾",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Khachapuri Supreme",
    description:
      "Adjarian boat, heritage flour, triple cheese fondue, quail egg, truffle butter.",
    price: "44 ₾",
    category: "Main Courses",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kakheti Lamb Chakapuli",
    description:
      "Slow-braised lamb shoulder, tarragon and white wine reduction, young greens.",
    price: "62 ₾",
    category: "Main Courses",
    image:
      "https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Black Garlic Khinkali",
    description:
      "Hand-folded khinkali, aged beef, black garlic consommé, peppercorn ash.",
    price: "48 ₾",
    category: "Main Courses",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Churchkhela Mousse",
    description:
      "Walnut praline mousse, saperavi gel, dried grape leather, cocoa nib crisp.",
    price: "27 ₾",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pelamushi Parfait",
    description:
      "Grape must parfait, roasted hazelnuts, lavender honey, chacha caramel.",
    price: "31 ₾",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Matsoni Cloud",
    description:
      "Matsoni panna cotta, citrus gelée, almond crumble, iced honeycomb.",
    price: "26 ₾",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Qvevri Amber Flight",
    description:
      "Curated qvevri-aged amber wines, dehydrated fruit, honey-smoked walnut.",
    price: "42 ₾",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Saperavi Velvet",
    description:
      "Estate Saperavi, black cherry reduction, cacao nibs, rosemary smoke dome.",
    price: "38 ₾",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chacha Gold Negroni",
    description:
      "Premium chacha, aperitivo blend, burnt orange bitters, edelweiss ice sphere.",
    price: "36 ₾",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

export const experiences = [
  {
    title: "Seasonal Tasting Journey",
    description:
      "Seven-course degustation exploring regional Georgian terroirs, thoughtfully paired with qvevri wines.",
  },
  {
    title: "Chef’s Table",
    description:
      "Interactive evening with Chef Elene Mdivani crafting bespoke plates inspired by your palate.",
  },
  {
    title: "Wine Library",
    description:
      "Discover limited-release vintages from independent Georgian vintners curated by our sommelier.",
  },
];

export const storyHighlights = [
  {
    title: "Rooted in Heritage",
    description:
      "Casa Delight reimagines 8,000 years of Georgian culinary history with contemporary precision.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Artistry in Motion",
    description:
      "Every plate is plated tableside for a cinematic experience, highlighting textures, aromas, and story.",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ambience of Warmth",
    description:
      "Warm lighting, tactile materials, and curated Georgian jazz transport you to timeless evenings.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
];

export const team = [
  {
    name: "Elene Mdivani",
    role: "Executive Chef",
    bio: "Refining Georgian heritage cuisine with Michelin-stage finesse after stints in Paris and Tokyo.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nika Giorgadze",
    role: "Head Sommelier",
    bio: "Guardian of Casa Delight’s qvevri cellar, pairing rare vintages with modern Georgian gastronomy.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tamar Kobaladze",
    role: "Guest Experience Director",
    bio: "Crafting bespoke evenings that weave storytelling, hospitality, and lasting memories.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=1000&q=80",
    alt: "Elegant table setting with candlelight",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    alt: "Gourmet dessert plated with gold accents",
  },
  {
    src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1000&q=80",
    alt: "Fine dining dishes on marble table",
  },
  {
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1000&q=80",
    alt: "Chef plating Georgian cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1000&q=80",
    alt: "Assorted Georgian tapas",
  },
  {
    src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1000&q=80",
    alt: "Sommelier presenting wine pairing",
  },
];

