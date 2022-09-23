import React, { Component } from 'react';

class Handler_ex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello World!"
        }
    }

    changeMsg = () => {
        this.setState({message: "Goodbye World!"});
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={this.changeMsg}>클릭</button>
            </div>
        )
    }
}

export default Handler_ex;
