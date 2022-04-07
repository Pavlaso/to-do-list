import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: taskArrayType  = {
    taskArray: []
}

export const task = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, actoin: PayloadAction<addTaskType>) => {
            state.taskArray.push({
                text: actoin.payload.text,
                folderIndex: actoin.payload.folderIndex,
                task: false,
                isWorking: true
            })
        },

        stopWorking: (state, ation: PayloadAction<number>) => {
            state.taskArray[ation.payload].isWorking = !state.taskArray[ation.payload].isWorking
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.taskArray.splice(action.payload, 1)
        },
        markTask: (state, action: PayloadAction<number>) => {
            state.taskArray[action.payload].task = !state.taskArray[action.payload].task
        }
    }
})

export const { addTask, deleteTask, markTask, stopWorking } = task.actions

export default task.reducer

export type taskObjectType = {
    text: string
    task: boolean
    folderIndex: number
    isWorking: boolean
}

export type taskArrayType = { taskArray: Array<taskObjectType> }

export type addTaskType = {
    folderIndex: number
    text: string
}