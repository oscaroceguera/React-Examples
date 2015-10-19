import React from 'react';
import ReactDom from 'react-dom';
import { Router, IndexRoute, Route, Link } from 'react-router';

import withRouter from './components/with-react-router/with-react-router.jsx';
import About from './components/with-react-router/about.jsx';
import Inbox from './components/with-react-router/inbox.jsx';
import InboxUI from './components/inbox-ui/inbox-ui.jsx';
import Message from './components/with-react-router/messages.jsx';
import GettingStarted from './components/GettingStarted/menu.jsx';
import Count from './components/GettingStarted/count.jsx';
import Filters from './components/GettingStarted/filters.jsx';

let Dashboard = React.createClass({
	render(){
		return <div>Welcome to the app!</div>
	}
});

let Ini = React.createClass({
	render(){
		return (
			<div>
				<h1>Inicio</h1>
				<ul>
					<li><Link to="/withRouter">With Router</Link></li>
					<li><Link to="/inbox">Inbox UI</Link></li>
					<li><Link to="/gettin">Getting Started and Concepts</Link></li>
				</ul>
			</div>
		)
	}
})


ReactDom.render(
	(
		<Router>
			<Route path="/" component={Ini} />
			<Route path="/withRouter" component={withRouter}>
			<IndexRoute component={Dashboard} />
				<Route path="/withRouter/about" component={About} />
				<Route path="/withRouter/inbox" component={Inbox}>
					<Route path="messages/:id" component={Message} />
				</Route>
			</Route>
			<Route path="/inbox" component={InboxUI} />
			<Route path="/gettin" component={GettingStarted} />
			<Route path="/gettin/count" component={Count} />
			<Route path="/gettin/filters" component={Filters} />
		</Router>
	), document.getElementById('container')
)
