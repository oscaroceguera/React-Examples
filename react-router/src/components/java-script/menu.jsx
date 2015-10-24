import React from 'react';
import * as styles from '../commons/styles';
import { Link } from 'react-router';

let EggMenu = React.createClass({
	render(){
		return (
			<div>
				<div style={styles.MENU}>
					<h1 style={styles.TITLE}>JavaScript</h1>
					<ul style={styles.LIST}>
						<li style={styles.LIST_ITEMS}>
							<Link style={styles.LINK_ITEM} to="/jscript/intro-lodash">Intro Lodash</Link>
						</li>
						{/*<li><Link to="">State Basics</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>
						<li><Link to="">Filters</Link></li>*/}
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
