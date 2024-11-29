import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useReducer, useState} from "react";
import {getTodoList} from "../api/todo";
import {TodoContext} from "../App";
import {Spin} from "antd";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: 'INIT', payload: todos});
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {loading ? (
                <Spin tip="Loading...">
                    <div style={{ height: '100vh' }}></div>
                </Spin>
            ) : (
                <>
                    <TodoGenerator />
                    <TodoGroup />
                </>
            )}
        </div>
    );
}

export default TodoList