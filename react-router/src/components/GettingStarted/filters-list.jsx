import React from 'react';
import * as styles from './styles';

let List = React.createClass({
	render(){
		return (
			<ul style={styles.LIST}>
				{
					this.props.items.map(function(item){
						return <li style={styles.LIST_ITEM} key={item}>{item}</li>
					})
				}
			</ul>
		)
	}
});

export default List;
