import React from 'react';
import ProductData from './Product-data.js';
import CartAPI from './js/utils/cart-api.js';
import CartApp from './js/components/flux-cart-app.jsx';

// Load mock product data into localstorage
ProductData.init();
console.log('product data',ProductData.init());

// Load Mock API Call
CartAPI.getProductData();
console.log('cart api', CartAPI.getProductData())

let App = React.createClass({
	render(){
		return <CartApp />
	}
})

export default App;
