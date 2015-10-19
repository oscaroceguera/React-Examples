import React from 'react';
import { Link } from 'react-router';

let GettingStarted = React.createClass({
	render(){
		return (
			<div>
				<h1>Getting stated and concepts</h1>
				<ul>
					<li><Link to="/gettin/count">Count</Link></li>
					<li><Link to="/gettin/filters">Filters</Link></li>
				</ul>
			</div>
		)
	}
});

export default GettingStarted;
