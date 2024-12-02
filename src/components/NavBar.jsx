import { Link } from "react-router-dom";
import "./css/NavBar.css";

export const NavBar = () => {
    return (
        <nav>
            <Link to={"/home"}>HOME</Link> |
            <Link to={"/todo-list"}>TODO LIST</Link> |
            <Link to={"/done-list"}>DONE LIST</Link> |
            <Link to={"/search"}>SEARCH</Link>
        </nav>
    );
};