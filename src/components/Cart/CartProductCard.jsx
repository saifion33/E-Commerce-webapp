import React from 'react'
import closeIcon from '../../assets/icons/close-icon.svg'
import plusIcon from '../../assets/icons/plus-icon.png'
import minusIcon from '../../assets/icons/minus-icon.png'
import { useDispatch } from 'react-redux'
import { decreaseProductQuantityByOne, increaseProductQuantityByOne, removeProductFromCart } from '../../features/cartSlice'


const CartProductCard = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className=' flex flex-col gap-3 md:flex-row p-3 items-center justify-between  text-amber-400 border-b-2 border-amber-400'>
            <div className='flex items-center'>
                <img className='w-5 h-5 mx-2 cursor-pointer' onClick={() => { dispatch(removeProductFromCart(product.id)) }} src={closeIcon} alt="close" />
                <div>
                    <img className='w-32' src={product.thumbnail} alt={product.title} />
                </div>
            </div>
            <div className='flex items-center justify-between w-full'>
                <h1 className='ml-auto'>{product.title}</h1>
                <p className='ml-auto'>${product.price}</p>
                <div className='mx-auto border-2 flex gap-3 items-center py-1 px-2 border-amber-400 rounded-full'>
                    <img className='w-4 h-4 cursor-pointer' onClick={() => { dispatch(decreaseProductQuantityByOne(product.id)) }} src={minusIcon} alt="minus" />
                    <p className='text-xl'>{product.quantity}</p>
                    <img className='w-4 h-4 cursor-pointer' onClick={() => { dispatch(increaseProductQuantityByOne(product.id)) }} src={plusIcon} alt="plus" />
                </div>
                <p>${product.subTotal}</p>
            </div>
        </div>
    )
}

export default CartProductCard
