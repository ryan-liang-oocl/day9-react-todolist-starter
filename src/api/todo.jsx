import axios from "axios";

const instance = axios.create({
    baseURL: 'https://67495c7d868020296630aac4.mockapi.io/tw',
    // timeout: 5000,
});

export const getTodoList = async () => {
    const response = await instance.get('/todos');
    return response.data;
};

export const addTodo = async (todoItem) => {
    const response = await instance.post('/todos', todoItem);
    return response.data;
}

export const updateTodo = async (id, todoItem) => {
    const response = await instance.put(`/todos/${id}`, todoItem);
    return response.data;
}

export const deleteTodo = async (id) => {
    const response = await instance.delete(`/todos/${id}`);
    return response.data;
};