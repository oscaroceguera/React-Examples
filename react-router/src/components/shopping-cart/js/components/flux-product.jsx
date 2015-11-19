import React from 'react';
import FluxCartActions from '../actions/flux-cart-actions';


let Product = React.createClass({

	// Add item to cart via Actions
	addToCart(e){

		let sku = this.props.selected.sku;
		let update = {
			name : this.props.product.name,
			type : this.props.selected.type,
			price : this.props.selected.price
		};

		FluxCartActions.addToCart(sku, update);
		FluxCartActions.updateCartVisible(true);
	},

	// Select product variation via actions
	selectVariant(e){
		FluxCartActions.selectProduct(e.target.value)
	},

	render(){

		let sku = this.props.selected.sku;
		let cartItems = this.props.cartItems;
		let inventory = this.props.selected.inventory;
		let image = this.props.product.image;
		let name = this.props.product.name;
		let description = this.props.product.description;
		let price = this.props.selected.price;
		let variants = this.props.product.variants;

		let ats = (sku in cartItems) ? inventory - cartItems[sku].quantity : inventory;

		console.log("variants ", variants);

		return (
			<div className="flux-product">
				<img src={'img/' + image} />
				<div className="flux-product-detail">
					<h1 className="name">{name}</h1>
					<p className="description">{description}</p>
					<p className="price">Price : ${price}</p>
					<select onChange={this.selectVariant}>
						{
							variants.map((variant, index)=>{
								return <option key={index} value={index}>{variant.type}</option>
							})
						}
					</select>
					<button type="button" onclick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
						{ats > 0 ? 'Add To Cart' : 'Sold Out'}
					</button>
				</div>
			</div>
		);
	}
});

export default Product;
