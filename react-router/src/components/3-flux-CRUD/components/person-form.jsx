import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import PersonActions from '../actions/person-actions.js';

let PersonForm = React.createClass({

	onSave(mode, id){
		let inputNombre = ReactDOM.findDOMNode(this.refs.nombre).value;
		let inputApellidos = ReactDOM.findDOMNode(this.refs.apellidos).value;
		let inputEdad = ReactDOM.findDOMNode(this.refs.edad).value;
		let personData = {};

		personData.nombre = inputNombre;
		personData.apellidos = inputApellidos;
		personData.edad = inputEdad;

		console.log(personData);
		if(mode === 'I'){
			PersonActions.insert(personData);
		}else if(mode === 'U'){
			personData.id = id;
			PersonActions.update(id, personData);
		}
	},

	render(){

		let mode = !this.props.selectedPerson ? 'I' : 'U';

		console.log(mode)

		let defaultPerson = {
			nombre : null,
			apellidos : null,
			edad : null
		};

		let selectedPerson = _.extend({}, !this.props.selectedPerson ? defaultPerson : this.props.selectedPerson);

		return (
			<form style={{width : 300, height : 300}}>
				<legend>{
					mode === 'I' ?
					'Ingresa una nueva PErsona' :
					'Actualiza a ' + selectedPerson.nombre
				}
				</legend>
				<br/>
				<div>
					<input
						ref="nombre"
						type="text"
						placeholder="Nombre"
						defaultValue={selectedPerson.nombre}
					/>
				</div>
				<br/>
				<div>
					<input
						ref="apellidos"
						type="text"
						placeholder="Apellidos"
						defaultValue={selectedPerson.apellidos}
					/>
				</div>
				<br/>
				<div>
					<input
						ref="edad"
						type="text"
						placeholder="Edad"
						defaultValue={selectedPerson.edad}
					/>
				</div>

				<div style={{marginTop : 15}}>
					<button
						type="button"
						onClick={this.onSave.bind(null, mode, selectedPerson.id)}
						>
						{mode === 'I' ? 'Guardar' : "Actualizar"}
					</button>
				</div>
			</form>
		)
	}
});


export default PersonForm;
