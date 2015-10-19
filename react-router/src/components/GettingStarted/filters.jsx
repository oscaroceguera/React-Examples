import React from 'react';
import List from './filters-list.jsx';

let FilteredList = React.createClass({

	filterList(event){

		let updateList = this.state.initialItems;

		updateList = updateList.filter((item)=>{
			return item.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
		});

		this.setState({ items: updateList });
	},

	getInitialState() {
	    return {
	        initialItems: [
	            "Apples",
				"Broccoli",
				"Chicken",
				"Duck",
				"Eggs",
				"Fish",
				"Granola",
				 "Hash Browns"
	        ],
			items : []
	    }
	},

	componentWillMount(){
		this.setState({items : this.state.initialItems})
	},

	render(){
		return (
			<div className="filter-list">
				<input
					type="text"
					placeholder="Search"
					onChange={this.filterList}
				/>
				<List items={this.state.items} />
			</div>
		)
	}
});

export default FilteredList;
