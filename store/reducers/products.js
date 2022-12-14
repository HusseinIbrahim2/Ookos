import PRODUCTS from '../../data/ProductData';
import {DELETE_PRODUCT} from "../actions/products";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId == 'u1'),
};

export default function productsReducer (state = initialState, action)  {
    switch (action.type){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pid),
                availableProducts: state.availableProducts.filter(product => product.id !== action.pid),
            }
    }
    return state;
}

