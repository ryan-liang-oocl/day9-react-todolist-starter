import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {
    const [text,setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleTestChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if(text !== null && text !== "" && text.length < 100)
            dispatch({type: "ADD",payload: text});
    }




    return (
        <div>
            <input  value={text} onChange={handleTestChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;