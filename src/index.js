import { initStore, addTask, toggleStatus, filterBy } from "./store";

const store = initStore();

store.subscribe(() => {
  console.clear();
  console.warn("all tasks");
  console.table(store.getState().tasks);
});

store.subscribe(() => {
  const filter = store.getState().filter;
  const filteredTasks = store
    .getState()
    .tasks.filter(
      task =>
        (task.done && filter === "done") ||
        (!task.done && filter === "undone") ||
        filter === "all"
    );
  console.warn("filtered tasks by status:", filter);
  console.table(filteredTasks);
});

store.dispatch(addTask("actions"));
store.dispatch(addTask("reducers"));
store.dispatch(addTask("combine reducers"));
store.dispatch(addTask("subscribers"));
store.dispatch(toggleStatus(2));
store.dispatch(filterBy("done"));
