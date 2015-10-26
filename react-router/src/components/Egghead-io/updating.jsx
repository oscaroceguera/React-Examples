import React from 'react';

let Button = React.createClass({
	getInitialState(){
		return {
			increasing : false,
			valor : 0
		}
	},
	update(){
		this.setState({
			val : this.state.valor + 1
		})
	},
	componentWillreceiveProps(nextProps){
		this.setState({
			increasing : nextProps.valor > this.state.valor
		})
	},
	shouldComponentUpdate(nextProps, nextState){
		return nextProps % 5 === 0;
	},
	render(){
		console.log('valor', this.state.valor)
		console.log(this.state.increasing);
		return <button onClick={this.update}>{this.state.valor}</button>
	},
	componentDidUpdate(prevProps, prevState){
		console.log('prevProps', prevProps)
		console.log('prevState', prevState)
	}
});

export default Button;
