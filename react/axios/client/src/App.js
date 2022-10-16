import {useEffect, useState} from 'react';
import axios from 'axios';
// fetch 기본 api
// axios 라이브러리 설치

const SERVER_URL = 'http://localhost:8080/api/todo';

function App() {

    const [todoList, setTodoList] = useState([]);

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

    useEffect(() => { fetchData(); }, []);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        const done = e.target.done.checked;

        await axios.post(SERVER_URL, {text, done});
        fetchData();

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
            <form onSubmit={onSubmitHandler}>
                <input name="text" type="text"/>
                <input name="done" type="checkbox" />
                <input type="submit" value="추가" />
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
