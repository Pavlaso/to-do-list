import task, { addTask, deleteTask, markTask, stopWorking } from "../../../redux/reducers/task"


describe('tasks reduser', () => {
    it('', () => {
        const actionState = {
            text: '',
            folderIndex: 0
        }
        const nextState = {
            text: '',
            folderIndex: 0,
            task: false,
            isWorking: true
        }
        expect(task({taskArray: []}, addTask(actionState))).toEqual({taskArray: [nextState]})
    })
    it('', () => {
        const State = {
            text: '',
            folderIndex: 0,
            task: false,
            isWorking: true
        }
        expect(task({taskArray: [State]}, deleteTask(0))).toEqual({taskArray: []})
    })
    it('', () => {
        const preState = {
            text: '',
            folderIndex: 0,
            task: false,
            isWorking: true
        }
        const nextState = {
            text: '',
            folderIndex: 0,
            task: false,
            isWorking: false
        }
        expect(task({taskArray: [preState]}, stopWorking(0))).toEqual({taskArray: [nextState]})
    })
    it('', () => {
        const preState = {
            text: '',
            folderIndex: 0,
            task: false,
            isWorking: true
        }
        const nextState = {
            text: '',
            folderIndex: 0,
            task: true,
            isWorking: true
        }
        expect(task({taskArray: [preState]}, markTask(0))).toEqual({taskArray: [nextState]})
    })
})