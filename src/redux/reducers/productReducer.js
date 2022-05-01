import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [],
    categories: [],
    cart: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTSBY_CATEGORY:
            return { ...state, products: payload };
        case ActionTypes.FETCH_CATEGORIES:
            return { ...state, categories: payload };
        case ActionTypes.SEARCH_PRODUCTS:
            return { ...state, products: payload };

        default: return state

    }
}

export const handleCartReducer = (state = initialState.cart, action) => {
    const product = action.payload
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                return [...state, { ...product, qty: 1 }]
            }

        default: return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default: return state

    }
}