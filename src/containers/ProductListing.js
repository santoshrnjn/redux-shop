import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { fetchProducts, fetchCategories } from '../redux/actions/productActions'
import Categories from './Categories';
import Search from './Search';

const ProductListing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="maincontainer">
            <Search />
            <Categories />
            <div className="cards">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing