import React from 'react'

const CartHeader = () => {
    return (
        <div className=' p-4 bg-slate-900 sticky top-0 left-0'>
            <div className='flex justify-between'>
                <h1 className='hidden md:block text-xl text-amber-400 font-extrabold'>V-Commerce</h1>
                <p className='text-amber-400'>Product</p>
                <p className='text-amber-400'>Price</p>
                <p className='text-amber-400'>Quantity</p>
                <p className='text-amber-400'>Subtotal</p>
            </div>
        </div>
    )
}

export default CartHeader