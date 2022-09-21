import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    constructor(props) {
        super( props );
        this.title = props.text;
    }
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.props.valid}>콘솔 메세지</button>
            </div>
        )
    }
    static propTypes = {
        text: PropTypes.string.isRequired
    }
}

ClassComponent.defaultProps = {
    text: '이건 기본 text props입니다.'
}

export default ClassComponent;