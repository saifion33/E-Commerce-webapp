import React from 'react'
import CartGrid from '../components/Cart/CartGrid'
import CartHeader from '../components/Cart/CartHeader'
import CartPaymentSection from '../components/Cart/CartPaymentSection'

const Cart = ({cart}) => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='h-screen lg:w-3/4'>
                <CartHeader />
                <CartGrid />
            </div>
            <div className='sticky lg:static bottom-0 left-0  lg:w-3/12'>
                <CartPaymentSection cart={cart} />
            </div>
        </div>
    )
}

export default Cart
