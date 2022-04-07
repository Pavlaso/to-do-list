import { configureStore } from '@reduxjs/toolkit'
import  folder  from './reducers/folder'
import  task  from './reducers/task'

export const store = configureStore({
    reducer: { folder, task } 
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch