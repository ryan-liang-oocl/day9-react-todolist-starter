import {useContext} from "react";
import {TodoContext} from "../App";

export const DoneList = () => {
    const {state} = useContext(TodoContext);

    const doneList = state.filter((item) => item.done);

    return (
        <div className="done-list">
            {doneList.length === 0 ? (
                <span>Nothing done yet...</span>
            ) : (
                doneList.map((item, index) => (
                    <span key={item.id + index}>{item.text}</span>
                ))
            )}
        </div>
    );
}