import React from 'react';

let MenuItem = React.createClass({

	getInitialState(){
		return {
			focused : 0
		}
	},

	clicked(index){
		this.setState({
			focused : index
		})
	},

	render(){

		let self = this;

		return (
			<div>
				<ul>
					{
						this.props.items.map((m, index)=>{
							let style = '';

							if(self.state.focused == index){
								style = 'focused';
							}

							return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>
						})
					}
				</ul>
				<p>Selcted : {this.props.items[this.state.focused]}</p>
			</div>
		);
	}

});

let Menu = React.createClass({
	render(){
		return (
			<MenuItem
				items= {[
					'home', 'services',
					'About', 'contac us'
				]}
			/>
		)
	}
});

export default Menu;
