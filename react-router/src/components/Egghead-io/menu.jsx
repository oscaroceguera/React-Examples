import React from 'react';
import * as styles from '../commons/styles';
import { Link } from 'react-router';

let EggMenu = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>React.js fundamentals</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/intro-props">Introduction to properties</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/state-basics">State Basics</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/owner-realtionship">Owner Ownee Realtionship</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/refs-access">Using Refs to Access Componnets</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/mounting-basics">Component Lifecycle - Mounting Basics</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/updating">Component Lifecycle - Updating</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/mixins">Mixins</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/composable-components">Composable Components</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/eggHead/react-link"> With-addons - ReactLink</Link>
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
