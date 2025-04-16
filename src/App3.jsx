import { useState } from "react"
import LengthConverter from "./LengthConverter"
import TimeConverter from "./TimeConverter"

function App() {
    const [index , setIndex] = useState("0");
    const onSelect = (e) => {
        setIndex(e.target.value);
        
    }
    console.log(index);
    return (
        <>
            <select name="converter" id="converter" onChange={onSelect}>
                <option value="0" selected>Select unit converter</option>
                <option value="1">Time converter</option>
                <option value="2">Length converter</option>
            </select>

           {index == 1 ? <TimeConverter /> : null}
           {index == 2 ? <LengthConverter /> : null}

        </>
    )
}

export default App