import React, { Component } from 'react';

class Cnt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cnt: 0
        }
    }

    render() {
        return (
            <div>
                <h1>cnt : {this.state.cnt}</h1>
                <button onClick={ () => {
                    this.setState({cnt: this.state.cnt + 2});
                } }>+2</button>
                <button onClick={ () => { 
                    this.setState({cnt: this.state.cnt - 1}) 
                } }>-1</button>
            </div>
        )
    }
}

export default Cnt;
