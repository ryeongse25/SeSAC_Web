import React from 'react';
import ReactDOM from 'react-dom/client';
// import Book from './propsPractice/Book';
import Console from './propsPractice/Console';

function message() {
  console.log("콘솔 띄우기 성공!");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 자식에게 props 전달 */}
    {/* 숫자는 중괄호로 감싸기 */}
    {/* <ClassComponent name={1} location="munllae">props.children에 출력되는 문구</ClassComponent> */}
    {/* <App /> */}
    {/* < Book title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기계발서" /> */}
    < Console valid={message} text="www"/>
  </React.StrictMode>
);

// 만든 리액트 어플리케이션의 성능을 측정해준다.
// reportWebVitals();