import React from 'react';
import ReactDom from 'react-dom';
import Count from './components/count.jsx';
import Filters from './components/filters/filters.jsx';

let Contenedor = React.createClass({
	render(){
		return (
			<div>
				<Count />
				<Filters />
			</div>
		);
	}
});

ReactDom.render(
	<Contenedor/>,
	document.getElementById('container')
);
