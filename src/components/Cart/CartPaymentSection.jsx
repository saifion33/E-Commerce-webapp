import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showAlert } from '../../features/alertSlice'
import { removeAllProductsFromCart } from '../../features/cartSlice'
const CartPaymentSection = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const checkoutButtonClickHandler = () => {
        if (products.length > 0) {
            dispatch(removeAllProductsFromCart())
            navigate('/thanks')
        }
        else {
            dispatch(showAlert({ type: 'danger', message: 'Please Add Product to cart' }))
        }
    }
    return (
        <div className='py-4 px-6 bg-slate-900 lg:h-screen lg:border-l-2 lg:border-amber-400'>
            <h1 className='text-xl text-stone-200 mx-auto w-fit'>Cart Totals</h1>
            <p className='text-stone-300 text-center my-4'>Total Products: {products.length}</p>
            <div className='text-stone-200 flex flex-wrap gap-6 lg:flex-col justify-between py-4'>
                <div className='flex lg:justify-between lg:p-2 lg:border-b-2 lg:border-amber-400'><p>Subtotal</p><p>${products.map(product => product.subTotal)?.reduce((a, b) => { return a + b }, 0)}</p></div>
                <div className='flex lg:justify-between lg:p-2 lg:text-xl'><p>Total</p><p>${products.map(product => product.subTotal)?.reduce((a, b) => { return a + b }, 0)}</p></div>
            </div>
            <button onClick={checkoutButtonClickHandler} className='bg-amber-400 text-slate-900 px-2 py-1 rounded-full text-base block mx-auto'>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default CartPaymentSection