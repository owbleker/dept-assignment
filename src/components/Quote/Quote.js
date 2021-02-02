import React from 'react';

const Quote = (props) => {
    return (
        <div className="col-12"> 
            <div className="quote-container">
                <div className="quote">
                    <h2 className="quote__text">
                        "{props.text}"
                    </h2>
                    <span className="quote_person">
                        {props.name} - {props.position}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Quote;