import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa2 ba b--green bg-lightest-grey'
                type="search" 
                placeholder="Search Friends"
                onChange={searchChange}
            />
        </div>        
    );
}
export default SearchBox;