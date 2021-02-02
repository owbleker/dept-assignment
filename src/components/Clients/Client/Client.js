import React from 'react';

const Client = (props) => {
    return (
        <div className="col-6 col-3--md">
            <div className={`client__logo-wrapper ${props.classes}`} >
                <img className="client__logo" src={process.env.PUBLIC_URL + 'assets/img/clients/' + props.logo} alt={props.name}/>
            </div>
        </div>
    );
}

export default Client;