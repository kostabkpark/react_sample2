import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);// 초기값을 0 으로 설정
  const [bool, setBool] = useState(false);// bool 을 선언, false 로 초기값 설정
  const [hello, setHello] = useState('a');// hello 의 초기값을 'a' 로 설정
  return (
      <div>
        <p>count 값 : {count}</p>
        <p>bool 값 : {bool ? "true": "false"}</p>
        <p>hello 값 : {hello}</p>
        <button onClick={() => {
          setCount((count) => count + 1); // 클릭할 때마다 a 씩 붙게 해보기
        }}>
          Click - count 증가
        </button>
        <button onClick={() => {
           setBool((bool)=> !bool)// 클릭할 때마다 bool 값을 toggle 시킴
        }}>Click - true/false</button>
         <button onClick={() => {
           setHello((hello)=> hello + 'a')// 클릭할 때마다 a를 추가
        }}>Click - a 추가</button>
        <p>내용 출력{console.log(`${count}+${bool}`)}</p>
      </div>
  )
}

export default App
