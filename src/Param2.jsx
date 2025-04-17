import { useSearchParams } from "react-router-dom"

function Param2() {
    const [params] = useSearchParams();
    const id = params.get("id")
    const name = params.get("name")
    console.log(params.get("id"));
    console.log(params.get("name"));
    return (
        <>
            <p>id : {id}</p>
            <p>name : {name}</p>
        </>
    )
}

export default Param2