import React from 'react';
import ReactDOM from 'react-dom';

function Cost(props) {
	return(
		<>
			Cost {props.value}
		</>
	)
}

class Budget extends React.Component {
	constructor(props) {
		super(props)
	}
	renderCost(i) {
		return(
			<Cost value = {i}/>
		)
	}
	render() {
	const costs = this.props.data.costs;
		return(
			<>
				<div>Budget Name</div>
				<div>{this.renderCost(1)}</div>
				<div>{this.renderCost(1)}</div>
				<div>{this.renderCost(1)}</div>
				{
					for (var i = costs.length - 1; i >= 0; i--) {
						
					}
				}
				<div>{JSON.stringify(this.props.data.costs)}</div>
			</>
		)
	}
}

export default Budget;