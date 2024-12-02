import instance from "../interceptor/GlobalInterceptor";

export const getTodoList = async () => {
    const response = await instance.get('');
    return response.data;
};

export const getTodoById = async (id) => {
    const response = await instance.get(`/${id}`);
    return response.data;
};

export const addTodo = async (todoItem) => {
    const response = await instance.post('', todoItem);
    return response.data;
}

export const updateTodo = async (id, todoItem) => {
    const response = await instance.put(`/${id}`, todoItem);
    return response.data;
}

export const deleteTodo = async (id) => {
    const response = await instance.delete(`/${id}`);
    return response.data;
};