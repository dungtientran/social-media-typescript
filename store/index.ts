import { configureStore } from '@reduxjs/toolkit';
import boxNotificationReducer from './reducers/boxJumpReducer';
import sideBarLeftReducer from './reducers/sideBarLeft';


export const store = configureStore({
  reducer: {
    boxNotification: boxNotificationReducer,
    sideBarLeft: sideBarLeftReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch