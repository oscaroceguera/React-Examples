import React from 'react';
import HoverMixin from './hover-mixin.jsx';

let About = React.createClass({

	mixins : [ HoverMixin ],

	getInitialState(){
		return {
			hover : false
		}
	},

	onHover(){
		this.setState({
			hover : !this.state.hover
		});
	},

	render(){

		let hoverState = this.state.hover;

		return (
			<button
				onMouseEnter={this.onHover}
				onMouseLeave={this.onHover}
				style={this.hoverAction(hoverState)}
			>
				About
			</button>
		)
	}
});

export default About;
