import React from 'react';
import TodoActions from '../actions';

let AddTodo = React.createClass({
	_add(){
		TodoActions.addItem();
	},
	render(){
		return(
			<button type="button" onClick={this._add} className="btn btn-link btn-block btn-lg">
				<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
			</button>
		)
	}
});

export default AddTodo;
