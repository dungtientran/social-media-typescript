import { createSlice } from '@reduxjs/toolkit';

interface sideBarLeftState {
    isOpenSideBar: boolean,
}

const initialState: sideBarLeftState = {
    isOpenSideBar: false,
}

export const sideBarLeftSlice = createSlice({
    name: 'sideBarLeftSlice',
    initialState,
    reducers: {
        openSideBar: (state, action) => {
            state.isOpenSideBar = action.payload
        },
    
    },
})

export const { openSideBar } = sideBarLeftSlice.actions

// export const sideBarLeft = (state: RootState) => state.sideBarLeftSlice.isOpenBoxSearch

export default sideBarLeftSlice.reducer