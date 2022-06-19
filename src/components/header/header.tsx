import logo from '../../assets/images/logo.png'

export const Header = () => {
    return <div className="header">
    <div className="container">
      <div className="header__container">
        <div className="app-container">
          <img data-testid="header-img" className="header__logo" src={logo} alt="logo" />
          <h2 className="header__title">To-Do List</h2>
        </div>  
        {/*
          <input type="text" className="header__search" placeholder='Search task' />
          <button className="header__btn">Log In</button>
        */}
      </div>
    </div>
  </div>
}