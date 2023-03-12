import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';;
import type { RootState } from '../index';

interface UserState {
  user: null | string
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
 
  },
})

export const { loginUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default userSlice.reducer