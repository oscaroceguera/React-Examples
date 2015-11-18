import _ from 'lodash';
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher';
import {
	INSERT_PERSON,
	UPDATE_PERSON,
	EDIT_PERSON,
	LIST_PERSON,
	REMOVE_PERSON
} from '../constants';

const CHANGE_EVENT = 'change';

let _store = {
	list : [
		{nombre: "oscar", apellidos: "oceguesa", edad: "12"}
	],
	editing : null

};


let PersonStore = _.extend({}, EventEmitter.prototype,{

	addChangeListener(cb){
		this.on(CHANGE_EVENT,cb);
	},

	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},

	// GETTERS
	getPersons(){
		return _store;
	},

	getSelectedPerson(){
		return _store.editing;
	}
});

AppDispatcher.register(function(payload){
	let currentPersonIndex;
	let action = payload.action;
	switch (action.actionType) {

		case INSERT_PERSON:
			console.log("actions del store", action.person)
			action.person.id = Date.now();
			_store.list.push(action.person);
			_store.editing = null;
			PersonStore.emit(CHANGE_EVENT);
			break;

		case REMOVE_PERSON:
			currentPersonIndex = _.find(_store.list, function(person){
				return person.id === action.id;
			});
			_store.list.splice(currentPersonIndex, 1);
			_store.editing = null;
			PersonStore.emit(CHANGE_EVENT);
			break;

		case UPDATE_PERSON:
			currentPersonIndex = _.find(_store.list, function(person){
				return person.id === action.id;
			});
			_store.list["currentPersonIndex"] = action.person;
			_store.editing = null;
			PersonStore.emit(CHANGE_EVENT);
			break;

		case EDIT_PERSON:
			currentPersonIndex = _.find(_store.list, function(person){
				return person.id === action.id;
			});
			_store.editing = _store.list[currentPersonIndex];
			PersonStore.emit(CHANGE_EVENT);
			break;
	}
})

export default PersonStore;
