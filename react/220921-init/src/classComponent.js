import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형
// 클래스형에서는 this.props로 사용한다.
class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent - function</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </div>
        )
    }

    static propTypes = {
        name: PropTypes.string
    }
}

// 함수형
// props를 받는 자식들
// function ClassComponent(props) {
//     return(
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

// 클래스형일 때는 클래스 안쪽에 적어줘도 된다.
// 부모가 props를 안 보냈을 때의 기본 값
ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치'
}

ClassComponent.propTypes = {
    name: PropTypes.string
}

export default ClassComponent;