import React, { Component } from 'react';

class EventClass extends Component {
    constructor(props) {
        super(props);
        // this.eventChange = this.eventChange.bind(this);
        // this.eventClick = this.eventClick.bind(this);
        // 이렇게 바인드를 해줘야지 this를 쓸 수 있다.
        this.printConsole = this.printConsole.bind(this);

        this.state = {
            message: "",
            username: ""
        }
    }

    // 화살표 형태로 쓰면 바인드 안해도 됨
    eventChange = (e) => {
        // username or message
        console.log(e.target.name);
        this.setState({ [e.target.name] : e.target.value});
    }

    eventClick = () => {
        alert(this.state.username + ":" + this.state.message);
        this.setState( {username : "", message : ""} );
    }

    eventKeyPress = (e) => {
        if (e.key === "Enter") {
            this.eventClick();
        }
    }

    printConsole(msg) {
        // bind하지 않으면 this를 사용하지 못한다.
        console.log(msg);
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트!!</h1>

                {/* 새로운 함수로 겉을 감싸서 인자 보내줄 수 있음 */}
                {/* this를 붙여줘야 한다 */}
                <button onClick={ () => { this.printConsole('2') } }>printConsole</button>

                <input type="text" name="username" placeholder="사용자 이름" value={this.state.username} onChange={this.eventChange}></input>
                
                <input type="text" name="message" placeholder="이곳에 입력해보세요." value={this.state.message} onChange={this.eventChange} onKeyPress={this.eventKeyPress}></input>

                <button onClick={this.eventClick}>클릭</button>
            </div>
        )
    }
}

export default EventClass;
