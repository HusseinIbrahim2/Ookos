import PRODUCTS from '../../data/ProductData';

const initialState = {
    availabelProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product) => product.ownerId == 'u1'),
};

function productsReducer(state = initialState, action) {
    return state;
}

export default productsReducer;
