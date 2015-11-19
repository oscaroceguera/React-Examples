import AppDispatcher from '../dispatcher/app-dispatcher.js';
import {EventEmitter} from 'events';
import {
	CART_ADD,
	CART_REMOVE,
	CART_VISIBLE,
	SELECT_PRODUCT,
	RECEIVE_DATA
}  from '../constants/flux-constants.js';
import _ from 'lodash';

// Define initial data points
let _product = {};
let _selected = null;

//Method to load product data from mock AppDispatcher
function loadProductData(data){
	_product = data[0];
	_selected = data[0].variants[0];
};

// Method to set the currently selected product variation
function setSelected(index){
	_selected = _product.variants[index];
};

// Extend ProductStore with EventEmitter to add eventing capabilities
let ProductStore = _.extend({}, EventEmitter.prototype, {

	// Return Prduct data
	getProduct(){
		return _product;
	},

	// Return selected product
	getSelected(){
		return _selected;
	},

	// Emit change event
	emitChange(){
		this.emit('change');
	},

	//Add change listener
	addChangeListener(cb){
		this.on('change', cb)
	},

	// Remove change listener
	removeChangeListener(cb){
		this.removeListener('change', cb)
	},

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload){
	let action = payload.action;
	let text;

	switch (action.actionType) {

		// Respond to RECEIVE_DATA action
		case RECEIVE_DATA:
			loadProductData(action.data);
			break;

		// Respond to SELECT_PRODUCT action
		case SELECT_PRODUCT:
			setSelected(action.data);
			break;
		default:
			return true;
	}

	ProductStore.emitChange();
	return true;
});

export default ProductStore;
