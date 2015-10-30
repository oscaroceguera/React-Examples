import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

let Editor = React.createClass({
	getInitialState(){
		return {
			text : 'No hay texto nuevo'
		}
	},
	handleChange(e){
		this.setState({
			text : e.target.value
		})
	},
	render(){
		let text = this.state.text;
		return (
			<div>
				<h3>{text}</h3>
				<input
					type="text"
					placeholder="Intoduzca el texto"
					onChange={this.handleChange}
				/>
			</div>
		)
	}
});

let TextInputLinkstate = React.createClass({
	mixins : [LinkedStateMixin],
	getInitialState(){
		return {
			text : ''
		}
	},
	render(){
		return (
			<div>
				<h3>{this.state.text}</h3>
				<input type="text" valueLink={this.linkState("text")} />
			</div>
		)
	}
});

let TextInputTwo = React.createClass({
	mixins : [LinkedStateMixin],
	getInitialState(){
		return {
			text : 'Nada'
		}
	},
	render(){
		let valueLink = this.linkState("text");
		let handleChange = (e) => {
			valueLink.requestChange(e.target.value)
		};
		return <input type="text" value={valueLink.value} onChange={handleChange} />;
	}
});

let TextInput = React.createClass({
	render(){
		return (
			<div>
				<h2>Input value on change</h2>
				<Editor />
				<hr/>
				<h2>Input con linkstate</h2>
				<TextInputLinkstate />
				<h2>Input two kind</h2>
				<TextInputTwo/>
			</div>
		)
	}
})

export default TextInput;
