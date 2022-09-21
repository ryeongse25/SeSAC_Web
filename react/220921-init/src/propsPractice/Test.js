import React, { Component } from 'react';

const name = "seryeong";
const my_style = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12px"
};

class ClassComponent extends Component {
    render() {
        return (
            <div style={my_style}>{name}</div>
        )
    }
}

export default ClassComponent;