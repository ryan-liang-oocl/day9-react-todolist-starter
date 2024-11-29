export const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE"
};
export const todoReducer = (state, action) => {
  switch (action.type){
    case ActionTypes.ADD:
      return [...state, {id: Date.now(), text: action.payload, done: false}];
    case ActionTypes.DELETE:
      return [...state.filter((item) => item.id !== action.payload)];
    case ActionTypes.UPDATE:
      return [...state.map((item) => {return item.id !== action.payload.id ? item : {id: item.id, text: item.text, done: action.payload.done}})];
    default:
      return state;
  }
};