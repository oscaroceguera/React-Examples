import React from 'react';
import ReactDOM from 'react-dom';
//import * as styles from './styles';

let RefsAccess = React.createClass({

	render(){
		return (
			<div>
				<ItemProps/>
			</div>
		)
	}

});

let ItemProps = React.createClass({

	getInitialState(){
		return {
			red: 0,
			green: 0,
			blue: 0
		}
	},

	update(){
		this.setState({
			red : ReactDOM.findDOMNode(this.refs.myRed.refs.inp).value,
			green :  ReactDOM.findDOMNode(this.refs.myGreen.refs.inp).value,
			blue :  ReactDOM.findDOMNode(this.refs.myBlue.refs.inp).value,
		});
	},

	render(){
		return (
			<div>
				<h1>Using Refs to Access Components</h1>
				<div>
					<Slider ref="myRed" update={this.update}/>
					<label>{this.state.red}</label>
					<Slider ref="myGreen" update={this.update}/>
					<label>{this.state.green}</label>
					<Slider ref="myBlue" update={this.update}/>
					<label>{this.state.blue}</label>
				</div>
			</div>
		);
	}
});

let Slider = React.createClass({
	render(){
		return (
			<div>
				<input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
			</div>
		);
	}
});


export default RefsAccess;
