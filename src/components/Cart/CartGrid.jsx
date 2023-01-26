import React from 'react'
import { useSelector } from 'react-redux'

import CartProductCard from './CartProductCard'

const CartGrid = () => {
    const products = useSelector(state => state.cart.products)
    return (
        <div className='bg-slate-800 h-[92vh] px-4'>
            {products.map(product => <CartProductCard key={product.id} product={product} />)}
            {products.length < 1 && <div className='flex justify-center h-full text-4xl text-amber-400 font-extrabold items-center'>CART IS EMPTY</div>}
        </div>
    )
}

export default CartGrid
