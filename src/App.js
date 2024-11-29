import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { todoReducer } from "./context/todoReducer";
import {Route, BrowserRouter, Routes, Navigate, Link} from "react-router-dom";
import {NotFound} from "./components/NotFound";
import {DoneList} from "./components/DoneList";
import {NavBar} from "./components/NavBar";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path={"/*"} element={<NotFound />} />
                        <Route path={"/"} element={<Navigate to={"/todo-list"} />} />
                        <Route path={"/todo-list"} element={<TodoList />} />
                        <Route path={"/done-list"} element={<DoneList />} />
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </div>
    );
}

export default App;