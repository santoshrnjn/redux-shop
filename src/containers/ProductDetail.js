import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, removeSelectedProduct, addToCart } from '../redux/actions/productActions'

const ProductDetail = () => {
    const product = useSelector((state) => state.product)

    const { productId } = useParams()
    const { image, title, price, category, description } = product
    const dispatch = useDispatch()

    // const fetchProductDetail = async () => {
    //     const response = await axios
    //         .get(`https://fakestoreapi.com/products/${productId}`)
    //         .catch(err => console.log(err))
    //     dispatch(fetchProduct(response.data))
    // }

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId))
        return (() => {
            dispatch(removeSelectedProduct())
        })
    }, [productId])

    const addProductToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <>
                        <div className="col-md-6">
                            <img src={image} alt={title} height="400px" width="400px" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-uppercase text-black-50">{category}</h4>
                            <h1 className="display-5">{title}</h1>
                            <p className="lead">{description}</p>
                            <h3 className="display-6 fw-bold my-4"> ${price}</h3>
                            <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProductToCart(product)}>Add to Cart</button>
                        </div>
                    </>
                )}
            </div>
        </div>)

}
export default ProductDetail