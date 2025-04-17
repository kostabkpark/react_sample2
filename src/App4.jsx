import { useState } from "react"
import Form2 from "./Form2"
import Btn from "./Btn"
import P from "./P"
import SaveBtn from "./SaveBtn"
import ConfirmBtn from "./ConfirmBtn"

function App() {
    const [value, setValue] = useState(0);
    const student = {
        name : "홍길동",
        age : 20
    }
    const changeValue = () => {
        setValue(value +1);
    }
    console.log(value);
    return (
        <>
            <Form2 />
            <P person={student} person2={{name:"김연아", age:30}} />
            <Btn fontSize={20} text="Confirm" color="white" backgroundColor="yellow" onClick={changeValue}/>
            <Btn fontSize={16} text="Save" color="yellow" backgroundColor="black" onClick={changeValue}/>
        </>
    )
};

export default App