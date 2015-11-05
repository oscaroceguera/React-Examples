import React from 'react';

let addFriend = React.createClass({

	getInitialState(){
		return {
			newFriend : ''
		}
	},

	propTypes(){
		addNew : React.PropTypes.func.isRequired
	},

	updateNewFriend(e){
		this.setState({
			newFriend : e.target.value
		});
	},

	handleAddNew(){
		let newFriend = this.state.newFriend;

		this.props.addNew(newFriend);

		this.setState({
			newFriend : ''
		});
	},

	render(){

		let newFriend = this.state.newFriend;

		return (
			<div>
				<input
					type="text"
					value={newFriend}
					onChange={this.updateNewFriend}
				/>
				<button onClick={this.handleAddNew}>Add Friend</button>
			</div>
		)
	}
});

export default addFriend;
