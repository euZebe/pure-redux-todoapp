import { initStore, addTask, toggleStatus } from "./store";

const store = initStore();

store.subscribe(() => {
  console.clear();
  console.table(store.getState().tasks);
});

store.subscribe(() => {
  console.log("current filter:", store.getState().filter);
});

store.dispatch(addTask("actions"));
store.dispatch(addTask("reducers"));
store.dispatch(addTask("combine reducers"));
store.dispatch(addTask("subscribers"));
store.dispatch(toggleStatus(2));
