import { FC, useState } from "react"
import cn from "classnames"
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks/dispatch-selector.hook";
import { addFolder } from "../redux/reducers/folder";

type CreateFolderPopupType = {
    setActivePopup: (value: boolean) => void
}

export const CreateFolderPopup: FC<CreateFolderPopupType>  = ({setActivePopup}) => {
    const dispatch = useAppDispatch()
    const [activeItem, setActiceItem] = useState('gray') 
    const colorsArr: Array<string> = ['gray', 'red', 'orange', 'pink', 'light-grin', 'green', 'blue', 'purple']

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => dispatch(addFolder({...data, color: activeItem}));
    
    return <form className="folder-popup" onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register("name")}
            className="folder-popup__input" 
            placeholder="Название папки" 
            />
            <div className="folder-popup__colors">
                {
                    colorsArr.map((item:string, index:number) => <div 
                    className={cn(`folder-popup__${item}`, { [`folder-popup__${item}_active`]: activeItem === item})}
                    onClick={() => setActiceItem(item)} key={item + index}>
                    </div>)
                }
            </div>
            <button  onClick={() => setTimeout(() => {
                setActivePopup(false)
            }, 0) } className="folder-popup__btn">Добавть</button>
    </form>
}