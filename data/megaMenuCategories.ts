export interface SubCategory {
  name: string;
  slug: string;
  image: string;
}

export interface MegaMenuCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  subcategories: SubCategory[];
}

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    id: '1',
    name: 'Drinks & Beverage',
    slug: 'drinks',
    icon: '🥤',
    subcategories: [
      { name: 'Soft Drinks', slug: 'soft-drinks', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop' },
      { name: 'Energy Drinks', slug: 'energy-drinks', image: 'https://images.unsplash.com/photo-1622543925917-763c34f6a636?w=400&h=300&fit=crop' },
      { name: 'Juice & Fruit Drinks', slug: 'juice-drinks', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop' },
      { name: 'Water (Mineral / Flavored)', slug: 'water', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop' },
      { name: 'Sports Drinks', slug: 'sports-drinks', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop' },
      { name: 'Milk Drinks & Smoothies', slug: 'milk-drinks', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop' },
      { name: 'Tea Drinks (Bottled)', slug: 'tea-drinks', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
      { name: 'Coffee Drinks (Canned / Bottled)', slug: 'coffee-drinks', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop' },
      { name: 'Syrups & Drink Mixes', slug: 'syrups-mixes', image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '2',
    name: 'Chocolate',
    slug: 'chocolate',
    icon: '🍫',
    subcategories: [
      { name: 'Milk Chocolate', slug: 'milk-chocolate', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop' },
      { name: 'Dark Chocolate', slug: 'dark-chocolate', image: 'https://images.unsplash.com/photo-1606312619070-d48b4cdb0cea?w=400&h=300&fit=crop' },
      { name: 'White Chocolate', slug: 'white-chocolate', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=300&fit=crop' },
      { name: 'Chocolate Bars', slug: 'chocolate-bars', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop' },
      { name: 'Boxed Chocolates & Gift Packs', slug: 'boxed-chocolates', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop' },
      { name: 'Chocolate Wafers', slug: 'chocolate-wafers', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop' },
      { name: 'Chocolate Cookies', slug: 'chocolate-cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop' },
      { name: 'Hot Chocolate Mix', slug: 'hot-chocolate', image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=400&h=300&fit=crop' },
      { name: 'Baking Chocolate & Cocoa', slug: 'baking-chocolate', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '3',
    name: 'Snacks & Biscuits',
    slug: 'snacks',
    icon: '🍿',
    subcategories: [
      { name: 'Chips & Crisps', slug: 'chips-crisps', image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&h=300&fit=crop' },
      { name: 'Wafers', slug: 'wafers', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop' },
      { name: 'Cookies & Biscuits', slug: 'cookies-biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop' },
      { name: 'Crackers', slug: 'crackers', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop' },
      { name: 'Popcorn', slug: 'popcorn', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop' },
      { name: 'Nuts & Trail Mix', slug: 'nuts-trail-mix', image: 'https://images.unsplash.com/photo-1599599810694-8e56a85b5c24?w=400&h=300&fit=crop' },
      { name: 'Pretzels', slug: 'pretzels', image: 'https://images.unsplash.com/photo-1600850150484-ca71a9e0fbb0?w=400&h=300&fit=crop' },
      { name: 'Energy Bars & Protein Bars', slug: 'energy-bars', image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=400&h=300&fit=crop' },
      { name: 'Candy & Gummies', slug: 'candy-gummies', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '4',
    name: 'Coffee & Tea',
    slug: 'coffee',
    icon: '☕',
    subcategories: [
      { name: 'Instant Coffee', slug: 'instant-coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
      { name: 'Ground Coffee', slug: 'ground-coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop' },
      { name: 'Coffee Beans', slug: 'coffee-beans', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop' },
      { name: 'Coffee Pods/Capsules', slug: 'coffee-pods', image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=300&fit=crop' },
      { name: 'Green Tea', slug: 'green-tea', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop' },
      { name: 'Black Tea', slug: 'black-tea', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop' },
      { name: 'Herbal Tea', slug: 'herbal-tea', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop' },
      { name: 'Milk Tea Packs', slug: 'milk-tea', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&h=300&fit=crop' },
      { name: 'Iced Tea Mix', slug: 'iced-tea', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '5',
    name: 'Ramen & Noodles',
    slug: 'ramen',
    icon: '🍜',
    subcategories: [
      { name: 'Korean Ramen', slug: 'korean-ramen', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
      { name: 'Japanese Ramen', slug: 'japanese-ramen', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop' },
      { name: 'Thai Noodles', slug: 'thai-noodles', image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400&h=300&fit=crop' },
      { name: 'Instant Cup Noodles', slug: 'cup-noodles', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop' },
      { name: 'Spicy Noodles', slug: 'spicy-noodles', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop' },
      { name: 'Rice Noodles', slug: 'rice-noodles', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop' },
      { name: 'Stir-Fry Noodles', slug: 'stir-fry-noodles', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop' },
      { name: 'Pasta', slug: 'pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
      { name: 'Noodle Packs (Family Packs)', slug: 'noodle-packs', image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '6',
    name: 'Grocery & Cooking',
    slug: 'grocery',
    icon: '🛒',
    subcategories: [
      { name: 'Rice, Flour & Grains', slug: 'rice-flour', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop' },
      { name: 'Oil, Ghee & Butter', slug: 'oil-ghee', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop' },
      { name: 'Spices & Seasonings', slug: 'spices', image: 'https://images.unsplash.com/photo-1596040033229-a0b73e5940d0?w=400&h=300&fit=crop' },
      { name: 'Sauces & Condiments', slug: 'sauces', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop' },
      { name: 'Pasta & Spaghetti', slug: 'pasta-spaghetti', image: 'https://images.unsplash.com/photo-1551462147-37bd170b6de3?w=400&h=300&fit=crop' },
      { name: 'Canned Food', slug: 'canned-food', image: 'https://images.unsplash.com/photo-1592854899197-2e7ad4dcc6e6?w=400&h=300&fit=crop' },
      { name: 'Pickles & Chutneys', slug: 'pickles', image: 'https://images.unsplash.com/photo-1589988716068-b0e1e2f12342?w=400&h=300&fit=crop' },
      { name: 'Sugar, Salt & Baking Needs', slug: 'baking-needs', image: 'https://images.unsplash.com/photo-1587241321921-91ffe0fadeeb?w=400&h=300&fit=crop' },
      { name: 'Ready-to-Cook & Ready Meals', slug: 'ready-meals', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '7',
    name: 'Infant & Baby Care',
    slug: 'baby-care',
    icon: '👶',
    subcategories: [
      { name: 'Baby Food & Formula', slug: 'baby-food', image: 'https://images.unsplash.com/photo-1586900396351-c28c789d7de5?w=400&h=300&fit=crop' },
      { name: 'Baby Snacks', slug: 'baby-snacks', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop' },
      { name: 'Diapers', slug: 'diapers', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop' },
      { name: 'Wipes', slug: 'wipes', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop' },
      { name: 'Baby Bath & Shampoo', slug: 'baby-bath', image: 'https://images.unsplash.com/photo-1585584114963-503344a119b0?w=400&h=300&fit=crop' },
      { name: 'Skin Care & Lotions', slug: 'baby-skincare', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop' },
      { name: 'Feeding Bottles & Accessories', slug: 'feeding-bottles', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Baby Health & Hygiene', slug: 'baby-health', image: 'https://images.unsplash.com/photo-1582561833709-2b0f3e0c2c71?w=400&h=300&fit=crop' },
      { name: 'Baby Toys & Essentials', slug: 'baby-toys', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop' },
    ],
  },
  {
    id: '8',
    name: 'Beauty & Health',
    slug: 'beauty-health',
    icon: '💄',
    subcategories: [
      { name: 'Skin Care', slug: 'skin-care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop' },
      { name: 'Hair Care', slug: 'hair-care', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop' },
      { name: 'Oral Care', slug: 'oral-care', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop' },
      { name: 'Body Care', slug: 'body-care', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop' },
      { name: 'Perfume & Deodorant', slug: 'perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop' },
      { name: 'Vitamins & Supplements', slug: 'vitamins', image: 'https://images.unsplash.com/photo-1550572017-4e3b48c70ddb?w=400&h=300&fit=crop' },
      { name: 'First Aid & Health Care', slug: 'first-aid', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop' },
      { name: "Men's Grooming", slug: 'mens-grooming', image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=300&fit=crop' },
      { name: "Women's Care Products", slug: 'womens-care', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop' },
    ],
  },
];

