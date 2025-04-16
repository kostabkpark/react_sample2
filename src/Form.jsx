import { useState } from "react";
function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const inputName = (e)=>{
        setName(e.target.value);
    };
    const inputAge = (e)=>{
        setAge(e.target.value);
    };
    return (
        <>
            <h2>Form</h2>
            <input type="text" name="name" placeholder="이름을 입력하세요"
              onChange={inputName} value={name}/>
            <input type="text" name="age" placeholder="나이를 입력하세요"
              onChange={inputAge} value={age}/>  
        </>
    );
}

export default Form