import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Link to={"/"}>HOME</Link> |
            <Link to={"/todo-list"}>TODO LIST</Link> |
            <Link to={"/done-list"}>DONE LIST</Link>
        </nav>
    );
}