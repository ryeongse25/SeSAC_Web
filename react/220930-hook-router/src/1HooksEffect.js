import {useState, useEffect} from 'react';

const Hook = ()  => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }

    const changeCnt = () => {
        setCnt(cnt + 1);
    }

    // componentDidMount와 componentDidUpdate가 합쳐진 것
    // 처음 rendering될 때와 state값이 업데이트 될 때 실행된다.
    // 두번째 인자로 배열을 보내면, 처음 렌더링될 때와 배열에 있는 state가 없데이트 될 때만 실행된다.
    // 그래서, 빈 배열을 보내면, 처음에 렌더링할 때만 실행된다.
    useEffect(() => {
        console.log("useEffect");
    }, [])

    useEffect(() => {
        console.log('name1 : ', name);
        // 뒷정리 함수 : 렌더링 되기 직전에 업데이트 되기 전 값이 실행 됨
        return () => {
            console.log("name2 : ", name);
        }
    }, [name])

    return(
        <div>
            <div>
                <input value={name} onChange={changeName}></input>
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name}</h3>
            <h3>횟수 : {cnt}</h3>
        </div>
    )
}

export default Hook;