import {addTodo} from "../api/todo";

export const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  INIT: "INIT",
};
export const todoReducer = (state, action) => {
  switch (action.type){
    case ActionTypes.ADD:
    {
      const todoItem = {
      id: action.newTodoItem.id,
      text: action.newTodoItem.text,
      done: action.newTodoItem.done
      };
      return [...state, todoItem];
    }
    case ActionTypes.DELETE:
      return [...state.filter((item) => item.id !== action.payload)];
    case ActionTypes.UPDATE:
      return [...state.map((item) => {
        return item.id !== action.payload.id ? item
            : {id: item.id, text: action.payload.text, done: action.payload.done
        }})];
    case  ActionTypes.INIT:
      return action.payload;
    default:
      return state;
  }
};