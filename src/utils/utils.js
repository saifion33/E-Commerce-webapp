const API_BASE_URL = 'https://dummyjson.com'
export const fetchData = async (queryString) => {
    const response = await fetch(`${API_BASE_URL}${queryString}`)
    return await response.json()
}

export const categoryBrands = {
    "smartphones": [
        "All",
        "Apple",
        "Samsung",
        "OPPO",
        "Huawei"
    ],
    "laptops": [
        "All",
        "APPle",
        "Samsung",
        "Microsoft Surface",
        "Infinix",
        "HP Pavilion"
    ],
    "fragrances": [
        "All",
        "Impression of Acqua Di Gio",
        "Royal_Mirage",
        "Fog Scent Xpressio",
        "Al Munakh",
        "Lord - Al-Rehab"
    ],
    "skincare": [
        "All",
        "L'Oreal Paris",
        "Hemani Tea",
        "Dermive",
        "ROREC White Rice",
        "Fair & Clear"
    ],
    "groceries": [
        "All",
        "Saaf & Khaas",
        "Bake Parlor Big",
        "Baking Food Items",
        "fauji",
        "Dry Rose"
    ],
    "home-decoration": [
        "All",
        "Boho Decor",
        "Flying Wooden",
        "LED Lights",
        "luxury palace",
        "Golden"
    ],
    "furniture": [
        "All",
        "Furniture Bed Set",
        "Ratttan Outdoor",
        "Kitchen Shelf",
        "Multi Purpose",
        "AmnaMart"
    ],
    "tops": [
        "All",
        "Professional Wear",
        "Soft Cotton",
        "Top Sweater"
    ],
    "womens-dresses": [
        "All",
        "RED MICKY MOUSE..",
        "Digital Printed",
        "Ghazi Fabric",
        "IELGY"
    ],
    "womens-shoes": [
        "All",
        "IELGY fashion",
        "Synthetic Leather",
        "Sandals Flip Flops",
        "Maasai Sandals",
        "Arrivals Genuine"
    ],
    "mens-shirts": [
        "All",
        "Vintage Apparel",
        "FREE FIRE",
        "The Warehouse"
    ],
    "mens-shoes": [
        "All",
        "Sneakers",
        "Rubber",
        "The Warehouse"
    ],
    "mens-watches": [
        "All",
        "Naviforce",
        "SKMEI 9117",
        "Strap Skeleton",
        "Stainless"
    ],
    "womens-watches": [
        "All",
        "Eastern Watches",
        "Luxury Digital",
        "Watch Pearls",
        "Bracelet"
    ],
    "womens-bags": [
        "All",
        "LouisWill",
        "Bracelet",
        "Copenhagen Luxe",
        "Steal Frame"
    ],
    "womens-jewellery": [
        "All",
        "Darojay",
        "Copenhagen Luxe",
        "Fashion Jewellery",
        "Cuff Butterfly"
    ],
    "sunglasses": [
        "All",
        "Designer Sun Glasses",
        "mastar watch",
        "LouisWill"
    ],
    "automotive": [
        "All",
        "Car Aux",
        "W1209 DC12V",
        "TC Reusable",
        "Neon LED Light"
    ],
    "motorcycle": [
        "All",
        "METRO 70cc Motorcycle - MR70",
        "BRAVE BULL",
        "shock absorber",
        "JIEPOLLY",
        "Xiangle"
    ],
    "lighting": [
        "All",
        "lightingbrilliance",
        "Ifei Home",
        "DADAWU",
        "YIOSI"
    ]
}
export const allBrands = [
    "All",
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "APPle",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
    "Golden",
    "Furniture Bed Set",
    "Ratttan Outdoor",
    "Kitchen Shelf",
    "Multi Purpose",
    "AmnaMart",
    "Professional Wear",
    "Soft Cotton",
    "Top Sweater",
    "RED MICKY MOUSE..",
    "Digital Printed",
    "Ghazi Fabric",
    "IELGY",
    "IELGY fashion",
    "Synthetic Leather",
    "Sandals Flip Flops",
    "Maasai Sandals",
    "Arrivals Genuine",
    "Vintage Apparel",
    "FREE FIRE",
    "The Warehouse",
    "Sneakers",
    "Rubber",
    "Naviforce",
    "SKMEI 9117",
    "Strap Skeleton",
    "Stainless",
    "Eastern Watches",
    "Luxury Digital",
    "Watch Pearls",
    "Bracelet",
    "LouisWill",
    "Copenhagen Luxe",
    "Steal Frame",
    "Darojay",
    "Fashion Jewellery",
    "Cuff Butterfly",
    "Designer Sun Glasses",
    "mastar watch",
    "Car Aux",
    "W1209 DC12V",
    "TC Reusable",
    "Neon LED Light",
    "METRO 70cc Motorcycle - MR70",
    "BRAVE BULL",
    "shock absorber",
    "JIEPOLLY",
    "Xiangle",
    "lightingbrilliance",
    "Ifei Home",
    "DADAWU",
    "YIOSI"
]