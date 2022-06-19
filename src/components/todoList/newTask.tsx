import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../assets/hooks/dispatch-selector.hook";
import { addTask } from "../../redux/reducers/task";
import plus from '../../assets/images/plus.png'



export const NewTask: FC<newTaskType> = ({index}) => {
  const dispatch = useAppDispatch()
  const [openForm, setOpenForm] = useState(false)
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: dataType) => {
    dispatch(addTask({text: data.text, folderIndex: index}))
    
    setOpenForm(false)
  }

  return <div className="content__task-create">
    {!openForm 
    ? <div className="content__task-create">
        <img src={plus} alt="plus" className="content__task-create-img" />
        <button className="content__task-btn" onClick={() => setOpenForm(true)}>Новая задача</button>
      </div>
    : <form className="content__form" onSubmit={handleSubmit(onSubmit)}>
        <input className="content__crate-input" type="text" {...register("text")} placeholder='Текст задачи'/>
        <button className="content__crate-btn" type='submit'>Добавит задачу</button>
        <button className="content__crate-cancel" onClick={() => setOpenForm(false)}>Отмена</button>
      </form>
    }
  </div>
}

type dataType = {
  text: string
  folderIndex: number
}
export type newTaskType = {
  index: number
}