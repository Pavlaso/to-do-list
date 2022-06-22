import folder, { addFolder, changeNameFolder, deleteFolder, setActiveFolder } from "../../../redux/reducers/folder"

describe('folder reducer', () => {
    it('addFolder', () => {
        const firstFolder = {color: '', name: "", active: false}
        const seconFolder = {...firstFolder}
        expect(folder({ folderArray: [] }, addFolder(firstFolder))).toEqual({folderArray: [seconFolder]})
    })
    it('deleteFolder', () => {
        const firstFolder = {color: '', name: "", active: false}
        expect(folder({ folderArray: [firstFolder] }, deleteFolder(0))).toEqual({folderArray: []})
    })
    it('changeNameFolder', () => {
        const firstFolder = {color: '', name: "", active: false}
        const seconFolder = {color: '', name: "name", active: false}
        expect(folder({ folderArray: [firstFolder] }, changeNameFolder({name: 'name', index: 0}))).toEqual({folderArray: [seconFolder]})
    })
    it('setActiveFolder', () => {
        const firstFolder = {color: '', name: "", active: false}
        const seconFolder = {color: '', name: "", active: true}
        expect(folder({ folderArray: [firstFolder] }, setActiveFolder(0))).toEqual({folderArray: [seconFolder]})
    })
})