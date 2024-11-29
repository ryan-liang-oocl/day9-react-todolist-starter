import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { todoReducer } from "./context/todoReducer";
import {Route, BrowserRouter, Routes, Navigate, Link} from "react-router-dom";
import {NotFound} from "./components/NotFound";
import {DoneList} from "./components/DoneList";
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/*"} element={<NotFound />} />
                        <Route path={"/"} element={<Navigate to={"/home"} />} />
                        <Route path={"/home"} element={<><NavBar /><Home /></>} />
                        <Route path={"/todo-list"} element={<><NavBar /><TodoList /></>} />
                        <Route path={"/done-list"} element={<><NavBar /><DoneList /></>} />
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </div>
    );
}

export default App;