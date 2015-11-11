import React from 'react';
import TodoActions from '../actions';

let TodoItem = React.createClass({
	_delete(){
		console.log("Deleting item key ", this.props.index);
		TodoActions.removeItem(this.props.index);
	},
	render(){
		return(
			<tr>
				<td>
					{this.props.item}
				</td>
				<td>
					<button type="button" onClick={this._delete} className="btn btn-link pull-right">
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
			  		</button>
				</td>
			</tr>
		)
	}
});

export default TodoItem;
