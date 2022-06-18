import { ChangeEvent, FC } from "react"
import { useAppSelector } from "../../hooks/dispatch-selector.hook"
import change from '../../images/change.png'
import { ContentTitleForm } from "./contentTitleForm"


export const ContentTitle: FC<ContentTitleType> = ({index, activePopup,setActivePopup, handleSubmit, handleNameChange}) => {

    const folderArray = useAppSelector((store) => store.folder.folderArray)

    const titleColor = `${folderArray[index].color} content__title`

    return <div className="content__title-container">
        {
            !activePopup 
            ? <h1 className={titleColor}> 
                {folderArray[index].name}
            </h1>
            : <ContentTitleForm  
                index={index} 
                handleSubmit={handleSubmit} 
                folderArray={folderArray} 
                handleNameChange={handleNameChange} 
            />
        }
        <img src={change} alt="change-btn" className="content__title-img" onClick={() => setActivePopup(true)}/>
    </div>
}

type ContentTitleType = {
    index: number
    activePopup: boolean
    setActivePopup: (val: boolean) => void 
    handleSubmit: (e: any) => void 
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void 
}