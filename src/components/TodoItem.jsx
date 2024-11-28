import "./css/TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const { state, dispatch } = useContext(TodoContext);
    // const [available,setAvailable] = useState(true);
    const todoItem = state.filter((item) => item.id === props.id)
    const handleTextClicked = () => {
        dispatch({type:"UPDATE", payload: {id : props.id, done:!todoItem[0].done}});
    }

    const remove = () => {
        dispatch({type:"DELETE",payload: props.id});
    }

    return <div className={"TodoItemRow"}>
        <input className={!todoItem[0].done ? "input-active" : "input-inactive"} value={props.todo} onClick={handleTextClicked}/>
        <button style={{marginLeft: "10px"}} onClick={remove}>X</button>
    </div>
}

export default TodoItem;