import React from 'react'
import { useNavigate } from 'react-router-dom'
import onlineShopping from '../assets/icons/online-shopping.png'
const Thanks = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center h-screen bg-slate-900">
            <img src={onlineShopping} alt="Success" className="mx-auto my-16" />
            <div className='space-y-5'>
                <h1 className="text-4xl font-medium text-center text-amber-400">Thank you for your order!</h1>
                <p className="text-xl text-center text-stone-300 w-fit">We'll process your order as soon as possible.You will receive an email confirmation shortly.</p>

            </div>
            <button onClick={() => { navigate('/') }} className="bg-amber-400 text-slate-900 font-bold py-2 mt-10 px-4 rounded-full hover:bg-amber-300">Continue Shopping</button>
        </div>
    )
}

export default Thanks


