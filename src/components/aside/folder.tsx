import cn from "classnames"

import cross from '../../assets/images/cross.svg'

import { useAppDispatch } from '../../assets/hooks/dispatch-selector.hook';
import { deleteFolder, folderObjectType, setActiveFolder } from '../../redux/reducers/folder';
import { FC } from "react";

export const Folder: FC<FolderType> = ({setIndex, folderArray, index, item}) => {
    const dispatch = useAppDispatch()

    const setActive = (index: number ) => dispatch(setActiveFolder(index))

    const deletItem = (index: number) => {
        dispatch(deleteFolder(index))
        if(index) {
          setIndex(0)
          setActive(0)
        }
        setIndex(null)
      }

    const style = (index: number) => cn('aside__item', {aside__outline: folderArray[index].active})
    return (
        <div className={style(index)} key={item.name + index}>
          <div className="aside__item-container"  onClick={() => { setIndex(index); setActive(index) }}>
            <div className={`${item.color}-bg aside__color`}/> 
            <div className="aside__name"> 
              {item.name} 
            </div> 
          </div>
          {folderArray[index].active &&  <img src={cross} alt="cross" className="aside__img" onClick={() => deletItem(index)}/> }
        </div>
        )
}

type FolderType = {
  setIndex: (index: number | null ) => void
  folderArray: folderObjectType[]
  index: number
  item: folderObjectType
}