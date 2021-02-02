import React from 'react';

const Case = (props) => {

    return (
        <div className={`case case--${ props.type }`}> 
            <div className="case__block">
                <div className="case__image-wrapper">
                    <img className="case__image" src={process.env.PUBLIC_URL + 'assets/img/' + props.image} alt="Case"/>
                </div>
                <div className="case__client">
                    {props.client}
                </div>
                <h3 className="case__title">
                    {props.title}
                </h3>
                <button className="case__button button" onClick={props.click}>
                    <span className="case__button__icon">
                        <img src={process.env.PUBLIC_URL + 'assets/img/triangle-right-icon.svg'} alt="triangle-icon"/>
                    </span>
                    <span className="case__button__text">
                        View case
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Case;