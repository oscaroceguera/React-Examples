import {Dispatcher} from 'flux';

// Create dispatcher instance
let AppdDispatcher = new Dispatcher();

// convenienve method to handle dispatch request
AppdDispatcher.handleAction = function(action){
	this.dispatch({
		source : 'VIEW_ACTION',
		action : action
	});
}

export default AppdDispatcher;
