import { FC } from 'react';
import { AddFolder } from './addFolder';
import { useAppSelector } from '../../hooks/dispatch-selector.hook';
import { ButtonAll } from './buttonAll';
import { Folders } from './folders';

export const Aside: FC<AsideType> = ({setIndex}) => {

  const folderArray = useAppSelector((store) => store.folder.folderArray)
    
    return <aside className="aside">
      <div className="aside__block">
        <ButtonAll />
        <Folders setIndex={setIndex} folderArray={folderArray} />
      </div> 
      {
        folderArray[0] && 
        <AddFolder /> 
      }
  </aside>
}


type AsideType = {
  setIndex: (index: number | null) => void,
}