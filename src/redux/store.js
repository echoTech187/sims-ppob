import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import messageSlice from './slices/message'
import loadingSlice from './slices/loading'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    message: messageSlice,
    loading: loadingSlice
  }
})