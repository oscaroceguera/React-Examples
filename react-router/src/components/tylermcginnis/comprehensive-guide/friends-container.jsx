import React from 'react';
import AddFriend from './add-friend.jsx';
import ShowList from './show-list.jsx';

let FriendsContainer = React.createClass({

	getInitialState(){

		return {
			name : 'Oscar Oceguera',
			friends : ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'],
		}

	},

	addFriend(friend){
		this.setState({
			friends : this.state.friends.concat([friend])
		});
	},

	render(){
		return (
			<div>
				<h3> Name : {this.state.name} </h3>
				<AddFriend addNew={this.addFriend} />
				<ShowList names={this.state.friends} />
			</div>
		);
	}
});

export default FriendsContainer;
