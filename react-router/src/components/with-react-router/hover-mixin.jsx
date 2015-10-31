export default {

	hoverAction(state){

		let hover = '';

		if(state === true){

			hover = {
				backgroundColor : 'yellow',
				border : 'none',
				borderRadius : '4px',
				margin : '5em',
				opacity : '0.5',
				padding : '5em'
			}
		}else{

			hover = {
				backgroundColor : 'peru',
				border : 'none',
				borderRadius : '4px',
				margin : '5em',
				opacity : '1',
				padding : '5em'
			}
		}

		return hover;
	},
}
