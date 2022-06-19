import { ChangeEvent, FC, FormEvent } from "react"
import { useAppSelector } from "../../assets/hooks/dispatch-selector.hook"
import change from '../../assets/images/change.png'
import { getFolderArray } from "../../redux/selectors/getFolderArray"
import { ContentTitleForm } from "./contentTitleForm"


export const ContentTitle: FC<ContentTitleType> = ({index, activePopup,setActivePopup, handleSubmit, handleNameChange}) => {

    const folderArray = useAppSelector(getFolderArray)

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
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void 
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void 
}