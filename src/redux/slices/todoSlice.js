const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  todos: []
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload
      };
      state.todos.push(data);
      localStorage.setItem("todos", JSON.stringify(current(state.todos)));
    }
  }
});
export const { addTodos } = TodoSlice.actions;
export default TodoSlice.reducer;
