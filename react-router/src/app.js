import React from 'react';
import ReactDom from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import { Router, IndexRoute, Route, Redirect, Link } from 'react-router';
import * as styles from './style';

import withRouter from './components/with-react-router/with-react-router.jsx';
import About from './components/with-react-router/about.jsx';
import Inbox from './components/with-react-router/inbox.jsx';
import InboxUI from './components/inbox-ui/inbox-ui.jsx';
import Message from './components/with-react-router/messages.jsx';
import GettingStarted from './components/GettingStarted/menu.jsx';
import Count from './components/GettingStarted/count.jsx';
import Filters from './components/GettingStarted/filters.jsx';
import JScript from './components/java-script/menu.jsx';
import introLodash from './components/java-script/intro-lodash.jsx';

let history = createHashHistory({
	queryKey : false
});

let Dashboard = React.createClass({
	render(){
		return <div>Welcome to the app!</div>
	}
});

let Ini = React.createClass({
	render(){
		return (
			<div style={styles.DISPLAY_FLEX}>
				<div style={styles.MENU}>
					<h2 style={styles.MENU_TITLE}>Inicio</h2>
					<ul style={styles.MENU_UL}>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/withRouter">
								With Router
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/inbox">
								Inbox UI
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/gettin">
								Getting Started and Concepts
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/jscript">
								JavaScript
							</Link>
						</li>
					</ul>
				</div>
				<div style={styles.CHILDREN_CONTAINER}>
					{this.props.children}
				</div>
			</div>
		)
	}
})



ReactDom.render(
	(
		<Router history={history}>
			<Route path="/" component={Ini}>
				<Route path="/withRouter" component={withRouter}>
					<IndexRoute component={Dashboard} />
					<Route path="about" component={About} />
					<Route path="inbox" component={Inbox}>
						<Route path="messages/:id" component={Message} />
					</Route>
				</Route>
				<Route path="/inbox" component={InboxUI} />
				<Route path="/gettin" component={GettingStarted}>
					<Route path="count" component={Count} />
					<Route path="filters" component={Filters} />
				</Route>
				<Route path="/jscript" component={JScript}>
					<Route path="intro-lodash" component={introLodash} />
				</Route>
			</Route>
		</Router>

	), document.getElementById('container')
)
