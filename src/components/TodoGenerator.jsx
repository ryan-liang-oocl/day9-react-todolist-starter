import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = () => {
        if (text.trim() && text.length < 100) {
            dispatch({ type: "ADD", payload: text });
            setText("");
        }
    };

    return (
        <div>
            <input value={text} onChange={handleTextChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TodoGenerator;