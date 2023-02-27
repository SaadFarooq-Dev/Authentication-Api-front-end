import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    userStats:null,
    isLogin: false
  },
  reducers:{
    LOGIN: (state,action) => {
      return {
        ...state,
        userStats: action.payload,
        isLogin: true
      }
    },
    SIGN_UP : (state,action) => {
      return {
        ...state,
        userStats: action.payload,
        isLogin: true
      }

    },
    LOGOUT: (state,action) => {
      return {
        ...state,
        userStats: null,
        isLogin: false
      }
    },
  }

})

export const { LOGIN, SIGN_UP, LOGOUT } = userSlice.actions
export default userSlice.reducer

