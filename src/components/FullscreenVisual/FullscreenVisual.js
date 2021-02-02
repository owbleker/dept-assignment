import React from 'react';
import background from '../../assets/img/main-visual.png';
import Button from './Button/Button.js';

const FullscreenVisual = (props) => {
    return (
        <>
            <section 
                className="fullscreen-visual wrapper full-width" 
                style={{ backgroundImage: `url(${background})` }}>
                    
                <div className="fullscreen-visual__container container">
                    <h1 className="fullscreen-visual__title">
                        { props.titleText }
                    </h1>
                    <div className="fullscreen-visual__button-container hidden-sm-down">
                        <Button text='view case' />
                    </div>
                </div>
            </section>
            <div className="col-12 fullscreen-visual__button--mobile hidden-md-up">
                <Button text='view case' />
            </div>
        </>
        
    );
}

export default FullscreenVisual;