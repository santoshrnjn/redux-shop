import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductByCategories } from '../redux/actions/productActions'


const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.allProducts.categories);
    const renderCategory = categories.map((category) => {
        return (
            <Button variant="secondary" key={category} onClick={() => dispatch(fetchProductByCategories(category))}>{category.toUpperCase()}</Button>
        )
    })

    return (
        <div className="categoryButtons">
            {renderCategory}
            <Button onClick={() => dispatch(fetchProducts())}>ALL</Button>

        </div>
    )
}

export default Categories