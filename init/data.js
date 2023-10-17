const sampleListings = [
  {
    title: "Cozy Cabin Retreat",
    description:
      "A charming cabin in the woods, perfect for a romantic getaway.",
    price: 1500,
    location: "Mountainside",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Luxury Beachfront Villa",
    description:
      "Spacious villa with a private beach, ideal for a family vacation.",
    price: 1750,
    location: "Beachfront",
    country: "Spain",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Downtown Loft Apartment",
    description:
      "Modern loft apartment in the heart of the city, great for urban explorers.",
    price: 1200,
    location: "City Center",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Rustic Farmhouse Getaway",
    description:
      "Escape to the countryside in this beautiful farmhouse with scenic views.",
    price: 1450,
    location: "Rural Retreat",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80",
  },
  {
    title: "Ski Chalet Paradise",
    description:
      "Ski-in/ski-out chalet with a hot tub, perfect for winter sports enthusiasts.",
    price: 1800,
    location: "Mountain Village",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2950&q=80",
  },
  {
    title: "Historic Bed and Breakfast",
    description:
      "Experience history and comfort in this historic B&B in the heart of the old town.",
    price: 1350,
    location: "Old Town",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1606788635679-6a4e2b9a7b07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Secluded Treehouse Retreat",
    description:
      "Unique treehouse getaway in the midst of nature, a perfect escape.",
    price: 1250,
    location: "Forest Hideaway",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Modern Condo with a View",
    description:
      "Stylish condo with stunning city views and all the amenities you need.",
    price: 1550,
    location: "City Skyline",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1560448076-957f79776e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Desert Oasis Villa",
    description:
      "Relax in a luxurious villa surrounded by desert landscapes and pool.",
    price: 1700,
    location: "Desert Retreat",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1652114067335-a0f7d8f9eeff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2897&q=80",
  },
  {
    title: "Charming Cottage by the Lake",
    description:
      "Quaint cottage with lake access, ideal for a peaceful lakeside vacation.",
    price: 1600,
    location: "Lakefront",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1446419385500-203d54c0c460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in a beautiful historic castle with modern comforts.",
    price: 1900,
    location: "Castle Grounds",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1559906727-76b9259eb4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Tropical Island Bungalow",
    description:
      "Beachfront bungalow on a tropical island, a paradise for beach lovers.",
    price: 1750,
    location: "Island Paradise",
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1602002418679-43121356bf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
  },
  {
    title: "Mountain View Lodge",
    description:
      "Lodge with panoramic mountain views, perfect for hikers and nature lovers.",
    price: 1350,
    location: "Mountain Valley",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Urban Penthouse Apartment",
    description:
      "Luxurious penthouse in the city with a private rooftop terrace.",
    price: 1850,
    location: "Downtown Skyscraper",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Serenity Spa Resort",
    description:
      "Relax and rejuvenate at this spa resort in a tranquil natural setting.",
    price: 1400,
    location: "Spa Retreat",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1652868965179-691e57c7ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2877&q=80",
  },
  {
    title: "Historic Townhouse",
    description:
      "Stay in a charming historic townhouse with easy access to the city's attractions.",
    price: 1600,
    location: "Historic District",
    country: "Spain",
    image:
      "https://images.unsplash.com/photo-1577593980495-6e7f66a54ee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Lakeview Cabin Getaway",
    description:
      "Cabin with a stunning lake view, perfect for a peaceful escape.",
    price: 1350,
    location: "Lakeside Retreat",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Luxury Safari Tent Camp",
    description:
      "Experience the wilderness in style with a luxury tent in the African savannah.",
    price: 1800,
    location: "Safari Adventure",
    country: "Kenya",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Island Paradise Villa",
    description:
      "Exquisite villa on a secluded island with pristine beaches and coral reefs.",
    price: 1650,
    location: "Tropical Island",
    country: "Fiji",
    image:
      "https://images.unsplash.com/photo-1651213084058-c3420ea21852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Mountain Lodge Escape",
    description:
      "Escape to a cozy mountain lodge with a fireplace and stunning views.",
    price: 1750,
    location: "Mountain Escape",
    country: "Austria",
    image:
      "https://images.unsplash.com/photo-1644620630296-29cba85e7a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
];

module.exports = { data: sampleListings };
