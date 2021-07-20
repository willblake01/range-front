const users = [
  {
    firstName: 'system',
    lastName: 'admin',
    email: 'system.admin@example.com',
    password: 'J@KMvT2WYW6x2WPwuNNtYP6i!vhB3.D!Bq!PdiLmvhADYZTpY8jq3UPwsxFkuKtVABEwdi@a@7!.zijX*fAfThbj@EUroNLXZhkX',
    permissions: {
      set: ['PRODUCTCREATE']
    }
  }
];

const products = [
  {
    brand: 'Kelty',
    title: 'Cabana Shelter',
    category: 'tents',
    description: 'Awesome at the beach, in the park or before a game, the 3-sided Kelty Cabana shelter provides instant protection from the beating sun or a surprise thunderstorm.',
    price: 9995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_1.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_1.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Big Agnes',
    title: 'Frying Pan SL3 Tent with Footprint',
    category: 'tents',
    description: 'Head into the backcountry or the local campground and enjoy 3 seasons of stargazing in the Big Agnes Frying Pan SL3 tent. It\'s easy to pitch and roomy enough for you and 2 friends (or kids...or dogs).',
    price: 20899,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_2.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_2.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'REI Co-op',
    title: 'Half Dome 2 Plus Tent',
    category: 'tents',
    description: 'With an exterior that stands up to foul weather, the REI Co-op Half Dome 2 Plus tent is a light and roomy shelter that\'s 10 in. longer and 4 in. wider than the classic REI Co-op Half Dome 2 tent.',
    price: 22900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_3.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/tent_3.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'REI Co-op',
    title: 'Kingdom 6 Tent',
    category: 'tents',
    description: 'With a roomy interior that divides to create 2 private rooms, the REI Co-op Kingdom 6 tent provides comfortable 3-season protection for you, your family and your gear.',
    price: 43900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509891/range-front/tent_4.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509891/range-front/tent_4.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'The North Face',
    title: 'Assault 2 Tent',
    category: 'tents',
    description: 'Engineered for high-altitude adventures, this rugged, single-wall expedition tent offers light weight and 4-season protection for 2 people.',
    price: 43900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509891/range-front/tent_5.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509891/range-front/tent_5.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Big Agnes',
    title: 'Battle Mountain 2 Tent',
    category: 'tents',
    description: 'This 4-season mountaineering shelter offers roomy protection for 2 people in the harshest of backcountry and high-altitude conditions.',
    price: 69995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_6.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_6.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Big Agnes',
    title: 'Tiger Wall UL2 Tent',
    category: 'tents',
    description: 'An exceptionally lightweight 3-season backcountry shelter from Big Agnes, the Big Agnes Tiger Wall UL2 tent has 2 doors and 2 vestibules to make tent life a little easier.',
    price: 39999,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_7.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_7.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Marmot',
    title: 'Catalyst 2P Tent with Footprint',
    category: 'tents',
    description: 'Roomy, livable and lightweight, the freestanding Marmot Catalyst 2P tent is a comfortable, versatile choice for camping and backpacking trips when you want to shave precious weight.',
    price: 16900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_8.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509892/range-front/tent_8.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'The North Face',
    title: 'Talus 2 Tent with Footprint',
    category: 'tents',
    description: 'Updated with more features and a sharp new aesthetic, The North Face Talus 2 tent offers exceptional 3-season backpacking at an incredible value.',
    price: 19900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/tent_9.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/tent_9.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Kelty',
    title: 'Cosmic Down 40 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'Great for warm-weather backpacking, the 2-season Kelty Cosmic Down 40 sleeping bag features lofty 600-fill-power DriDown™ insulation that defends against moisture and still compresses small.',
    price: 12995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_1.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_1.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Marmot',
    title: 'Atom Sleeping Bag',
    category: 'sleeping-bags',
    description: 'Great for summer and shoulder-season outings, the Marmot Atom Sleeping Bag is filled with high-quality, water-resistant 800-fill goose down and features a fold-down second zipper for ventilation.',
    price: 23093,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_2.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_2.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'The North Face',
    category: 'sleeping-bags',
    title: 'Furnace 20 Sleeping Bag',
    description: 'A lightweight, roomy design for 3-season backpacking, The North Face Furnace 20 sleeping bag is insulated with water-resistant ProDown, which repels water and dries faster than traditional down.',
    price: 18900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_3.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_3.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'NEMO',
    title: 'Riff 15 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'With extra room at the elbows and knees and integrated Thermo Gills for temperature management, the NEMO Riff 3-season sleeping bag is ideal for side sleepers looking for personalized comfort.',
    price: 41995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_4.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_4.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'REI Co-op',
    title: 'Magma 10 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'Boasting lightweight construction, a fitted silhouette and premium, water-resistant 850-fill-power goose down, the REI Co-op men\'s Magma 10 sleeping bag delivers an excellent warmth-to-weight ratio.',
    price: 36900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_5.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_5.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Marmot',
    title: 'Trestles 0 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'When you\'re trekking or mountaineering, you need reliable insulation despite sustained cold and damp conditions. The Marmot Trestles 0 sleeping bag delivers with all-purpose synthetic filling.',
    price: 15900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_6.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_6.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Kelty',
    title: 'Cosmic Down 20 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'The Cosmic Down 20 sleeping bag is insulated with water-resistant DriDown™ that resists moisture, has exceptional loft and compresses down small, making it a great bag for 3-season backpacking.',
    price: 16995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_7.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509879/range-front/bag_7.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'REI Co-op',
    title: 'Siesta 30 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'Offering plenty of room to let restless sleepers move, the kids\' REI Co-op Siesta 30 rectangular sleeping bag uses synthetic fill to keep small campers warm on cool-weather car-camping nights.',
    price: 9995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_8.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_8.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'NEMO',
    title: 'Disco 15 Sleeping Bag',
    category: 'sleeping-bags',
    description: 'Great for side sleepers, the unique 3-season NEMO Disco 15 sleeping bag offers generous room at the elbows and knees and has Thermo Gills that let you regulate temperature for personalized comfort.',
    price: 31995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_9.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/bag_9.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Osprey',
    title: 'Manta AG 36 Hydration Pack',
    category: 'backpacks',
    description: 'The Osprey Manta AG 36 hydration pack covers a wide range of hiking-related activities. It\'s updated with a well-ventilated Anti-Gravity suspension, sleek exterior and well-placed organization.',
    price: 17500,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/pack_1.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/pack_1.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Marmot',
    title: 'Graviton 34 Pack',
    category: 'backpacks',
    description: 'Experience fast-and-light mountain travel at it\'s finest when you carry your gear in the Marmot Graviton 34 pack. Its ventilated harness and wraparound zipper offer breathable comfort and easy access.',
    price: 15900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509885/range-front/pack_2.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509885/range-front/pack_2.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Osprey',
    title: 'Talon 6 Hydration Waistpack',
    category: 'backpacks',
    description: 'The Osprey Talon 6 hydration waistpack for men is perfect for those quick outdoor excursions that are light on gear.',
    price: 7500,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509885/range-front/pack_3.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509885/range-front/pack_3.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Osprey',
    title: 'Kyte 46 Pack',
    category: 'backpacks',
    description: 'Explore alpine steeps or a canyon floor with the women-specific, lightweight Osprey Kyte 46 pack. It offers advanced weight distribution, a sleeping bag compartment and an integrated raincover.',
    price: 18000,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_4.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_4.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Kelty',
    title: 'Trekker 65 Pack',
    category: 'backpacks',
    description: 'Carrying on a tradition of indestructible construction and plenty of pockets, the Kelty Trekker 65 pack offers a simple, comfortable, lightweight design that makes it a favorite on the trail.',
    price: 17995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_5.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_5.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Deuter',
    title: 'Kid Comfort Air Child Carrier',
    category: 'backpacks',
    description: 'Day hikes and all-day family outings are a breeze for both parent and child with the advanced comfort, ventilation and generous gear storage of the lightweight Deuter Kid Comfort Air Child Carrier.',
    price: 24000,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_6.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509886/range-front/pack_6.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Osprey',
    title: 'Atmos AG 65 Pack',
    category: 'backpacks',
    description: 'Don\'t abandon comfort just because you\'re leaving your creature comforts at home. The Osprey Atmos AG 65 pack uses Anti-Gravity™ technology to distribute the load and provide a dreamlike fit.',
    price: 27000,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_7.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_7.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'Gregory',
    title: 'Baltoro 65 Pack',
    category: 'backpacks',
    description: 'Winner of Backpacker magazine\'s 2015 Editors\' Choice Gold Award, this multiday pack with customizable suspension excels equally on long winter weekends and extended trips with a minimalist gear list.',
    price: 29995,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_8.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_8.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  },
  {
    brand: 'REI Co-op',
    title: 'Traverse 65 Pack',
    category: 'backpacks',
    description: 'Great for overnighters and weekend trips, the women\'s REI Co-op Traverse 65 pack offers advanced load handling and all-day comfort.',
    price: 24900,
    image: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_9.jpg',
    largeImage: 'https://res.cloudinary.com/willblake01/image/upload/v1538509887/range-front/pack_9.jpg',
    user: {
      connect: {
        email: 'system.admin@example.com'
      }
    }
  }
]

module.exports = { 
  users,
  products
};
