import React from 'react';

const Filter = (props) => {
    return (
        <div className="cases-list__filter">
            <div className="dropdown">
                <span>Show me</span> 
                <select>
                    <option>All work</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </div>
            <div className="dropdown">
                <span> in</span> <select>
                    <option>All industries</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;