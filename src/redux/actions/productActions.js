import FakeShopApi from '../../apis/FakeShopApi'
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => async (dispatch) => {
    const response = await FakeShopApi.get("/products/")
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await FakeShopApi.get(`/products/${id}`)
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}

export const fetchCategories = () => async (dispatch) => {
    const response = await FakeShopApi.get("/products/categories")
    dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data })
}

export const fetchProductByCategories = (category) => async (dispatch) => {
    const response = await FakeShopApi.get(`/products/category/${category}`)
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const searchProduct = (products) => {
    return {
        type: ActionTypes.SEARCH_PRODUCTS,
        payload: products
    }
};

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
};