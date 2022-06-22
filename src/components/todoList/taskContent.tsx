import classNames from 'classnames'
import { FC } from 'react'
import { useAppDispatch } from '../../assets/hooks/dispatch-selector.hook'

import cross from '../../assets/images/cross.svg'
import { deleteTask, markTask, taskObjectType } from '../../redux/reducers/task'



export const TaskContent: FC<TaskContentType> = ({setId, item, num, taskArray}) => {
    const dispatch = useAppDispatch()

    const deleteTaskFunc = (index: number ) => dispatch(deleteTask(index))

    const setActiveTask = (index: number) => {
        dispatch(markTask(index))
        setId(index)
    }

    const usualStyle = (num: number) => `content__task-text${taskArray[num].task ? '_active' : ''}`
    const checboxStyle = (num: number) => classNames(
        usualStyle(num), 
        { ['content__task-notworking-text']: !taskArray[num].isWorking }
    )

    return (
        <div className="content__task" >
            <div className="content__task-container">
                <input className="content__task-checkbox" type="checkbox" />
                <div className={checboxStyle(num)} onClick={() => setActiveTask(num) }> 
                    {item.text} 
                </div>
            </div>
            { 
                !taskArray[num].isWorking && 
                <img className='content__cross' src={cross} alt="cross" onClick={() => deleteTaskFunc(num)}/> 
            }
        </div>
    )
}

type TaskContentType = {
    setId: (id: number) => void
    taskArray: taskObjectType[]
    item: taskObjectType
    num: number

}