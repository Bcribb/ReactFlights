import React from 'react';

class SearchDetails extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let source = <>Anywhere</>
        let destination = <>Anywhere</>
        let returnFrag = <></>
        
        if(this.props.source != undefined && this.props.source != "") {
            source = this.props.source;
        }
        if(this.props.destination != undefined && this.props.destination != "") {
            destination = this.props.destination;
        }

        if(this.props.return === "true") {
            returnFrag = <> > {source}</>
        }

        return (
            <>
                {source} > {destination} {returnFrag}
            </>
        );
    }
}

export default SearchDetails;