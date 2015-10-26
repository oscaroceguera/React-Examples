import React from 'react';
import ReactDom from 'react-dom';

let Button = React.createClass({
	getInitialState(){
		return {
			val : 0
		}
	},
	update(){
		this.setState({
			val : this.state.val + 1
		})
	},
	componentWillMount(){
		console.log('mounting');
		this.setState({
			m : 2
		})
	},
	render(){
		console.log('rendering');
		return <button onClick={this.update}>{this.state.val*this.state.m}</button>
	},
	componentDidMount(){
		this.inc = setInterval(this.update, 500)
	},
	componentWillUnmount(){
		console.log('bye');
		clearInterval(this.inc)
	}
});


let App = React.createClass({
	mount(){
		ReactDom.render(<Button />, document.getElementById('app'));
	},
	unmount(){
		ReactDom.unmountComponentAtNode(document.getElementById('app'));
	},
	render(){
		return (
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmouunt</button>
				<div id="app"></div>
			</div>
		);
	}
})

export default App;
