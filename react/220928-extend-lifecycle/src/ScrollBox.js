import React, {Component, createRef} from 'react';
import './ScrollBox.css'

class ScrollBox extends Component {

    div1 = React.createRef();

    scrollToBottom = () => {
        let scrollHeight = this.div1.current.scrollHeight;
        let clientHeight = this.div1.current.clientHeight;
        console.log(scrollHeight);
        console.log(clientHeight);
        this.div1.current.scrollTop = scrollHeight;
    }

    scrollToTop = () => {
        this.div1.current.scrollTop = 0;
    } 

    render() {
        return(
            <div>
                <div className="container" ref={this.div1}>
                    <div className="content"></div>
                </div>
                <button onClick={this.scrollToTop}>맨 위로</button>
                <button onClick={this.scrollToBottom}>맨 밑으로</button>
            </div>
        )
    }
}

export default ScrollBox;