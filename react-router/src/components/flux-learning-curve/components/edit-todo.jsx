import React from 'react';
import TodoActions from '../actions';

let EditTodo = React.createClass({
	getInitialState(){
		return {
			text : ''
		}
	},

	_onChange(e){
		this.setState({
			text : e.target.value
		});
	},

	_save(){
		TodoActions.saveItem(this.state.text)
	},

	_catchEnter(e){
		if(e.keyCode === 13){
			this._save()
		}
	},

	render(){
		return (
			<tr>
				<td>
					<input
						type="text"
						value={this.state.text}
						onChange={this._onChange}
						onKeyDown={this._catchEnter}
						placeholder="Add new todo ..."
						className="form-control"
						autoFocus={true}
					/>
				</td>
				<td>
					<button
						type="buttton"
						onClick={this._save}
						className="btn btn-link pull-right">
						<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
					</button>
				</td>
			</tr>
		)
	}
});

export default EditTodo;
