import menu_media from '../../assets/images/menu-media.png'

import cn from "classnames"

import { useAppDispatch } from '../../assets/hooks/dispatch-selector.hook'
import { changeNameFolder } from '../../redux/reducers/folder'
import { stopWorking  } from '../../redux/reducers/task'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { AsideContainer } from '../aside/asideContainer'
import { ContentTitle } from './contentTitle'
import { Tasks } from './tasks'

export const Content: FC<ContentType> = ({ index, setIndex }) => {
    const dispatch = useAppDispatch()

    const [activePopup, setActivePopup] = useState(false)
    const [inputState, setInputState] = useState('')
    const [activeAside, setActiveAside] = useState(false)
    const [id, setId] = useState<number | null>(null)

    const contentStyle = cn('content', {['menu-madia__content']: activeAside})

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setInputState( e.target.value ) 

    const handleSubmit = (e: FormEvent<HTMLFormElement>)  =>  {
        dispatch(changeNameFolder({index, name: inputState})) 
        e.preventDefault();
        setActivePopup(false)
    }

    useEffect(() =>  {
        if(id !== null) {
            setTimeout(() => {
                dispatch(stopWorking(id))
            }, 5000)
        }   
    }, [id])

    return <div className={contentStyle}>
        
        <img className="menu-madia" src={menu_media} alt="menu media" onClick={() => setActiveAside(pre => !pre)}/>

        {
            activeAside && <AsideContainer setIndex={setIndex} />
        }

        { 
            (index === null)  
            ? <div className='content__empty'> Задачи отсутствуют </div>
            : <div>
                <ContentTitle 
                    index={index} 
                    activePopup={activePopup} 
                    setActivePopup={setActivePopup} 
                    handleSubmit={handleSubmit} 
                    handleNameChange={handleNameChange} 
                />
                <Tasks 
                    index={index} 
                    setId={setId} 
                />
            </div>
        }

    </div>
}

type ContentType = {
    index: number
    setIndex: (index: number | null) => void
}