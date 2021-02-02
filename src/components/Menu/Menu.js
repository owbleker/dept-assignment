import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {

    const navItemsList = props.navItems.map((item, index) => {
        return (
            <MenuItem 
                key={index}
                name={item}
                type='nav-list' />
        );
    })

    const localizationsList = props.localizations.map((item, index) => {
        const currentLocale = props.currentLocale;
        let selected = false
        if (currentLocale === item) {
            selected = true
        }
        return (
            <MenuItem 
                key={index}
                name={item}
                type='countries'
                selected={selected} />
        );
    })

    const socialsList = props.socials.map((item, index) => {
        return (
            <MenuItem 
                key={index}
                name={item}
                type='socials' />
        );
    })
    return (
        <div className={`menu ${props.menuShown ? 'menu--open' : ''}`}> 
            <div className="menu__wrapper wrapper container">
                <ul className="menu__countries">
                <li className="menu__countries__item">
                    <span>
                        Landen
                    </span>
                </li>
                    {localizationsList}
                </ul>
                <ul className="menu__socials">
                    {socialsList}
                </ul>
                <ul className="menu__nav-list">
                    {navItemsList}
                </ul>
            </div>
        </div>
    );
}

export default Menu;