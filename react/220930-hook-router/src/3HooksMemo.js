import {useState, useMemo, useCallback, useRef} from 'react';

function getAverage(list) {
    console.log("getAverage");
    console.log(list);
    let sum = 0;
    if (list.length == 0) return sum;
    for (let i=0; i<list.length; i++) {
        sum = sum + list[i];
    }
    console.log(sum);
    return sum / list.length;
}

const Memo = () => {
    // state가 업데이트 되면 재렌더링 되면서 모든 함수들이 계속 선언된다.
    // input창에 입력할 때마다 getAverage가 계속 뜨는 것을 확인할 수 있음
    const [list, setList] = useState([]);
    const [num, setNum] = useState("");

    // useRef(초기값) : 보통 useRef(null)
    const input = useRef();

    // const onChange = e => {
    //     console.log("onChange");
    //     setNum(e.target.value);
    // }

    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0);
    // } 

    // useCallback: state값이 변경될 때 함수를 선언하게 하는 것
    // 계속 함수를 선언하기 때문에 그걸 막으려고
    // 빈 배열을 보냈기 때문에, 처음 렌더링 될 때만 함수가 선언된다.
    const onChange = useCallback(e => {
        console.log(e.target.value);
        setNum(e.target.value);
    }, []);

    // list와 num값이 변경될 때마다 함수가 다시 선언되어야 함.
    // 변수처럼 자동으로 업데이트 되는 것이 아니다.
    // state의 최신 상태를 가져와야 하기 때문에
    // 사용되는 state를 조건에 넣어주자!!
    const onInsert = useCallback(e => {
        console.log(num);
        setList([...list, parseInt(num)]);
        setNum("");
        input.current.focus();
    }, [num, list]);

    // list state가 바뀔때만 getAverage함수를 실행해라
    const avg = useMemo(() => getAverage(list), [list]);

    // const [avg, setAvg] = useState(0);
    // useEffect(() =>  {
    //     setAvg(getAverage(list));
    // }, [list]);

    return(
        <div>
            <input value={num} onChange={onChange} ref={input}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    )
}

export default Memo;