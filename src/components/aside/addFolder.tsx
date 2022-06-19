import { useState } from "react"
import { CreateFolderPopup } from "./createFolderPopup"


import plus2 from "../../assets/images/plus2.png"

export const AddFolder = () => {
    const [activePopup, setActivePopup] = useState(false)

    return <div className="aside__empty" >
          <div className="aside__empty-container">
            <img src={plus2} alt="plus" className="aside__empty-img" />
            <button className="aside__empty-btn" onClick={() => setActivePopup(true)}>Добавить папку</button>
          </div>
          {activePopup && <CreateFolderPopup setActivePopup={setActivePopup}/>}
    </div>
  }