import React from 'react';
import { Link } from 'react-router';
import * as styles from '../commons/styles';

let GettingStarted = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>Getting stated and concepts</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/gettin/count">Count</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/gettin/filters">Filters</Link>
						</li>
					</ul>
				</div>
				<div style={styles.CONTAINER}>
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default GettingStarted;
