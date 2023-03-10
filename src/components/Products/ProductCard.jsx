import React, { useState } from 'react'
import starIcon from '../../assets/icons/starIcon.png'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart } from '../../features/cartSlice'
import { showAlert } from '../../features/alertSlice'

const ProductCard = ({ product, addProductToCartByMark, productsToAddToCart }) => {
    const productsInCart = useSelector(state => state.cart.products)
    const onChangeHandler = (e) => {
        setProductCount(e.target.value)
    }
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        if (!productsInCart.find(cartProduct => cartProduct.id === product.id)) {
            dispatch(addProductToCart(product));
            dispatch(showAlert({ type: 'success', message: 'Product added to cart' }))
        }
        else {
            dispatch(showAlert({ type: 'success', message: 'Product already in cart' }))
        }
    }


    return (
        <div className='product-card w-full max-w-xs flex flex-col bg-slate-700 p-3 rounded-md'>
            <input onChange={() => { addProductToCartByMark(product) }} className='w-5 h-5 ml-auto mb-2' checked={productsToAddToCart.find(markedProduct => markedProduct.id === product.id)} type="checkbox" name="add-item" id="add-item-check" />
            <div className='image-container'>
                <img className='max-h-52 mx-auto' src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details space-y-3 mt-auto">
                <div className='mt-3 flex justify-between '>
                    <h1 className='text-xl text-amber-400'>{product.title}</h1>
                    <div className='flex items-center gap-1'>
                        <img className='w-4 h-4' src={starIcon} alt="star" />
                        <p className='text-amber-400'>{product.rating}</p>
                    </div>
                </div>
                <div className='text-amber-300'>
                    Only {product.stock} items left
                </div>
                <p className='product-description text-stone-200'>{product.description}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-amber-400'>${product.price}</p>
                    <div>
                        <button type='button' onClick={addToCartHandler} className='bg-amber-400 text-slate-900 font-bold px-3 py-1 rounded'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
