import menu from '../../images/menu.png'

export const ButtonAll = () => {
    return (
        <div className="aside__all">
            <img src={menu} alt="boxes" className="aside__all-img" />
            <div className="aside__all-text">Все задачи</div>
        </div>
    )
}