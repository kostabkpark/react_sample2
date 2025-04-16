//import { useState } from 'react'
//import './App.css'
import Hello, {Name} from "./Hello";

function App() {
  console.log(Name);
  const value="홍길동";
  const style = {
    backgroundColor : 'yellow'
  }
  return (
    <>
      <h1 style={style}> hello, {value} </h1>
      <p> 안녕하세요 </p>
      <Hello/>
      <Hello/>
      <Hello/>
    </>
  )
}

export default App;

