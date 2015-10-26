import React from 'react';
//import * as styles from './styles';

let IntroStates = React.createClass({

	render(){
		return (
			<div>
				<ItemProps txt="this is the props value"/>
			</div>
		)
	}

});

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
		return (
			<div>
				<h1>Introduction to States</h1>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
			</div>
		);
	}
});

let Widget = React.createClass({
	render(){
		return (
			<div>
				<h2>Texto : {this.props.txt} </h2>
				<input type="text" onChange={this.props.update} />
			</div>
		);
	}
});


export default IntroStates;
