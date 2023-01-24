import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({ products }) => {
    return (
        <div className=' flex flex-wrap gap-4 p-4 justify-center scroll-smooth'>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default ProductsGrid