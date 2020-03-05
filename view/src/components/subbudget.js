import React from 'react';
import axios from 'axios';

function SubTitle(props) {
    return(
        <>
        </>
    )
}

function SubDescrList(props) {
    return(
        <>
        </>
    )
}

function SubRemaining(props) {
    return(
        <>
        </>
    )
}

class SubBudget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			data : null,
			loaded : false
		}
    }

    componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:3001/getBudget/5e31b2150393b87862452bd0/',
			responseType: 'json'
		}).then(function (response) {
			// handle success
			console.log(response.data)
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
        if(this.state.loaded === true) {
            let subs = this.state.data.sub_budgets
            let subDescrList = []
            let subRemainingList = []
            for (var i = subs.length - 1; i >= 0; i--) {
                subDescrList.push(<><td>{subs[i].descr}</td> <td>${subs[i].allocated}</td></>)
                subRemainingList.push(<><td>Remaining</td><td>${subs[i].remaining}</td></>)
			}
            return(				<>
                <table>
                    <tbody>
                        <tr>{subDescrList}</tr>
                        <tr>{subRemainingList}</tr>
                    </tbody>
                </table>
                {JSON.stringify(subs)}
            </>)
        } else {
            return(<>Loading...</>)
        }
    }
}

export default SubBudget;