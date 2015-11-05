import React from 'react';
import * as styles from '../commons/styles';
import { Link } from 'react-router';

let Menu = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>Tylermcginnis examples</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/tyler/comprehensive-guide">
								comprehensive guide to building apps
							</Link>
						</li>
					</ul>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/tyler/flux">
								Architecting React.js Apps with Flux
							</Link>
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

export default Menu;
