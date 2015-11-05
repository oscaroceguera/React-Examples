import React from 'react';

let ShowList = React.createClass({

	getDefaultProps(){
		return {
			names : []
		}
	},

	render(){
		return(
			<div>
				<h3> Friends </h3>
				<ul>
					{
						this.props.names.map((friend, i)=>{
							return <li key={i}>{friend}</li>
						})
					}
				</ul>
			</div>
		)
	}
});

export default ShowList;
