import FluxCartActions from '../actions/flux-cart-actions.js';

export default {
	getProductData(){
		let data = JSON.parse(localStorage.getItem('product'));
		FluxCartActions.receiveProduct(data);
	}
}
