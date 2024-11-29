import "./css/TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoItem = ({ id, todo }) => {
    const { state, dispatch } = useContext(TodoContext);
    const todoItem = state.find((item) => item.id === id);

    const handleTextClicked = () => {
        dispatch({ type: "UPDATE", payload: { id, done: !todoItem.done } });
    };

    const remove = () => {
        dispatch({ type: "DELETE", payload: id });
    };

    return (
        <div className="TodoItemRow">
            <input
                className={!todoItem.done ? "input-active" : "input-inactive"}
                value={todo}
                onClick={handleTextClicked}
                readOnly
            />
            <button style={{ marginLeft: "10px" }} onClick={remove}>
                X
            </button>
        </div>
    );
};

export default TodoItem;