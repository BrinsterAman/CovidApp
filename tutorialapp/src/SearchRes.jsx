import React from 'react';

const SearchRes = (props) => {

    const imgSrc = `https://source.unsplash.com/600x300/?${props.name}`;

    return(
        <>
        <div>
            <img src={imgSrc} alt='search result' />
        </div>
        </>
    );
}

export default SearchRes;