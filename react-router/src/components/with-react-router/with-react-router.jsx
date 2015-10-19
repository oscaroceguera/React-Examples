import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
	render(){
		return (
			<div>
				<h1>App (With React Router)</h1>
				<ul>
					<li><Link to="/withRouter/about">About</Link></li>
					<li><Link to="/withRouter/inbox">Inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

export default App;
