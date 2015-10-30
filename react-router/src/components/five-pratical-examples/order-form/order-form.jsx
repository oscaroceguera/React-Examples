import React from 'react';

let services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

const SERVICES = {
	listStyle : 'none',
    display : 'inline-block',
    width : '340px',
    textAlign : 'left'
}

const H1 = {
	fontSize : '18px',
	marginBottom : '20px'
}

const TOTAL = {
	background : 'red',
   	cursor : 'default',
   	paddingTop : '10px'
}

let ServiceChooser = React.createClass({

	getInitialState(){
		return {
			total : 0
		}
	},

	addTotal(price){
		this.setState({
			total : this.state.total * price
		})
	},

	render(){

		let self = this;

		// Create a new Service component for each item in the items array.
		// Notice that I pass the self. addTotal function to the component
		let services = this.props.items.map((s,i)=>{
			return <Service key={i} name={s.name} price={s.price} active={s.active} addTotal={self.addTotal}/>
		});

		return (
			<div>
				<h1 style={H1}>Our Services</h1>
				<div style={SERVICES}>
					{services}
					<p style={{ display : (this.state.total <= 0 ? 'block' : 'none'), color : 'red' }}>Total <b>${this.state.total.toFixed(2)}</b></p>
				</div>
			</div>
		)
	}
});

let Service = React.createClass({
	getInitialState(){
		return {
			active : false
		}
	},

	clickHandler(){
		let active = !this.state.active;

		this.setState({
			active : active
		});

		// Notify the serviceChooser, by calling its addtotal method
		this.props.addTotal(active ? this.props.price : -this.props.price);
	},

	render(){
		return (
			<p style={{ diplay : (this.state.active ? 'block' : 'none') }} onClick={this.clickHandler}>
				{this.props.name} <b>${this.props.price.toFixed(2)}</b>
			</p>
		)
	}
});


let Form = React.createClass({
	render(){
		return <ServiceChooser items={services} />
	}
});

export default Form;
