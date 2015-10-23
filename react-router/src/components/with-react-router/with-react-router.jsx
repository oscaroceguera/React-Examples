import React from 'react';
import { Link } from 'react-router';
import * as styles from '../commons/styles';

const App = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>App (With React Router)</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/withRouter/about">About</Link>
						</li>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/withRouter/inbox">Inbox</Link>
						</li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;
