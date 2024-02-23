import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name : '', // Initialize as null
};

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {
    setName (state, action){
      state.name = action.payload;
    },  
    setUserRoleReducer(state, action) {
      state.role = action.payload;
    },
    clearUserRoleReducer() {
      return initialState;
    },
  },
});

export const {setName} = userRoleSlice.actions;
export const { setUserRoleReducer, clearUserRoleReducer } = userRoleSlice.actions;
export default userRoleSlice.reducer;
