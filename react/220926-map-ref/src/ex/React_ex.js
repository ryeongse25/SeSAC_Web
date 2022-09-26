import React, {useState} from 'react';
import WriteTable from './WriteTable';
import SearchTable from './SearchTable';
import './React_ex.css';

function React_ex() {

    // [{}, {}, {}]
    const [list, setList] = useState([]);
    const [s_list, setS_list] = useState([]);

    function writeComment() {
        let form = document.getElementById("form");
        let name = form.name.value;
        let title = form.title.value;

        let dict = {};

        dict["title"] = title;
        dict["name"] = name;

        setList([...list, dict]);

        form.reset();
    }

    function searchComment() {
        let form = document.getElementById("form");
        let s_word = form.search.value;
        let s_option = form.s_box.value;

        let newList = list.filter((dict) => {
            return dict[s_option].includes(s_word)
        });

        setS_list(newList);
    }

    function allComment() {
        setS_list(list);
    }

    return(
        <div>
            <form id="form">
                <fieldset>
                    작성자 : <input type="text" name="name" placeholder='작성자'></input>
                    제목 : <input type="text" name="title"></input>
                    <button type="button" onClick={writeComment}>작성</button>
                </fieldset>

                <br></br>

                <select name="s_box">
                    <option value="name" selected>작성자</option>
                    <option value="title">제목</option>
                </select>
                <input type="text" name="search" placeholder='검색어'></input>
                <button type="button" onClick={searchComment}>검색</button>
                <button type="button" onClick={allComment}>전체</button>

                <WriteTable list={list}/>
                
                {(s_list.length == 0) ? <p>검색 결과가 없습니다</p> : <p>검색 결과</p>}
                {(s_list.length != 0) && <SearchTable s_list={s_list} />}
            </form>
        </div>
    )
}

export default React_ex;