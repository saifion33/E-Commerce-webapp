import React, { useState, useEffect } from 'react'
import ProductsGrid from '../components/Products/ProductsGrid'
import { fetchData } from '../utils/utils'

const Home = () => {
    const [result, setResult] = useState(null)
    const getData = async () => {
        fetchData('/products/?limit=10').then(data => setResult(data))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-slate-900'>
            {
                result && <ProductsGrid products={result.products} />
            }
        </div>
    )
}

export default Home
