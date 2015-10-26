import React from 'react';

let ReacMixin = {
	getInitialState(){
		return {
			count : 0
		}
	},
	componentWillMount(){
		console.log('will mount')
	},
	incrementCount(){
		this.setState({
			count : this.state.count + 1
		})
	}
};

let App = React.createClass({
	render(){
		return(
			<div>
				<Button txt="this is the button" />
				<br />
				<Label txt="this is the label" />
			</div>
		)
	}
});

let Button = React.createClass({
	mixins : [ ReacMixin ],
	render(){
		return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
	}
});

let Label = React.createClass({
	mixins : [ ReacMixin ],
	componentWillMount(){
		setInterval(this.incrementCount,1000)
	},
	render(){
		return (
			<label>{this.props.txt} - {this.state.count}</label>
		)
	}
});

export default App;
