import React from 'react';
//import * as styles from './styles';

let ItemProps = React.createClass({

	getDefaultProps(){
		return {
			txt : 'Default text',
			cat : 0
		}
	},

	propTypes : {
		txt : React.PropTypes.string,
		cat : React.PropTypes.number.isRequired
	},

	render(){

		let txt = this.props.txt;
		let cat = this.props.cat;

		return (
			<div>
				<h1>Introduction to Properties</h1>
				<h2>Texto : {txt} </h2>
				<h2>Number : {cat} </h2>
			</div>
		);
	}
})

let IntroProps = React.createClass({

	render(){
		return (
			<div>
				<ItemProps cat={5} txt="this is the props value"/>
			</div>
		)
	}
});

export default IntroProps;
