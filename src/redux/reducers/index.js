import { combineReducers } from "redux"

import { productReducer, selectedProductReducer, handleCartReducer } from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    handleCart: handleCartReducer
});

export default reducers;
