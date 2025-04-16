export const Name = "Hello";

export default function Hello() {
    const style={
        backgroundColor : "blue",
        color : "white"
    }
    const student = {
        name : "홍길동",
        age :20
    }
    return (
        <p style={style}>hello , {student.name}</p>
    );
}