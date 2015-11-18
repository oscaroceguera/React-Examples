import AppDispatcher from '../dispatcher';
import {
	INSERT_PERSON,
	UPDATE_PERSON,
	EDIT_PERSON,
	LIST_PERSON,
	REMOVE_PERSON
} from '../constants';

let PersonActions = {

	insert(data){
		console.log("insert data", data)
		AppDispatcher.handleAction({
			type : INSERT_PERSON,
			data : data
		})
	},

	remove(id){
		AppDispatcher.handleAction({
			type : REMOVE_PERSON,
			id : id
		})
	},

	editPerson(id){
		AppDispatcher.handleAction({
			type : EDIT_PERSON,
			id :id
		})
	},

	update(id){
		AppDispatcher.handleAction({
			type : UPDATE_PERSON,
			id : id
		})
	}
}

export default PersonActions;
