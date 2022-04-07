import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStateType = {
    folderArray: []
}

export const folder = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        addFolder: (state, action: PayloadAction<folderObjectType>) => {
            state.folderArray.push(action.payload)
        },
        deleteFolder: (state, action: PayloadAction<number>) => {
            state.folderArray.splice(action.payload, 1)
        },
        changeNameFolder: (state, action: PayloadAction<changeNameFolderType>) => {
            state.folderArray[action.payload.index].name = action.payload.name
        },
        setActiveFolder: (state, action: PayloadAction<number>) => {
            state.folderArray.map((item: folderObjectType) => item.active = false)
            state.folderArray[action.payload].active = true
        }
    }
})

export const { addFolder, deleteFolder, changeNameFolder, setActiveFolder } = folder.actions

export default folder.reducer

export type folderObjectType = {
    name: string ,
    color: string,
    active: boolean,
} 

export type changeNameFolderType = {
    index: number,
    name: string
}

export type initialStateType = { folderArray: Array<folderObjectType> }


