import AppDispatcher from '../dispatcher/app-dispatcher.js';
import {
	CART_ADD,
	CART_REMOVE,
	CART_VISIBLE,
	SELECT_PRODUCT,
	RECEIVE_DATA
} from '../constants/flux-constants';

// Define actions object
let FluxCartActions = {

	// Receive initial product data
	receiveProduct(data){
		AppDispatcher.handleAction({
			actionType : RECEIVE_DATA,
			data : data
		})
	},

	// Set currently selected product variation
	selectProduct(index){
		AppDispatcher.handleAction({
			acctionType : SELECT_PRODUCT,
			data : index
		})
	},

	// Add item to cart
	addToCart(sku, update){
		AppDispatcher.handleAction({
			actionType : CART_ADD,
			sku : sku,
			update : update
		})
	},

	// Remove item from cart
	removeFromCart(sku){
		AppDispatcher.handleAction({
			acctionType : CART_REMOVE,
			sku : sku
		})
	},

	// Update cart visibility status
	updateCartVisible(cartVisible){
		AppDispatcher.handleAction({
			actionType : CART_VISIBLE,
			cartVisible : cartVisible
		})
	}

}

export default FluxCartActions;
