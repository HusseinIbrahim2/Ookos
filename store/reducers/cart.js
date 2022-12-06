import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import Cart_Item from "../../models/cart-item";
import {ADD_ORDER} from "../actions/orders";

const initialState = {
    items: {},
    totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let newOrUpdatedItem;

            if (state.items[addedProduct.id]) {
                newOrUpdatedItem = new Cart_Item(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                newOrUpdatedItem = new Cart_Item(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: newOrUpdatedItem },
                totalAmount: state.totalAmount + prodPrice
            };
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.prodId];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                const updatedCartItem = new Cart_Item(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = { ...state.items, [action.prodId]: updatedCartItem }
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.prodId];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }
        case ADD_ORDER:
            return initialState;
    }
    return state;
}
