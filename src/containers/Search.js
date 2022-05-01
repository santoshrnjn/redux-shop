import React, { useState, useEffect } from 'react'
import { FormControl } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { searchProduct, fetchProducts } from '../redux/actions/productActions'

const Search = () => {
    const products = useSelector((state) => state.allProducts.products)
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()

    async function searchFromProducts(term) {
        const res = await products.filter(product => product.title.toLowerCase().includes(term.toLowerCase()))
        dispatch(searchProduct(res))
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (term !== "") {
                searchFromProducts(term)
            }
            else {
                dispatch(fetchProducts())
            }
        }, 1000);

        return () => clearTimeout(timeId)
    }, [term])

    return (
        <div className="searchBox">
            <FormControl
                style={{ width: 400 }}
                placeholder="Search a Product..."
                className="m-auto"
                onChange={(e) => setTerm(e.target.value)}
            />
        </div>
    )
}

export default Search