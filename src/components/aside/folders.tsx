import { FC, Fragment } from "react";
import { folderObjectType } from "../../redux/reducers/folder";
import { AddFolder } from './addFolder';
import { Folder } from "./folder";

export const Folders: FC<FoldersType> = ({setIndex, folderArray}) => {
   
    return <Fragment>
       {
        folderArray[0] 
        ? folderArray.map((item: folderObjectType, index) => (
          <Folder 
            setIndex={setIndex} 
            folderArray={folderArray} 
            index={index} 
            item={item} 
          />
        )
        )
        : <AddFolder />
      }
    </Fragment> 
}
type FoldersType = {
    setIndex: (index: number | null) => void
    folderArray: folderObjectType[]
}