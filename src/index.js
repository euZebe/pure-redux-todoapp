import { initStore, addTask, toggleStatus, filterBy } from "./store";

const store = initStore();

store.subscribe(() => {
  console.table(store.getState());
});

// TODO 7: add subscriber displaying only filtered tasks

// TODO 4
store.dispatch({ type: "TASK_ADD", title: "actions", id: 1 });
store.dispatch({ type: "TASK_ADD", title: "reducer", id: 2 });
store.dispatch({ type: "TASK_ADD", title: "combine reducers", id: 3 });
store.dispatch({ type: "TASK_ADD", title: "subscribers", id: 4 });
// TODO 3
store.dispatch({ type: "TASK_STATUS_TOGGLE", id: 3 });

// TODO 6
store.dispatch({ type: "FILTER_CHANGE", filter: "all" });
