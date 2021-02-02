import React from 'react';

const MenuItem = (props) => {

    return (
        <li className={`menu__${props.type}__item ${props.selected ? 'selected' : ''}`}>
            <span>
                <img src={process.env.PUBLIC_URL + 'assets/img/triangle-right-icon-white.svg'} alt="triangle-icon" className='item-icon '/>
                {props.name}
                
            </span>
        </li>
    );
}

export default MenuItem;