import React from 'react';

let Message = React.createClass({

	render(){
		return (
			<h3>Message {this.props.params.id}</h3>
		)
	}
});

export default Message;
