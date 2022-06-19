import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  folder  from './reducers/folder'
import  task  from './reducers/task'

const rootReducer = combineReducers({
    folder, 
    task
})
export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
} 

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch