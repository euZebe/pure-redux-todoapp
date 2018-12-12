import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";

let ID_GEN = 1;

export const addTask = title => ({
  type: "TASK_ADD",
  title,
  id: ID_GEN++
});

export const toggleStatus = id => ({
  type: "TASK_STATUS_TOGGLE",
  id
});

const filterReducer = (state = null, action) =>
  action.type === "FILTER_CHANGE" ? action.filter : state;

function taskReducer(state = [], action) {
  switch (action.type) {
    case "TASK_ADD":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          done: false
        }
      ];

    case "TASK_STATUS_TOGGLE":
      return state.map(task =>
        action.id === task.id ? { ...task, done: !task.done } : task
      );

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer
});
export const initStore = () => {
  ID_GEN = 1;
  return createStore(rootReducer, devToolsEnhancer());
};
