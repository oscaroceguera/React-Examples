import React from 'react';

let PersonTable = React.createClass({
	getInitialState(){
		return {
			data : [
				{ id : 1, fname  : 'Oscar', sname   : 'Oceguera'},
				{ id : 2, fname  : 'Eduardo', sname : 'Oceguera'},
				{ id : 3, fname  : 'Sergio', sname  : 'Oceguera'},
				{ id : 4, fname  : 'DAvido', sname  : 'Oceguera'},
				{ id : 5, fname  : 'MAnolo', sname  : 'Oceguera'},
				{ id : 6, fname  : 'Diego', sname   : 'Oceguera'},
				{ id : 7, fname  : 'lulu', sname    : 'Oceguera'},
				{ id : 8, fname  : 'Elvia', sname   : 'Oceguera'},
				{ id : 9, fname  : 'carlos', sname  : 'Oceguera'},
				{ id : 10, fname : 'ruben', sname   : 'Oceguera'},
				{ id : 11, fname : 'jshon', sname   : 'Oceguera'},
				{ id : 12, fname : 'kasim', sname   : 'Oceguera'},
				{ id : 13, fname : 'jaun', sname    : 'Oceguera'},
				{ id : 14, fname : 'jeduan', sname  : 'Oceguera'},
				{ id : 15, fname : 'luis', sname    : 'Oceguera'},
				{ id : 16, fname : 'pedro', sname   : 'Oceguera'},
				{ id : 17, fname : 'damian', sname  : 'Oceguera'},

			]
		}
	},

	render(){

		return (
			<table>
			{
				this.state.data.map((person,i)=>{
					return <PersonRow data={person} key={i}/>
				})
			}
			</table>
		)
	}
});

let PersonRow = React.createClass({
	render(){
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.sname}</td>
			</tr>
		)
	}
});

export default PersonTable;
