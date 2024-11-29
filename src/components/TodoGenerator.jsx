import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {addTodo} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleAdd = () => {
        if (text.trim() && text.length < 100) {
            const newTodoItem = {text: text, done: false };
            addTodo(newTodoItem).then((todo) => {
                dispatch({ type: "ADD", newTodoItem: todo });
                setText("");
            });
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