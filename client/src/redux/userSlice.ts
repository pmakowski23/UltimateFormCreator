import { createSlice } from '@reduxjs/toolkit';

type useStateType = {
  userName: string | null;
  userEmail: string | null;
};

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    userEmail: null,
  },
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogout: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogout } = counterSlice.actions;

export const selectUserName = (state: { user: useStateType }) => state.user.userName;
export const selectUserEmail = (state: { user: useStateType }) => state.user.userEmail;

export default counterSlice.reducer;
