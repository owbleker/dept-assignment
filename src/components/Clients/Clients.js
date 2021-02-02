import React from 'react';
import Client from './Client/Client';

const Clients = (props) => {
    const clientsList = props.clients.map((c, index) => {
        if (index >= 6) {
            return (
                <Client
                    key={index}
                    name={c.name}
                    logo={c.logo}
                    classes='hidden-sm-down' />
            )
        }
        return (
            <Client
                key={index}
                name={c.name}
                logo={c.logo}
                classes='' />
        );
    })
    return (
        <div className="clients__container container">
            <div className="clients__wrapper wrapper">
                <div className="col-12">
                    <h2 className="clients__title">
                        Clients
                    </h2>
                    <p className="clients__text">
                        We value a great working relationship with our clients above all else. It's why they often come to our parties. It's also why we're able to challenge and inspire them to reach for the stars.
                    </p>
                </div>
                {clientsList}
            </div>
        </div>
    );
}

export default Clients;