import React, { useState } from 'react';

function EventFunction() {
    const [ form, setForm ] = useState({
        username: "",
        message: ""
    });

    const { username, message } = form;

    function onChange(e) {
        // {username: "", message: ""}에 같은 키 값으로 들어와서 덮어써진다.
        const nextForm = { ...form, [e.target.name] : e.target.value };
        console.log(nextForm);
        setForm( nextForm );
    }

    function onClick() {
        alert(username + ":" + message);
        setForm({
            username: "",
            message: ""
        })
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
            onClick();
        }
    }

    function aClick(e) {
        console.log(e);
        e.preventDefault();
    }

    return (
        <div>
            <h1>리액트의 이벤트!!</h1>

            <a href="#" onClick={aClick}>a태그</a>

            <input type="text" name="username" placeholder="사용자 이름" value={username} onChange={onChange}></input>

            <input type="text" name="message" placeholder="이곳에 입력해보세요." value={message} onChange={onChange} onKeyPress={onKeyPress}></input>

            <button onClick={onClick}>클릭</button>
        </div>
    )
}

export default EventFunction;