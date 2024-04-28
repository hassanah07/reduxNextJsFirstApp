import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : []
};

const NewSlice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //   console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload
      };
      state.users.push(data);
      localStorage.setItem("users", JSON.stringify(current(state.users)));
    },
    removeUser: (state, action) => {
      const data = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      state.users = data;
      
    }
  }
});
export const { addUser, removeUser } = NewSlice.actions;
export default NewSlice.reducer;
