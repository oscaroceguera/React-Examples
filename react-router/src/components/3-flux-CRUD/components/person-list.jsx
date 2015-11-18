import React from 'react';
import PersonActions from '../actions/person-actions.js';

let PersonList = React.createClass({

	onButtonClick(mode, id){
		if(mode === 'D'){
			PersonActions.remove(id);
		}else if(mode === 'U'){
			PersonActions.editPerson(id)
		}
	},

	render(){
		let self = this;


		console.log('2w',this.props.persons.list);

		let personItems = this.props.persons.list.map((person, index) => {

			return (
				<li key={index}>
					{person.nombre + ' - ' + person.pellidos + ' - ' + person.edad}
					{' '}<button onClick={self.onButtonClick.bind(self, 'U', person.id)}>Editar</button>
          			{' '}<button onClick={self.onButtonClick.bind(self, 'D', person.id)}>Eliminar</button>
				</li>
			)
		});


		return (
			<section>
				<h1>items</h1>
				<ul>{personItems}</ul>
			</section>
		)
	}
});

export default PersonList;
