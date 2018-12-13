import {
  addTask,
  initStore,
  getTasks,
  toggleStatus,
  filterBy,
  getActiveFilter,
  getFilteredTasks
} from "./store";

describe("store", () => {
  let store;
  beforeEach(() => {
    store = initStore();
  });

  describe(".addTask", () => {
    it("should return a task", () => {
      const newTask = addTask("do some stuff");
      expect(newTask).toMatchObject({
        type: "TASK_ADD",
        title: "do some stuff"
      });
      expect(newTask.id).not.toBeNull();
    });
  });

  describe("taskReducer", () => {
    it("should add generated tasks to state", () => {
      store.dispatch(addTask("smile !"));
      store.dispatch(addTask("think"));
      const state = store.getState();
      expect(getTasks(state)).toEqual([
        { title: "smile !", id: 1, done: false },
        { title: "think", id: 2, done: false }
      ]);
    });

    it("should enable to toggle action", () => {
      store.dispatch(addTask("smile !"));
      const anotherTask = addTask("think");
      store.dispatch(anotherTask);
      store.dispatch(toggleStatus(anotherTask.id));
      expect(getTasks(store.getState())).toMatchObject([
        { title: "smile !", done: false },
        { title: "think", done: true }
      ]);
    });
  });

  describe("filterReducer", () => {
    it("should save last filter", () => {
      store.dispatch(filterBy("done"));
      expect(getActiveFilter(store.getState())).toEqual("done");
    });
  });

  describe("getFilteredTasks", () => {
    [
      { filter: "all", filteredTaskNames: ["smile !", "think", "ride a bike"] },
      { filter: "done", filteredTaskNames: ["ride a bike"] },
      { filter: "undone", filteredTaskNames: ["smile !", "think"] }
    ].forEach(({ filter, filteredTaskNames }) => {
      it(`should display tasks matching ${filter}`, () => {
        store.dispatch(addTask("smile !"));
        store.dispatch(addTask("think"));
        const trucTask = addTask("ride a bike");
        store.dispatch(trucTask);
        store.dispatch(toggleStatus(trucTask.id));
        store.dispatch(filterBy(filter));

        expect(
          getFilteredTasks(store.getState()).map(task => task.title)
        ).toMatchObject(filteredTaskNames);
      });
    });
  });
});
