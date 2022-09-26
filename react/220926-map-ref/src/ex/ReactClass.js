import React, {Component} from 'react';
import WriteTable from './WriteTable';
import SearchTable from './SearchTable';
import './React_ex.css';

class ReactClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            s_list: []
        }
    }

    writeComment = () => {
        let form = document.getElementById("form");
        let name = form.name.value;
        let title = form.title.value;

        let dict = {};

        dict["title"] = title;
        dict["name"] = name;

        this.setState({list : [...this.state.list, dict]});

        form.reset();
    }

    searchComment = () => {
        let form = document.getElementById("form");
        let s_word = form.search.value;
        let s_option = form.s_box.value;

        let newList = this.state.list.filter((dict) => {
            return dict[s_option].includes(s_word)
        });

        this.setState({s_list : newList});
    }

    allComment = () => {
        this.setState({s_list : this.state.list});
    }

    render() {
        return (
            <div>
                <form id="form">
                    <fieldset>
                        작성자 : <input type="text" name="name" placeholder='작성자'></input>
                        제목 : <input type="text" name="title"></input>
                        <button type="button" onClick={this.writeComment}>작성</button>
                    </fieldset>

                    <br></br>

                    <select name="s_box">
                        <option value="name" selected>작성자</option>
                        <option value="title">제목</option>
                    </select>
                    <input type="text" name="search" placeholder='검색어'></input>
                    <button type="button" onClick={this.searchComment}>검색</button>
                    <button type="button" onClick={this.allComment}>전체</button>

                    <WriteTable list={this.state.list}/>
                    
                    {(this.state.s_list.length == 0) ? <p>검색 결과가 없습니다</p> : <p>검색 결과</p>}
                    {(this.state.s_list.length != 0) && <SearchTable s_list={this.state.s_list} />}
                </form>
            </div>
        )
    }
}

export default ReactClass;