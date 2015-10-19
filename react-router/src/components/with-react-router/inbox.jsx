import React from 'react';

let Inbox = React.createClass({
	render(){
		return (
			<div>
				<h1>Inbox</h1>
				{this.props.children || "Welcome to your Inbox"}
			</div>
		)
	}
});

export default Inbox;
