import { useState } from "react";
import {getTodoById} from "../api/todo";
import "./css/TodoSelector.css";
import {Button, Input, Form} from "antd";

const TodoSelector = () => {
    const [id, setId] = useState("");
    const [todoItem, setTodoItem] = useState(null);

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleFetch = () => {
        if (id.trim()) {
            getTodoById(id).then((item) => {
                setTodoItem(item);
            }).catch((error) => {
                console.error("Error fetching todo item:", error);
                setTodoItem(null);
            });
        }
    };

    return (
        <div className="TodoSelector">
            <Form>
                <Form.Item
                    name="todoId"
                    rules={[
                        { required: true, message: "Please enter a Todo ID" },
                    ]}
                >
                    <Input
                        type="number"
                        value={id}
                        onChange={handleIdChange}
                        placeholder="Enter Todo ID"
                    />
                </Form.Item>
                <Button type="primary" onClick={handleFetch}>search</Button>
            </Form>
            {todoItem && (
                <div className="TodoItemDetails">
                    <p>ID: {todoItem.id}</p>
                    <p>Text: {todoItem.text}</p>
                    <p>Done: {todoItem.done ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
};

export default TodoSelector;