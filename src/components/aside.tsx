import { FC, useState } from 'react';
import { AddFolder } from '../App';
import { useAppDispatch, useAppSelector } from '../hooks/dispatch-selector.hook';
import { deleteFolder, folderObjectType, setActiveFolder } from '../redux/reducers/folder';
import cn from "classnames"
import menu from '../images/menu.png'
import cross from '../images/cross.svg'
import menu_media from '../images/menu-media.png'


type AsideType = {
    setIndex: (index: number | null) => void,
}
export const Aside: FC<any> = ({setIndex}) => {
    const dispatch = useAppDispatch()
    const folderArray = useAppSelector((store) => store.folder.folderArray)

    const setActive = (index: number ) => dispatch(setActiveFolder(index))
    const deletItem = (index: number) => {
        dispatch(deleteFolder(index))
        if(index) {
          setIndex(0)
          setActive(0)
        }
        setIndex(null)
      }
    return <aside className="aside">
    <div className="aside__block">
      <div className="aside__all">
        <img src={menu} alt="boxes" className="aside__all-img" />
        <div className="aside__all-text">Все задачи</div>
      </div>
    {
      folderArray[0] 
      ? folderArray.map((item: folderObjectType, index) => <div className={cn('aside__item', {aside__outline: folderArray[index].active})} key={item.name + index}>
        <div className="aside__item-container"  onClick={() => { setIndex(index); setActive(index) }}>
          <div className={`${item.color}-bg aside__color`}/> 
          <div className="aside__name">{ item.name }</div> 
        </div>
        {folderArray[index].active &&  <img src={cross} alt="cross" className="aside__img" onClick={() => deletItem(index)}/> }
        </div>)
      : <AddFolder />
    }
    </div>
          
          {folderArray[0] && <AddFolder /> }
  </aside>
}