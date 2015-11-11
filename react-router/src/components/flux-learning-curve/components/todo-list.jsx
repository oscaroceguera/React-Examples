import React from 'react';
import TodoItem from './todo-item.jsx';
import EditTodo from './edit-todo.jsx';

let TodoList = React.createClass({
	render(){
		let rows = [];
		let list = this.props.list;
		let editing = this.props.editing;

		if(list){
			list.map((item, index)=>{
				rows.push(<TodoItem key={index} index={index} item={item}/>);
			})
		}

		if(editing){
			rows.push(<EditTodo key={-1} />);
		}

		return(
			<div className="table-responsive">
				<table className="table">
		        	<tbody>
		        		{rows}
		        	</tbody>
		      	</table>
		    </div>
		)
	}
});

export default TodoList;
