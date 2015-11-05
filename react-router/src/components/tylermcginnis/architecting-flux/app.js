import React from 'react';
import TodoStore from './store/todo.js';
import AddItem from './components/add-item.jsx';
import List from './components/list.jsx';
import TodoActions from './actions/todo.js';

let App = React.createClass({
	getInitialState(){
		return {
			list : TodoStore.getList()
		}
	},

	componentDidMount(){
		TodoStore.addChangeListener(this._onChange);
	},

	componentWillMount(){
		TodoStore.removeChangeListener(this._onChange);
	},

	handleAddItem(newItem){
		TodoActions.addItem(newItem);
	},

	handleRemoveItem(index){
		TodoActions.removeItem(index);
	},

	_onChange(){
		this.setState({
			list : TodoStore.getList()
		})
	},

	render(){

		return (
	      <div className="col-sm-6 col-md-offset-3">
	        <div className="col-sm-12">
	          <h3 className="text-center"> Todo List </h3>
	          <AddItem add={this.handleAddItem}/>
	          <List items={this.state.list} remove={this.handleRemoveItem}/>
	        </div>
	      </div>
	    )

	}
})

export default App;
