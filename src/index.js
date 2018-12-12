import { store } from "./store";

//store.subscribe(() => console.table(store.getState()));

store.dispatch({ type: "@@task/add", payload: "speak about actions" });
store.dispatch({ type: "@@task/add", payload: "speak about reducer" });
store.dispatch({ type: "@@task/add", payload: "speak about combine reducers" });
store.dispatch({ type: "@@task/toggleStatus", id: 3 });
