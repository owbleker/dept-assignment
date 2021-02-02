import React from 'react';
import logo from '../../assets/img/DEPT-logo-black.svg';
import logoWhite from '../../assets/img/DEPT-logo-white.svg';

const Header = (props) => {
    return (
        <header className={`header full-width${props.isScrolled ? ' header--scroll' : ''}${props.menuShown ? ' header--open' : ''}`}>
            <div className='container'>
                <div className="header__container">
                    <object type="image/svg+xml" data={logoWhite} className="header__logo white-logo">DEPT logo</object>
                    <object type="image/svg+xml" data={logo} className="header__logo black-logo">DEPT logo</object>
                    <div className='header__menu' >
                        <div 
                            className={`header__menu__toggle ${props.menuShown ? 'header__menu__toggle--open' : 'header__menu__toggle--closed'}`}
                            onClick={props.toggleMenu}>
                            Menu
                            <span className="menu__icon">
                                <div></div>
                            </span>
                        </div>
                    </div>
                </div>
             </div>
        </header>
    );
}

export default Header;