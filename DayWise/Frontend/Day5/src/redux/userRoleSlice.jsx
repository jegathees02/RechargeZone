import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null, // Initialize as null
};

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {
    setUserRoleReducer(state, action) {
      state.role = action.payload;
    },
    clearUserRoleReducer() {
      return initialState;
    },
  },
});

export const { setUserRoleReducer, clearUserRoleReducer } = userRoleSlice.actions;
export default userRoleSlice.reducer;
