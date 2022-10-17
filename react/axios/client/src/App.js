import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
// fetch 기본 api
// axios 라이브러리 설치

const SERVER_URL = 'http://localhost:8080/api/todo';

function App() {

    const [todoList, setTodoList] = useState([]);
    const form = useRef();

    const fetchData = async () => {
        const response = await axios.get(SERVER_URL);
        setTodoList(response.data);

        // fetch(SERVER_URL)
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data);
        //     setTodoList(data);
        // });
    }

    useEffect(() => { 
        fetchData(); 
    }, []);

    const onSubmitHandler = async (e) => {
        console.log(form.current);
        const text = form.current.text.value;
        const done = form.current.done.checked;

        await axios.post(SERVER_URL, {text, done});
        fetchData();
        // fetchData()를 다시 실행시키는 대신 지금까지 했던 것 처럼 포스트 결과를 받아와서 띄워줘도 된다.

        // fetch(SERVER_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         text,
        //         done
        //     })
        // })
        // .then(() => { fetchData(); });
    }

    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <form ref={form}>
                <input name="text" type="text"/>
                <input name="done" type="checkbox" />
                <button type="button" onClick={onSubmitHandler}>추가</button>
            </form>
            <form action="http://localhost:8080/id" method="GET">
                <input name="id" type="text" />
                <button type="submit">아이디 보내기</button>
            </form>
            {todoList.map((todo) => {
                return(
                    <div key={todo.id} style={{display: "flex"}}>
                        <div>{todo.id}</div>
                        <div>{todo.text}</div>
                        <div>{todo.done ? 'Y' : 'N'}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
