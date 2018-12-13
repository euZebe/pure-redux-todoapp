import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";

let ID_GEN = 1;

export const addTask = () => ({
  // TODO
});

export const toggleStatus = () => ({
  // TODO
});

export const filterBy = filter => ({
  // TODO
});

const filterReducer = (state = "all", action) => null; // TODO

function taskReducer(state = [], action) {
  switch (action.type) {
    case "TASK_ADD":
      return null; // TODO

    case "TASK_STATUS_TOGGLE":
      return null; // TODO

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // TODO
});

export const getTasks = () => {}; // TODO
export const getActiveFilter = () => {}; // TODO
export const getFilteredTasks = () => {}; // TODO

export const initStore = () => {
  ID_GEN = 1;
  return createStore(taskReducer, devToolsEnhancer());
};
