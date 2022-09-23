import React, { useState } from 'react';

function Cnt() {
    const [cnt, setCnt] = useState(0);

    function Increase() {
        setCnt(cnt + 1);
    }

    function Decrease() {
        setCnt(cnt - 2);
    }

    return (
        <div>
            <h1>cnt : {cnt}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-2</button>
        </div>
    )
}

export default Cnt;