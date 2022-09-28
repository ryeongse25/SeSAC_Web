import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '1',
            age: 1
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // props나 state가 변경되고 랜더링 될 때 실행되는 함수
    componentDidUpdate(props, state) {
        console.log('componentDidUpdate');
        console.log('props : ', props);
        console.log('state : ', state);
        console.log('this.state : ', this.state);
        if ( state.age != this.state.age ) {
            console.log('age change');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                라이프사이클 {this.state.name}
                <button onClick={() => {this.setState({name: 'hi'})}}>버튼</button>
                <button onClick={() => {this.setState({age: 2})}}>버튼</button>
            </div>
        )
    }
}

export default LifeCycle;