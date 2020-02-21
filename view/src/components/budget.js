import React from 'react';
import ReactDOM from 'react-dom';

function Cost(props) {
	return(
		<>
			Description {props.value}
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
	const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
		let costList = []
		for (var i = costs.length - 1; i >= 0; i--) {
			costList.push(<tr><td>{costs[i].descr}</td><td>${costs[i].amount.$numberInt}</td></tr>)
		}
		return(
			<>
				<div>{monthNames[this.props.data.month.$numberInt-1]} {this.props.data.year.$numberInt} Budget</div>
				{costList}
				<div>{JSON.stringify(this.props.data)}</div>
			</>
		)
	}
}

export default Budget;