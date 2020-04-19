import React from 'react';
import '../CSS/App.scss';
import Flights from './Flights.js'
import FlightsJSON from './Flights.json'
import SearchDetails from './SearchDetails.js'
import SearchForm from './SearchForm.js'

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			returnSearch: "true",
			searchValues: {}
		}

		this.flights = FlightsJSON;

		this.returnTab = this.returnTab.bind(this);
		this.oneWayTab = this.oneWayTab.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	returnTab = () => {
		this.setState({returnSearch: "true"})
	}

	oneWayTab = () => {
		this.setState({returnSearch: "false"})
	}

	handleSubmit = (input) => {
		this.setState({searchValues: input});
	}

	render() {
		let departureDate = <>Departure: Anytime</>
		let returnDate = <>Return: Anytime</>

		if(this.state.searchValues.departureDate != undefined && this.state.searchValues.departureDate != "") {
			departureDate = <>Departure: {this.state.searchValues.departureDate}</>
		}
		if(this.state.searchValues.returnDate != undefined && this.state.searchValues.returnDate != "") {
			returnDate = <>Return: {this.state.searchValues.returnDate}</>
		}

		if(this.state.returnSearch != "true") {
			returnDate = <></>
		}

		return (
			<>
				<div className="row" name="HeadingBar">
					<h1>Flight Search Engine</h1>
				</div>
				<div className="row">
					<div className="column left">
						<div className="tab">
							<button className="tablinks" onClick={this.oneWayTab}>One Way</button>
							<button className="tablinks" onClick={this.returnTab}>Return</button>
						</div>
						<div className="row">
							<SearchForm return={this.state.returnSearch} onSubmit={this.handleSubmit}/>
						</div>
					</div>
					<div className="column right">
						<div className="row">
							<div className="flightOrder">
								<h3>
									<SearchDetails source={this.state.searchValues.source} destination={this.state.searchValues.destination} return={this.state.returnSearch}/>
								</h3>
							</div>
							<div className="dates">
								{departureDate}<br/>
								{returnDate}
							</div>
						</div>
						<Flights return={this.state.returnSearch} searchValues={this.state.searchValues} flights={this.flights}/>
					</div>
				</div>
			</>
		)
	};
}

export default App;