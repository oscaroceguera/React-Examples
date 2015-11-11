import _ from 'lodash';
import AppDispatcher from '../dispatcher';
import {NEW_ITEM, SAVE_ITEM, REMOVE_ITEM} from '../constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
	list : [],
	editing : false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
let TodoStore = _.extend({}, EventEmitter.prototype,{
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb)
	},

	getList(){
		return  _store;
	}
});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload){

	let action = payload.action;

	switch (action.actionType) {
		case NEW_ITEM:
			// Add the data defined in the TodoActions
  			// which the View will pass as a payload
			_store.editing = true;
			TodoStore.emit(CHANGE_EVENT);
			break;

		case SAVE_ITEM:
			_store.list.push(action.text);
			_store.editing = false;
			TodoStore.emit(CHANGE_EVENT);
			break;
		case REMOVE_ITEM:
			_store.list.splice(action.index, 1);
			TodoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
})

export default TodoStore;
