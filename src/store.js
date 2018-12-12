import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

let ID_GEN = 1;

function todoReducer(state = [], action) {
  switch (action.type) {
    case "@@task/add":
      return [...state, { id: ID_GEN++, title: action.payload, done: false }];
    case "@@task/toggleStatus":
      return state.map(task =>
        action.id === task.id ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
}

export const store = createStore(todoReducer, devToolsEnhancer());
