import React, { useState } from 'react';

function StateFunction() {
    // this.state {
        // msg: ""
    // }
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);

    function changeMsg() {
        // setState({msg: "메세지"})
        // 값을 변경하는 함수 이름이 다르기 때문에 따로 따로 써줘야함
        setMsg("메세지");
    }

    return (
        <div>
            <p>{msg}</p>
            StaeFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;