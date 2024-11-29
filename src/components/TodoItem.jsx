import "./css/TodoItem.css";
import "./css/ButtonStyles.css";
import { useContext, useState } from "react";
import { TodoContext } from "../App";
import { deleteTodo, updateTodo } from "../api/todo";
import { Modal, Input, Button, Popconfirm } from "antd";

const TodoItem = ({ id, todo }) => {
    const { state, dispatch } = useContext(TodoContext);
    const todoItem = state.find((item) => item.id === id);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(todo);

    const handleTextClicked = () => {
        todoItem.done = !todoItem.done;
        updateTodo(id, todoItem).then(() => {
            dispatch({ type: "UPDATE", payload: { id, done: todoItem.done } });
        });
    };

    const remove = () => {
        deleteTodo(id).then(() => {
            dispatch({ type: "DELETE", payload: id });
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        const updatedTodoItem = { ...todoItem, text: editText };
        updateTodo(id, updatedTodoItem).then(() => {
            dispatch({ type: "UPDATE", payload: { id, text: editText } });
            setIsModalVisible(false);
        });
    };

    const handleEditTextChange = (e) => {
        setEditText(e.target.value);
    };

    return (
        <div className="TodoItemRow">
            <input
                className={!todoItem.done ? "input-active" : "input-inactive"}
                value={todo}
                onClick={handleTextClicked}
                readOnly
            />
            <Button className="custom-button" onClick={showModal}>
                EDIT
            </Button>
            <Modal
                title="Edit Text"
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleSave}
                okText="Save"
                cancelText="Cancel"
            >
                <Input value={editText} onChange={handleEditTextChange} />
            </Modal>
            <Button className="custom-button">
                <Popconfirm
                    title="Are you sure to delete this todo?"
                    onConfirm={remove}
                    okText="Yes"
                    cancelText="No"
                >
                    DELETE
                </Popconfirm>
            </Button>
        </div>
    );
};

export default TodoItem;