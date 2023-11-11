const sampleListings = [
  {
    title: "Modern Urban Loft",
    description:
      "Stay in the heart of the city with this stylish loft. Trendy shops and restaurants just steps away.",
    image: {
      filename: "urban_loft",
      url: "https://images.unsplash.com/photo-1579977735013-00ec242dd6fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Downtown Metropolis",
    country: "United States",
    category: "trending",
  },
  {
    title: "Chic Penthouse with Skyline Views",
    description:
      "Experience luxury in this penthouse offering breathtaking views of the city skyline. Perfect for a stylish getaway.",
    image: {
      filename: "city_penthouse",
      url: "https://images.unsplash.com/photo-1675012706065-173ab554c46a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Downtown Metropolis",
    country: "United States",
    category: "trending",
  },
  {
    title: "Cozy Bedroom Retreat",
    description:
      "Relax in this cozy and well-decorated bedroom. Perfect for a peaceful night's sleep.",
    image: {
      filename: "cozy_bedroom",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Suburban Oasis",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Elegant Master Suite",
    description:
      "Indulge in luxury with this spacious and elegant master suite. A perfect escape for a romantic weekend.",
    image: {
      filename: "master_suite",
      url: "https://images.unsplash.com/photo-1498491751984-14acb85d7d90?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Luxury Neighborhood",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Historic Downtown Apartment",
    description:
      "Immerse yourself in the charm of the city's history with this centrally located apartment.",
    image: {
      filename: "downtown_apartment",
      url: "https://images.unsplash.com/photo-1610026906602-ec1b749f3988?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Historic City Center",
    country: "United States",
    category: "iconic-cities",
  },
  {
    title: "Sky-High Condo with City Views",
    description:
      "Enjoy stunning views of iconic landmarks from this modern and stylish condominium.",
    image: {
      filename: "city_condo",
      url: "https://images.unsplash.com/photo-1663101546815-fa572139a028?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "City Skyline District",
    country: "United States",
    category: "iconic-cities",
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "Escape to the mountains in this cozy cabin surrounded by nature. Perfect for hiking and relaxation.",
    image: {
      filename: "mountain_cabin",
      url: "https://images.unsplash.com/photo-1563148760-64687068abdf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Rocky Mountain Retreat",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Alpine Chalet with Panoramic Views",
    description:
      "Experience the beauty of the mountains in this charming chalet with breathtaking panoramic views.",
    image: {
      filename: "alpine_chalet",
      url: "https://images.unsplash.com/photo-1605552478421-e979b1bf25f5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Alps Mountain Range",
    country: "Switzerland",
    category: "mountains",
  },
  {
    title: "Enchanting Castle Retreat",
    description:
      "Live like royalty in this enchanting castle surrounded by beautiful gardens and historic charm.",
    image: {
      filename: "castle_retreat",
      url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Fairytale Countryside",
    country: "United Kingdom",
    category: "castles",
  },
  {
    title: "Medieval Fortress Experience",
    description:
      "Step back in time with a stay in this medieval fortress, complete with turrets and a drawbridge.",
    image: {
      filename: "medieval_fortress",
      url: "https://images.unsplash.com/photo-1548445929-4f60a497f851?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1700,
    location: "Historic Castle Grounds",
    country: "France",
    category: "castles",
  },
  {
    title: "Luxurious Poolside Villa",
    description:
      "Indulge in luxury with this villa featuring a private pool, surrounded by lush gardens and scenic views.",
    image: {
      filename: "poolside_villa",
      url: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1400,
    location: "Tropical Paradise",
    country: "Bali",
    category: "amazing-pools",
  },
  {
    title: "Infinity Pool Oasis",
    description:
      "Relax in style with this modern retreat boasting an infinity pool overlooking the ocean.",
    image: {
      filename: "infinity_pool_oasis",
      url: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Coastal Haven",
    country: "Maldives",
    category: "amazing-pools",
  },
  {
    title: "Quaint Countryside Farmhouse",
    description:
      "Experience the charm of rural living in this cozy farmhouse surrounded by fields and nature.",
    image: {
      filename: "countryside_farmhouse",
      url: "https://images.unsplash.com/photo-1554192755-a63b3d732bf2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Rural Retreat",
    country: "Italy",
    category: "farms",
  },
  {
    title: "Organic Farm Stay",
    description:
      "Escape to this organic farm for a peaceful getaway and enjoy farm-to-table dining in a scenic setting.",
    image: {
      filename: "organic_farm_stay",
      url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Green Valley",
    country: "United States",
    category: "farms",
  },
  {
    title: "Secluded Forest Campsite",
    description:
      "Disconnect and recharge in this secluded campsite nestled deep in the forest, perfect for nature lovers.",
    image: {
      filename: "forest_campsite",
      url: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1750,
    location: "Wilderness Haven",
    country: "Canada",
    category: "camping",
  },
  {
    title: "Desert Oasis Camping",
    description:
      "Experience the magic of the desert with a camping stay featuring stunning sunset views and clear night skies.",
    image: {
      filename: "desert_oasis_camping",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1980,
    location: "Sahara Desert",
    country: "Morocco",
    category: "camping",
  },
  {
    title: "Arctic Igloo Retreat",
    description:
      "Embrace the Arctic experience with a stay in a cozy igloo, surrounded by snowy landscapes and the Northern Lights.",
    image: {
      filename: "arctic_igloo_retreat",
      url: "https://images.unsplash.com/photo-1567618890770-5fba551e55fb?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3050,
    location: "Frozen Wonderland",
    country: "Norway",
    category: "arctic",
  },
  {
    title: "Ice Hotel Adventure",
    description:
      "Discover the thrill of staying in an ice hotel, complete with sculpted ice furnishings and a winter wonderland setting.",
    image: {
      filename: "ice_hotel_adventure",
      url: "https://images.unsplash.com/photo-1667151894623-b936ba3d81f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Arctic Circle",
    country: "Sweden",
    category: "arctic",
  },
  {
    title: "Luxury Beachfront Villa",
    description:
      "Escape to paradise in this luxurious beachfront villa, with direct access to the sandy shores and crystal-clear waters.",
    image: {
      filename: "beachfront_villa",
      url: "https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Tropical Paradise",
    country: "Maldives",
    category: "beach",
  },
  {
    title: "Surfer's Paradise Cottage",
    description:
      "Experience the laid-back beach lifestyle in this cozy cottage, just a short walk from the best surf spots.",
    image: {
      filename: "surfers_paradise_cottage",
      url: "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Surfing Haven",
    country: "Australia",
    category: "beach",
  },
  {
    title: "Artistic Studio Loft",
    description:
      "Inspire creativity in this unique loft space, filled with artistic touches and plenty of natural light.",
    image: {
      filename: "artistic_studio_loft",
      url: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1250,
    location: "Art District",
    country: "France",
    category: "creative-spaces",
  },
  {
    title: "Writer's Retreat Cabin",
    description:
      "Find your muse in this secluded cabin, surrounded by nature and designed for the perfect writing retreat.",
    image: {
      filename: "writers_retreat_cabin",
      url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1570,
    location: "Quiet Woods",
    country: "United States",
    category: "creative-spaces",
  },
  {
    title: "Exclusive Golf Resort Villa",
    description:
      "Experience the ultimate golfing getaway in this exclusive villa located within a prestigious golf resort. Enjoy direct access to the golf course and stunning views of the fairways.",
    image: {
      filename: "golf_resort_villa",
      url: "https://images.unsplash.com/photo-1532662362004-da35ea753120?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1400,
    location: "Golf Paradise Estates",
    country: "United States",
    category: "golfing",
  },
  {
    title: "Luxury Golf Retreat Mansion",
    description:
      "Indulge in luxury at this expansive mansion set on beautifully landscaped grounds with a private putting green. Perfect for avid golfers seeking a lavish retreat with easy access to top-notch courses.",
    image: {
      filename: "luxury_golf_retreat",
      url: "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1650,
    location: "Golfers' Haven",
    country: "Spain",
    category: "golfing",
  },
];

module.exports = { data: sampleListings };
