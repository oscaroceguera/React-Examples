import AppDispatcher from '../dispatcher';
import {NEW_ITEM,SAVE_ITEM,REMOVE_ITEM} from '../constants';

export default {

	addItem(){
		AppDispatcher.handleAction({
			actionType : NEW_ITEM
		});
	},

	saveItem(text){
		AppDispatcher.handleAction({
			actionType : SAVE_ITEM,
			text : text
		});
	},

	removeItem(index){
		AppDispatcher.handleAction({
			actionType : REMOVE_ITEM,
			index : index
		});
	}
}
