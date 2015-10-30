import React from 'react';
import * as styles from '../commons/styles';
import { Link } from 'react-router';

let EggMenu = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>Five practical examples</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/five/timer">Timer</Link>
						</li>
					</ul>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/five/menu">Navigation menu</Link>
						</li>
					</ul>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/five/real-time-search">Real-Time Search</Link>
						</li>
					</ul>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/five/order-form">Order form</Link>
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
