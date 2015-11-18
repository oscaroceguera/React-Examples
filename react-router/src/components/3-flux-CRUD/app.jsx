import React from 'react';
import PersonStore from './stores/person-store';
import PersonForm from './components/person-form.jsx';
import PersonList from './components/person-list.jsx';

function getStateFromStore(){
	let persons = PersonStore.getPersons();
	let selectedPerson = PersonStore.getSelectedPerson();

	console.log("Get persons", persons)
	console.log("selectedPerson", selectedPerson);

	return {
		persons : persons,
		selectedPerson : selectedPerson
	}
}

let App = React.createClass({

	getInitialState(){
		return getStateFromStore()
	},

	componentDidMount(){
		PersonStore.addChangeListener(this._onStoreChange);
	},

	componentWillMount(){
		PersonStore.removeChangeListener(this._onStoreChange)
	},

	_onStoreChange(){
		this.setState(getStateFromStore);
	},

	render(){
		return (
			<div style={{margin : '2em'}}>
				<h1>FLUX - CRUD</h1>
				<PersonForm
					key={+new Date()}
					selectedPerson={this.state.selectedPerson}
				/>
				<PersonList
					persons={this.state.persons}
				/>
			</div>
		)
	}
});

export default App;
