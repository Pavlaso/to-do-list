import { FC } from 'react'
import { useAppSelector } from '../../assets/hooks/dispatch-selector.hook'
import { taskObjectType } from '../../redux/reducers/task'
import { getTaskArray } from '../../redux/selectors/getTaskArray'

import { NewTask } from "./newTask"
import { TaskContent } from './taskContent'

export const Tasks: FC<TasksType> = ({index, setId}) => {

    const taskArray = useAppSelector(getTaskArray)

    return <div className="content__tasks">
        {
            taskArray.map((item: taskObjectType, num: number) => (
                <div key={item.text}>
                    {
                        item.folderIndex === index && 
                        <TaskContent 
                            setId={setId} 
                            taskArray={taskArray} 
                            item={item} 
                            num={num}
                        />
                    }
                </div>
                )
            )
        }
        <NewTask index={index}/> 
    </div>
}

type TasksType = {
    index: number
    setId: (id: number) => void
}