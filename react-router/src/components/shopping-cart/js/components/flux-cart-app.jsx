import React from 'react';
import CartStore from '../stores/cart-sotre.js';
import ProductStore from '../stores/product-store.js';
import FluxCart from './flux-cart.jsx';
import FluxProduct from './flux-product.jsx';

function getCartState(){

	let product = ProductStore.getProduct();
	let selectProduct = ProductStore.getSelected();
	let cartItems = CartStore.getCartItems();
	let cartCount = CartStore.getCartCount();
	let cartTotal = CartStore.getCartTotal();
	let cartVisible = CartStore.getCartVisible();

	return {
		product : product,
		selectProduct : selectProduct,
		cartItems : cartItems,
		cartCount : cartCount,
		cartTotal : cartTotal,
		cartVisible : cartVisible
	}
}

let CartApp = React.createClass({

	getInitialState(){
		return getCartState();
	},

	// Add change liteners to stores
	componentDidMount(){
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	},

	// Remove change listenr from storesc
	componentWillMount(){
		ProductStore.removeChangeListener(this._onChange);
		CartStore.removeChangeListener(this._onChange);
	},

	// MEthod to setState baes upon store change
	_onChange(){
		this.setState(getCartState());
	},

	// Render our child components, passing state via props
	render(){
		return (
			<div className="flux-cart-app">
				<FluxCart
					products={this.state.cartItems}
					count={this.state.cartCount}
					total={this.state.cartTotal}
					visible={this.state.cartVisible}
				/>
				<FluxProduct
					product={this.state.product}
					cartItems={this.state.cartItems}
					selected={this.state.selectProduct}
				/>
			</div>
		)
	}
});

export default CartApp;
