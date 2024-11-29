import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useReducer} from "react";
import {getTodoList} from "../api/todo";
import {TodoContext} from "../App";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext)
    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: 'INIT', payload: todos})
        })
    }, []);

  return (
      <div>
        <TodoGroup/>
        <TodoGenerator/>
      </div>

  );
}

export default TodoList