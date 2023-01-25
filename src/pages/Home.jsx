import React, { useState, useEffect } from 'react'
import Headbar from '../components/Headbar/Headbar'
import ProductsGrid from '../components/Products/ProductsGrid'
import { fetchData, categoryBrands, allBrands } from '../utils/utils'

const Home = () => {
    const [isLoading, setisLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [brands, setBrands] = useState(allBrands)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState(null)
    const searchProduct = (productName) => {
        fetchData(`/products/search?q=${productName}`).then(data => { setResult(data); setisLoading(false) })
    }
    const getData = async () => {
        fetchData('/products/?limit=100').then(data => { setResult(data); setisLoading(false) })
    }
    const catagoryFilterHandler = async (category) => {
        if (category !== 'All') {
            fetchData(`/products/category/${category}`).then(data => { setResult(data); setisLoading(false) })
            setBrands(categoryBrands[category])
            setSelectedCategory(category)
            setSelectedBrand(null)
        }
        else {
            getData()
            setSelectedBrand(null)
            setBrands(allBrands)
        }
    }
    const brandFilterHandler = (brand) => {
        if (brand !== 'All') {
            setSelectedBrand(brand)
        }
        else {
            setSelectedBrand(null)
        }
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div className='bg-slate-900 min-h-screen'>
            <Headbar searchProduct={searchProduct} selectedCategory={selectedCategory} catagoryFilterHandler={catagoryFilterHandler} getData={getData} brands={brands} brandFilterHandler={brandFilterHandler} />
            {
                isLoading && <div className='bg-slate-900 h-screen flex  justify-center items-center text-amber-400 text-3xl font-bold'>Loading...</div>
            }
            {
                (result && result.products.length > 0) && <ProductsGrid products={selectedBrand ? result.products.filter((product) => product.brand === selectedBrand) : result.products} />
            }
            {
                !(result && result.products.length > 0) && <div className='bg-slate-900 h-screen flex  justify-center items-center text-amber-400 text-6xl font-bold'>Not Found</div>
            }
        </div>
    )
}

export default Home
