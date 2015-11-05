import {Dispatcher} from 'flux';

let AppdDispatcher = new Dispatcher();

AppdDispatcher.handleAction = function(action){
	this.dispatch({
		source : 'VIEW_ACTION',
		action : action
	});
}

export default AppdDispatcher;
