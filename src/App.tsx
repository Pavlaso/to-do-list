import './scss/style.scss'

import logo from './images/logo.png'
import plus2 from './images/plus2.png'
import change from './images/change.png'
import cross from './images/cross.svg'
import menu_media from './images/menu-media.png'

import cn from "classnames"
import { FC, useEffect, useState } from 'react'
import { CreateFolderPopup } from './components/createFolderPopup'
import { useAppDispatch, useAppSelector } from './hooks/dispatch-selector.hook'
import { changeNameFolder } from './redux/reducers/folder'
import { taskObjectType, markTask, stopWorking, deleteTask  } from './redux/reducers/task'
import { Aside } from './components/aside'
import { NewTask } from './components/newTask'


export const App = () => {
  const dispatch = useAppDispatch()
  const folderArray = useAppSelector((store) => store.folder.folderArray)
  const taskArray = useAppSelector((store) => store.task.taskArray)
  const [index, setIndex] = useState<any>(null)
  const [activePopup, setActivePopup] = useState(false)
  const [inputState, setInputState] = useState('')
  const [activeAside, setActiveAside] = useState(false)
  const [id, setId] = useState<any>(null)
  const handleNameChange = (e: any) => setInputState( e.target.value ) 
  const deleteTaskFunc =(index:number ) => dispatch(deleteTask(index))
  const setActiveTask = (index: number) => {
    dispatch(markTask(index))
    setId(index)
  }

  

  const handleSubmit = (e: any)  =>  {
    dispatch(changeNameFolder({index, name: inputState})) 
    e.preventDefault();
    setActivePopup(false)
  }
  useEffect(() =>  {
    if(id !== null) setTimeout(() => {
      dispatch(stopWorking(id))
    }, 5000)
  }, [id])
  
  return <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="header__container">
            <div className="app-container">
              <img className="header__logo" src={logo} alt="logo" />
              <h2 className="header__title">To-Do List</h2>
            </div>  
          {/*
            <input type="text" className="header__search" placeholder='Search task' />
            <button className="header__btn">Log In</button>
          */}
          </div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="body__container">

              <Aside setIndex={setIndex} />

            <div className={cn('content', {['menu-madia__content']: activeAside})}>
              <img src={menu_media} alt="menu media" className="menu-madia" onClick={() => setActiveAside(!activeAside)}/>
              {activeAside &&
                <div className="menu-madia__content">
                  <div className="menu-madia__aside"><Aside setIndex={setIndex} /></div>
                </div>
              }
              { (index === null)  ? <div className='content__empty'> Задачи отсутствуют </div>
              : <div>
                  <div className="content__title-container">
                    {!activePopup 
                      ? <h1 className={`${folderArray[index].color} content__title`}>{folderArray[index].name}</h1>
                      : <form onSubmit={handleSubmit}>
                          <input type="text" defaultValue={folderArray[index].name} onChange={handleNameChange} className="content__title-input"/>
                          <button type="submit">✔</button>
                        </form>
                     }
                    <img src={change} alt="change-btn" className="content__title-img" onClick={() => setActivePopup(true)}/>
                  </div>
                  <div className="content__tasks">
                  {
                  taskArray.map((item: taskObjectType, num: number) => (<div key={num}>
                    {item.folderIndex === index &&
                      <div className="content__task" >
                        <div className="content__task-container">
                          <input className="content__task-checkbox" type="checkbox" />

                          <div className={cn(`content__task-text${taskArray[num].task ? '_active' : ''}`, 
                          {['content__task-notworking-text']: !taskArray[num].isWorking})} onClick={() => setActiveTask(num) }> {item.text} </div>

                        </div>
                        { !taskArray[num].isWorking && <img className='content__cross' src={cross} alt="cross" onClick={() => deleteTaskFunc(num)}/> }
                      </div>
                  }
                  </div>))}
                  { <NewTask index={index}/>}
                  </div>
                </div>
              }
            </div>

          </div>
        </div>
      </div>
  </div>
}

export const AddFolder: FC<any> = () => {
  const [activePopup, setActivePopup] = useState(false)
  return <div className="aside__empty" >
        <div className="aside__empty-container">
          <img src={plus2} alt="plus" className="aside__empty-img" />
          <button className="aside__empty-btn" onClick={() => setActivePopup(true)}>Добавить папку</button>
        </div>
        {activePopup && <CreateFolderPopup setActivePopup={setActivePopup}/>}
  </div>
}

