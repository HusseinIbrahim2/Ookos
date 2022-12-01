import { ADD_TO_CART } from "../actions/cart";
import Cart_Item from "../../models/cart-item";

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
    }
    return state;
}
