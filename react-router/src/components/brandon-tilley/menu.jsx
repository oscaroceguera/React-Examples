import React from 'react';
import * as styles from '../commons/styles';
import { Link } from 'react-router';

let EggMenu = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>Brandon Tilley</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/brandon/text-input">Introduction to properties</Link>
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

export default EggMenu;
