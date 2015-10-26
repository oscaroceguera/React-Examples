import React from 'react';
//import * as styles from './styles';

let ItemProps = React.createClass({

	getInitialState(){
		return {
			txt : 'The state txt',
			id : 0
		}
	},

	update(e){
		this.setState({
			txt : e.target.value
		});
	},

	render(){

		let txt = this.state.txt;

		return (
			<div>
				<h1>Introduction to States</h1>
				<h2>Texto : {txt} </h2>
				<input type="text" onChange={this.update} />
			</div>
		);
	}
})

let IntroStates = React.createClass({

	render(){
		return (
			<div>
				<ItemProps txt="this is the props value"/>
			</div>
		)
	}
});

export default IntroStates;
