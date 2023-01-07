import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <input 
        type="seach" 
        placeholder='search robots'
        className='ma2 pa3 ba b--green bg-lightest-blue'
        onChange={searchChange}
        />
    )

}

export default SearchBox;