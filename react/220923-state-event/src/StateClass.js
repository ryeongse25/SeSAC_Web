import React, { Component } from 'react';

// class명은 대문자로 시작
// Component에 props를 받는 constructor가 정의되어 있는데,
// constructor를 다시 정의하게 될 경우 props를 받을 수 있는 constructor를 덮어쓰게 되니,
// 다시 정의해줘야 한다.
class StateClass extends Component {
    // state랑 props를 둘 다 사용할거면 이렇게
    constructor(props) {
        // 부모의 constructor를 호출 -> props
        super(props);

        this.state = {
            name: "SeSAC",
            cnt: 0,
            list:  ['s', 'e', 's', 'a', 'c']
        }
    }

    // 이렇게 state를 선언할 수도 있다.
    // state = {
    //     name: "SeSAC",
    //     list:  ['s', 'e', 's', 'a', 'c']
    // };

    render() {
        return (
            <div>
                <div>{this.state.name} StateClass {this.state.cnt}</div>
                <button onClick={ () => { 
                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1}
                    })
                } }>클릭</button>
                <button onClick={ () => { this.setState({list: ['c', 'l', 'i', 'c']}) } }>클릭2</button>
                <ul>
                    {this.state.list.map( (txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default StateClass;
