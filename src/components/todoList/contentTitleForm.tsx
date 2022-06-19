import { ChangeEvent, FC, FormEvent } from "react"
import { folderObjectType } from "../../redux/reducers/folder"

export const ContentTitleForm: FC<ContentTitleFormType> = ({index, handleSubmit, folderArray, handleNameChange}) => {
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={folderArray[index].name} onChange={handleNameChange} className="content__title-input"/>
        <button type="submit">✔</button>
    </form>
    )
}
type ContentTitleFormType = {
    index: number
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void 
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void 
    folderArray: folderObjectType[]
}