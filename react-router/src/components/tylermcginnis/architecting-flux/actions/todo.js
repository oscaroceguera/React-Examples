import AppdDispatcher from '../dispatcher/dispatcher.js';
import {ADD_ITEM,REMOVE_ITEM} from '../constants/index';

let TodoActions = {

	addItem(item){
		AppdDispatcher.handleAction({
			actionType : ADD_ITEM,
			data : item
		});
	},

	removeItem(index){
		AppdDispatcher.handleAction({
			actionType : REMOVE_ITEM,
			data : index
		});
	}
}

export default TodoActions;
