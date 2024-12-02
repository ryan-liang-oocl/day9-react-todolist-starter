import {useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import "./css/TodoGroup.css"
import {Layout, Pagination} from "antd";
import {Content} from "antd/es/layout/layout";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    const paginatedTodos = state.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <Layout>
            <Content className="contains">
                {state.length === 0 ? (
                    <span>Add the things need to do today...</span>
                ) : (
                    <>
                        {paginatedTodos.map((item, index) => (
                            <TodoItem key={item.id + index} todoItem={item} id={item.id} />
                        ))}
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={state.length}
                            onChange={handlePageChange}
                        />
                    </>
                )}
            </Content>
        </Layout>
    );
};

export default TodoGroup;