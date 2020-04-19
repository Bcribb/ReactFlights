import React from 'react';
import '../CSS/flights.scss'
import plane from './plane.jpg'

class Flights extends React.Component {
    constructor(props) {
        super(props);

        this.flights = this.props.flights;
    }

    validFlight = (search, flight, reverse) => {
        //console.log("Date: ", search.departureDate)
        //console.log("Flight Date:", flight.departureDate)
        //console.log("Bool: ", search.departureDate == flight.departureDate)
        
        if(reverse) {
            if(
                (search.destination == flight.source || search.destination == "") &&
                (search.source == flight.destination || search.source == "") &&
                (search.returnDate == flight.departureDate || search.returnDate == "")
            ) {
                return true
            }
        } else {
            if(
                (search.source == flight.source || search.source == "") &&
                (search.destination == flight.destination || search.destination == "") &&
                (search.departureDate == flight.departureDate || search.departureDate == "")
            ) {
                return true
            }
        }
        return false;
    }

    render() {

        if(this.props.return === "true") {
            return(
                <>
                    {this.flights.map(flight => {
                        if(this.validFlight(this.props.searchValues, flight, false)) {
                            return (this.flights.map(flight2 => {
                                console.log("Flight:", flight)
                                console.log("Flight2: ", flight2)
                                console.log("ValidFlight?: ", this.validFlight(this.props.searchValues, flight2, true))
                                return(
                                    this.validFlight(this.props.searchValues, flight2, true) ? <Flight out={flight} in={flight2}/> : <></>
                                )
                            }))
                        }
                    })}
                </>
            );
        } else {
            return(
                <>
                    {this.flights.map(flight => {
                        return(
                            this.validFlight(this.props.searchValues, flight, false) ? <Flight out={flight}/> : <></>
                        )
                    })}
                </>
            );
        }
        
    }
}

class Flight extends React.Component {
    constructor(props) {
        super(props);

        this.in = <></>

        this.out = <FineDetails flight={this.props.out}/>;
        if(this.props.in != undefined) {
            this.in = <FineDetails flight={this.props.in}/>;
            this.price = this.props.out.price + this.props.in.price;
        } else {
            this.price = this.props.out.price;
        }
    }

    render() {
        return(
            <>
                <div className="flight">
                    <div className="leftFlight">
                        <h2 className="price">${this.price}</h2>
                        <div className="details">
                            {this.out}
                        </div>
                        <div className="details">
                            {this.in}
                        </div>
                    </div>
                    <div className="rightFlight">
                        <div className="images">
                            <img src={plane} width="100%" class="center"/>
                            <button>Book this flight</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class FineDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <>
                <a className="flightID">{this.props.flight.flightID}</a><br/>
                <a className="details">
                    {this.props.flight.src} > {this.props.flight.dest}<br/>
                    Depart: {this.props.flight.time}<br/>
                    Arrive: 11.00 AM
                </a>
            </>
        );
    }
}

export default Flights;