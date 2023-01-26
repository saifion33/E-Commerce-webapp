import React from 'react'

const CartPaymentSection = () => {
    return (
        <div className='py-4 px-6 bg-slate-900 lg:h-screen lg:border-l-2 lg:border-amber-400'>
            <h1 className='text-xl text-stone-200 mx-auto w-fit'>Cart Totals</h1>
            <div className='text-stone-200 flex flex-wrap gap-6 lg:flex-col justify-between py-4'>
                <div className='flex lg:justify-between lg:p-2 lg:border-b-2 lg:border-amber-400'><p>Subtotal</p><p>$549</p></div>
                <div className='flex lg:justify-between lg:p-2 lg:text-xl'><p>Total</p><p>$549</p></div>
            </div>
            <button className='bg-amber-400 text-slate-900 px-2 py-1 rounded-full text-base block mx-auto'>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default CartPaymentSection