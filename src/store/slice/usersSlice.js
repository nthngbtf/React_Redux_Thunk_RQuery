import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fechtUsers";
import { addUser } from "../thunk/addUser";
import { removeUser } from "../thunk/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    homeLoading: true,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
      //update state object however appropriate
      //to show the user what we are loading data
      state.homeLoading = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //action.payload is the data that comes from fetchusers
      //since asyncthunk automatically create actions
      //then set action.payload
      state.homeLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.homeLoading = false;
      state.isLoading = false;
      //action.error is object generated by asyncthunk and it's payload
      //it's a type
      state.error = action.error;
    });

    // THUNK FOR ADDING USER

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // THUNK FOR REMOVE USER

    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
