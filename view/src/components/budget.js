import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

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
		this.state = {
			data : null,
			loaded : false
		}
	}

	renderCost(i) {
		return(
			<Cost value = {i}/>
		)
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:3000/getBudget/5e31b2150393b87862452bd0/',
			responseType: 'json'
		}).then(function (response) {
			// handle success
			return response.data
		}).then((responseData) => {
		  this.setState({data : responseData, loaded : true})
		}
		).catch(function (error) {
			// handle error
			console.log(error);
		}).finally(
		)
	}


	render() {
		console.log(this.state.data)
		const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]

		if(this.state.loaded === true) {
			const costs = this.state.data.costs;
			let costList = []
			for (var i = costs.length - 1; i >= 0; i--) {
				costList.push(<tr key={i}><td>{costs[i].descr}</td><td>${costs[i].amount}</td></tr>)
			}
			return(
				<>
					<table>
						<tbody>
							<tr>
								<td>{monthNames[this.props.data.month-1]}</td>
								<td>{this.props.data.year} Budget</td>
							</tr>
							{costList}
						</tbody>
					</table>
				</>
			)
		} else {
			return(
				<>Loading</>
			)
		}
	}
}

export default Budget;