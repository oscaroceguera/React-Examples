import React from 'react';
import ReactDOM from 'react-dom';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

let App = React.createClass({
	mixins : [LinkedStateMixin],
	getInitialState(){
		return {
			name : '',
			email : '',
			phone : ''
		}
	},
	render(){
		return (
			<form>
				<div>
					<input valueLink={this.linkState('name')} type="text" placeholder="Name" />
					<label>*{this.state.name}*</label>
				</div>
				<div>
					<input valueLink={this.linkState('email')} type="text" placeholder="Email" />
					<label>*{this.state.email}*</label>
				</div>
				<div>
					<input valueLink={this.linkState('phone')} type="text" placeholder="Phone" />
					<label>*{this.state.phone}*</label>
				</div>
			</form>
		)
	}
});

export default App;
