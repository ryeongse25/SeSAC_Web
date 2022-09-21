// import './App.css';
// import  './worm.css';

function App() {

    let name = "뽀또";
    let animal = "강아지";

    let a = 10;
    let b = 5;

    let title = "Hello World";

    const style = {
        backgroundColor: "yellow",
        color: "blue"
    };

    return (
        <div className = "test rainbow">
            {/* 1번 */}
            {/* 이것은 div 입니다.
            <h3>이것은 div안에 있는 h3태그 입니다</h3> */}

            {/* 2번 */}
            {/* <h2>
                제 반려 동물의 이름은 <span>{name}</span>입니다.<br></br>
                <span>{name}</span>는 <span>{animal}</span>입니다.
            </h2> */}

            {/* 3번 */}
            {/* {( 3 + 5 == 8 ) ? <h2>정답입니다!</h2> : <h2>오답입니다!</h2>} */}

            {/* 4번 */}
            {/* { (a  > b) && <h2>a가 b보다 큽니다</h2> } */}

            {/* 5번 */}
            {/* <div>{title}</div>
            <div>
                아이디 : <input className="input" /> <br />
                비밀번호 : <input className="input" />
            </div> */}

            {/* 6번 */}
            {/* <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="navy"></div>
            <div className="purple"></div> */}

            {/* 애벌레의 얼굴 부분 */}
            <div id="face">
                <div id="white_eye"></div>
                <div id="black_eye"></div>
            </div>
            {/* 몸 부분 */}
            <div id="body1">
                <div id="body2"></div>
                <div id="body3"></div>
                <div id="body4"></div>
            </div>
        </div>
    );
}


export default App;
