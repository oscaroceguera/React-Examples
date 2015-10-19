import React from 'react';

let List = React.createClass({
	render(){
		return (
			<ul>
				{
					this.props.items.map(function(item){
						return <li key={item}>{item}</li>
					})
				}
			</ul>
		)
	}
});

export default List;
