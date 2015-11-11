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
import EggHead from './components/Egghead-io/menu.jsx';
import introProps from './components/Egghead-io/intro-props.jsx';
import StateBasics from './components/Egghead-io/state-basics.jsx';
import Realtionship from './components/Egghead-io/owner-realtionship.jsx';
import RefsAccess from './components/Egghead-io/refs-access.jsx';
import MountingBasics from './components/Egghead-io/mounting-basics.jsx';
import Updating from './components/Egghead-io/updating.jsx';
import Mixins from './components/Egghead-io/mixins.jsx';
import ComposableComponents from './components/Egghead-io/composable-components.jsx';
import DynamicallyGenerated from './components/Egghead-io/dynamically-generated.jsx';
import ReactLink from './components/Egghead-io/react-link.jsx';
import Five from './components/five-pratical-examples/menu.jsx';
import Timer from './components/five-pratical-examples/timer/timer.jsx';
import MenuNav from './components/five-pratical-examples/menu-nav/menu.jsx';
import RealTimeSearch from './components/five-pratical-examples/real-time-search/real-time-search.jsx';
import OrderForm from './components/five-pratical-examples/order-form/order-form.jsx';
import Brandon from './components/brandon-tilley/menu.jsx';
import TextInput from './components/brandon-tilley/text-input.jsx';
import MenuTyler from './components/tylermcginnis/menu.jsx';
import FriendsContainer from './components/tylermcginnis/comprehensive-guide/friends-container.jsx';
import TylerFlux from './components/tylermcginnis/architecting-flux/app.js';
import LearningCurve from './components/flux-learning-curve/components/learning-curve.jsx';

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
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/eggHead">
								Egghead IO
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/five">
								5 Practical Examples
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/brandon">
								Brandon Tilley
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/tyler">
								Tylermcginnis
							</Link>
						</li>
						<li className="hoverLink" style={styles.MENU_LI}>
							<Link style={styles.LINK} to="/learning-curve">
								Flux: Learning Curve
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
				<Route path="/eggHead" component={EggHead}>
					<Route path="intro-props" component={introProps} />
					<Route path="state-basics" component={StateBasics} />
					<Route path="owner-realtionship" component={Realtionship} />
					<Route path="refs-access" component={RefsAccess} />
					<Route path="mounting-basics" component={MountingBasics} />
					<Route path="updating" component={Updating} />
					<Route path="mixins" component={Mixins} />
					<Route path="composable-components" component={ComposableComponents} />
					<Route path="dynamically-generated" component={DynamicallyGenerated} />
					<Route path="react-link" component={ReactLink} />
				</Route>
				<Route path="/five" component={Five}>
					<Route path="timer" component={Timer} />
					<Route path="menu" component={MenuNav} />
					<Route path="real-time-search" component={RealTimeSearch} />
					<Route path="order-form" component={OrderForm} />
				</Route>
				<Route path="/brandon" component={Brandon}>
					<Route path="text-input" component={TextInput} />
				</Route>
				<Route path="/tyler" component={MenuTyler}>
					<Route path="comprehensive-guide" component={FriendsContainer} />
					<Route path="flux" component={TylerFlux} />
				</Route>
				<Route path="/learning-curve" component={LearningCurve} />

			</Route>
		</Router>

	), document.getElementById('container')
)
