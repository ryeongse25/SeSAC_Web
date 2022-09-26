import React, {useState} from 'react';

function Event_ex() {
    const [list, setList] = useState([{name: "코디", email: "codi@gmail.com"}, {name: "윤소희", email: "yoonsohee@gmail.com"}]);

    function register() {
        const form = document.getElementById("form");
        let new_name = form.name.value;
        let new_email = form.email.value;

        let dict = {}

        dict['name'] = new_name;
        dict['email'] = new_email;

        setList([...list, dict]);

        form.reset();
    }

    function pressEnter(e) {
        if (e.key === "Enter") {
            register();
        }
    }

    function removeInfo(index) {
        let newList = list.filter((dict, id) => id !== index);
        setList(newList);
    }

    return(
        <div>
            <form id="form">
                <input type="text" name="name" placeholder="이름"></input>
                <input type="text" name="email" placeholder="이메일"  onKeyPress={pressEnter}></input>
                <button type="button" onClick={register}>등록</button>
            </form>

            {list.map((dict, id) => {
                return <h1 key={id} onDoubleClick={() => removeInfo(id)}>{dict.name} : {dict.email}</h1>;
            })}
        </div>
    )
}

export default Event_ex;