import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';;
import type { RootState } from '../index';

interface boxJumpState {
  isOpenBoxSearch: boolean,
  isOpenBoxNotification: boolean,
  isOpenBoxMessenger: boolean,
  isOpenBoxPenddingFriend: boolean
}

const initialState: boxJumpState = {
  isOpenBoxSearch: false,
  isOpenBoxNotification: false,
  isOpenBoxMessenger: false,
  isOpenBoxPenddingFriend: false
}

export const boxJumpSlice = createSlice({
  name: 'boxJumpSlice',
  initialState,
  reducers: {
    openBoxSearch: (state, action) => {
      state.isOpenBoxSearch = action.payload
    },
    openBoxNotification: (state, action) => {
      state.isOpenBoxSearch = action.payload
    },
    openBoxMessenge: (state, action) => {
      state.isOpenBoxSearch = action.payload
    },
    openBoxPenddingFriend: (state, action) => {
      state.isOpenBoxSearch = action.payload
    },

  },
})

export const { openBoxSearch, openBoxNotification, openBoxMessenge, openBoxPenddingFriend } = boxJumpSlice.actions

// export const boxJump = (state: RootState) => state.boxJumpSlice.isOpenBoxSearch

export default boxJumpSlice.reducer