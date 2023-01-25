import React, { useState, useEffect } from 'react'
import Headbar from '../components/Headbar/Headbar'
import ProductsGrid from '../components/Products/ProductsGrid'
import { fetchData } from '../utils/utils'

const Home = () => {
    const [isLoading, setisLoading] = useState(true)
    const [result, setResult] = useState(null)
    const searchProduct = (productName) => {
        fetchData(`/products/search?q=${productName}`).then(data => { setResult(data); setisLoading(false) })
    }
    const getData = async () => {
        fetchData('/products/?limit=10').then(data => { setResult(data); setisLoading(false) })
    }
    const catagoryFilterHandler = async (category) => {
        fetchData(`/products/category/${category}`).then(data => { setResult(data); setisLoading(false) })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-slate-900 min-h-screen'>
            <Headbar searchProduct={searchProduct} catagoryFilterHandler={catagoryFilterHandler} />
            {
                isLoading && <div className='bg-slate-900 h-screen flex  justify-center items-center text-amber-400 text-3xl font-bold'>Loading...</div>
            }
            {
                (result && result.products.length > 0) && <ProductsGrid products={result.products} />
            }
            {
                !(result && result.products.length > 0) && <div className='bg-slate-900 h-screen flex  justify-center items-center text-amber-400 text-6xl font-bold'>Not Found</div>
            }
        </div>
    )
}

export default Home
