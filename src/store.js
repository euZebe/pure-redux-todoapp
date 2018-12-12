import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";

let ID_GEN = 1;

export const addTask = () => ({
  // TODO 4
});

export const toggleStatus = () => ({
  // TODO 3
});

export const filterBy = filter => ({
  // TODO 6
});

const filterReducer = (state = "all", action) => {
  // TODO 5
};

function tasksReducer(state = [], action) {
  switch (action.type) {
    case "TASK_ADD":
      return state; // TODO 1

    case "TASK_STATUS_TOGGLE":
      return state; // TODO 2

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // TODO 5
});
export const initStore = () => {
  ID_GEN = 1;
  return createStore(tasksReducer, devToolsEnhancer());
};
