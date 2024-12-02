import "./css/TodoItem.css";
import "./css/ButtonStyles.css";
import { useContext, useState } from "react";
import { TodoContext } from "../App";
import { deleteTodo, updateTodo } from "../api/todo";
import { Modal, Input, Button, Popconfirm } from "antd";

const TodoItem = ({ id, todoItem }) => {
    const { dispatch } = useContext(TodoContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(todoItem.text);

    const handleTextClicked = () => {
        todoItem.done = !todoItem.done;
        updateTodo(id, todoItem).then((item) => {
            dispatch({ type: "UPDATE", payload: item });
        });
    };

    const remove = () => {
        deleteTodo(id).then((item) => {
            dispatch({ type: "DELETE", payload: item.id });
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        if (!editText.trim()) return;
        if (editText === todoItem.text) {
            setIsModalVisible(false);
            return;
        }
        const updatedTodoItem = { ...todoItem, text: editText };
        updateTodo(id, updatedTodoItem).then((item) => {
            dispatch({ type: "UPDATE", payload: item });
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
                value={todoItem.text}
                onClick={handleTextClicked}
                readOnly
            />
            <Button className="custom-button" onClick={showModal}>
                EDIT
            </Button>
            <Modal
                title="Edit Text"
                open={isModalVisible}
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