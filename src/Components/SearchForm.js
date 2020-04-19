import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source : "",
            destination : "",
            departureDate : "",
            returnDate : "",
            passengers : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    getValue(name, target) {
        if(name === "source") {
            return target.value;
        } else if (name === "destination") {
            return target.value;
        } else if (name === "departureDate") {
            return target.value;
        } else if (name === "returnDate") {
            return target.value;
        } else if (name === "passengers") {
            return target.value;
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = this.getValue(name, target);
		this.setState({[name] : value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        let returnDate
        if(this.props.return==="true") {
                returnDate =
                <>
                    <DateInput name="returnDate" value={this.state.returnDate} placeholder="Return Date" onChange={this.handleInputChange}/><br/>
                </>
        }

        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input name="source" value={this.state.source} type="text" placeholder="Enter Origin City" onChange={this.handleInputChange}></input><br/>
                    <input name="destination" value={this.state.destination} type="text" placeholder="Enter Destination City" onChange={this.handleInputChange}></input><br/>
                    <DateInput name="departureDate" value={this.state.departureDate} placeholder="Departure Date" onChange={this.handleInputChange}/><br/>
                    {returnDate}
                    <input name="passengers" value={this.state.passengers} type="number" placeholder="Passengers" onChange={this.handleInputChange}/><br/>
                    <input type="submit" value="Search" id="search"></input>
                </form>
            </>
        );
    }
}

class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'text'
        };
    }

    onFocus = () => {
        this.setState({
            type: 'date'
        });
    }

    onBlur = () => {
        this.setState({
            type: 'text'
        });
    }

    render() {

        let dateName;
        if(this.props.name === "departureDate") {
            dateName = 
                <>
                   value={this.props.value} 
                </>;
        } else {
            dateName = 
                <>
                   value={this.props.value} 
                </>;
        }

        return(
            <>
                <input 
                    name={this.props.name}
                    {...dateName}
                    type={this.state.type} 
                    onChange={this.props.onChange}
                    onFocus={this.onFocus} 
                    onBlur={this.onBlur} 
                    placeholder={this.props.placeholder}>
                </input>
            </>
        );
    }
}

export default SearchForm;