import React from 'react';

let TimerExample = React.createClass({

	/**
	 * This is called before our render function.
	 * The object taht is returned is assigned to
	 * this.satet, so we can use it later.
	 */
	getInitialState(){

		return { elapsed : 0 };
	},

	/**
	 * Is called by react when the component
	 * has beeen rendered on the page.
	 * We can set the interval here
	 */
	 componenDidMount(){

		this.timer = setInterval(this.tick, 50);

	 },

	 /**
	  * this method is called immediately before the component is removed
	  * from the page and destroyed. We can clear the interval here:
	  */
	componentWillUnmount(){

		clearInterval(this.timer);

	},

	/**
	 * This function is called every 50 ms.
	 * It update the elapsed counter. Calling setState
	 * causes the component to be referendered
	 */
	tick(){
		
		this.setState({ elapsed : new Date() - this.props.start });

	},

	render(){

		let elapsed = Math.round(this.state.elapsed / 100);
		console.log('elapsep',elapsed);

		// This will give a number with one digit after
		// the decimal dot (xx.x)
		let seconds = (elapsed / 10).toFixed(1);
		console.log('seconds', seconds);

		return (
			<p>This example was started <b>{seconds} seconds</b> ago.</p>
		)
	}
});

let Timer = React.createClass({
	render(){
		return <TimerExample start={Date.now()}/>
	}
})

export default Timer;
