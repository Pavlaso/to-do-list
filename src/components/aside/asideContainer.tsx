import { FC } from "react"
import { Aside } from "./aside"

export const AsideContainer: FC<AsideContainerType> = ({setIndex}) => {
    return <div className="menu-madia__content">
        <div className="menu-madia__aside">
            <Aside setIndex={setIndex} />
        </div>
    </div>
}

type AsideContainerType = {
    setIndex: (index: number | null) => void
}