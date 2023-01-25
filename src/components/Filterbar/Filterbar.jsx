import React from 'react'
import BrandFilter from './BrandFilter'
import CatagoryFilter from './CatagoryFilter'

const Filterbar = ({ catagoryFilterHandler, getData, brands, brandFilterHandler, selectedCategory }) => {
    const categories = ["All", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"]
    return (
        <div className='flex flex-wrap justify-between gap-3'>
            <CatagoryFilter catagoryFilterHandler={catagoryFilterHandler} getData={getData} categories={categories} />
            <BrandFilter brands={brands} selectedCategory={selectedCategory} catagoryFilterHandler={catagoryFilterHandler} brandFilterHandler={brandFilterHandler} />
        </div>
    )
}

export default Filterbar