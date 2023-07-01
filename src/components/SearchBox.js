import React from "react";

const SearchBox = () => {
    return (
        <div>
            <input 
                type="search" 
                placeholder="search robots"
                className="pa3 ba b--green bg-lightest-blue br3 mb3"
                />
                <button className="pa3 ba br2 ml2">Go</button>
        </div>
    );
};

export default SearchBox;