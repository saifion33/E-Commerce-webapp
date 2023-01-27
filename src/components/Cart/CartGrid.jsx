import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartProductCard from './CartProductCard'

const CartGrid = () => {
    const products = useSelector(state => state.cart.products)
    const navigate = useNavigate()
    return (
        <div className='bg-slate-800 h-[92vh] px-4 overflow-y-scroll'>
            {products.map(product => <CartProductCard key={product.id} product={product} />)}
            {products.length < 1 && <div className='flex flex-col justify-center h-full text-4xl text-amber-400 font-extrabold items-center gap-4'><p>CART IS EMPTY</p><button type='button' onClick={() => { navigate('/') }} className='bg-amber-400 text-base text-slate-900 rounded-full py-2 px-4 block'>Go to Home</button></div>}

        </div>
    )
}

export default CartGrid
