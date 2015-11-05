import AppdDispatcher from '../dispatcher/dispatcher';
import {ADD_ITEM, REMOVE_ITEM} from '../constants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

let _store = {
	list : []
};

let addItem = (item) => {
	_store.list.push(item)
};

let removeItem = (index) => {
	_store.list.splice(index, 1)
};

let todoStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},

	getList(){
		return _store.list;
	}
});

AppdDispatcher.register((payload)=>{
	let action = payload.action;
	switch(action.actionType){
		case ADD_ITEM:
			addItem(action.data)
			todoStore.emit(CHANGE_EVENT);
			break;
		case REMOVE_ITEM:
			removeItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

export default todoStore;
