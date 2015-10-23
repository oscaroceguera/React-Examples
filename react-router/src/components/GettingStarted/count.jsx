import React from 'react';
import * as styles from './styles';

let Count = React.createClass({
	incrementCount(){
		this.setState({
			count : this.state.count + 1
		})
	},
	getInitialState(){
		return {
			count : 0
		}
	},
	render(){
		return (
			<div style={styles.COUNTER}>
				<h1 style={styles.COUNTER_H1}>Count: {this.state.count}</h1>
				<button
					style={styles.COUNTER_BTN}
					type="button"
					onClick={this.incrementCount}>
					Increment
				</button>
			</div>
		)
	}
});

export default Count;
