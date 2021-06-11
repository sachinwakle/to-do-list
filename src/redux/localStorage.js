const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("toDoList", serializedState);
  } catch (error) {
    // ignore write erros
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("toDoList");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export { saveState, loadState };
