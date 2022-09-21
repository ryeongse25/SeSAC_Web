import React, { Component } from 'react';
import image from "./img/dog.jpeg";

const style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20"
};

class ClassComponent extends Component {
    render() {
        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={image}></img>
            </div>
        )
    }
}

export default ClassComponent;