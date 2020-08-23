import React, { useState } from 'react';
import SearchRes from './SearchRes';

const Search = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <h1>This is Search page</h1>
            <h2>You searched for {search}</h2>
            <div>
                <div>
                    <input type='text' placeholder='Search...' value={search} onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
                </div>
                <br />
                <div>
                    {search === "" ? null : <SearchRes name={search} />}
                </div>
            </div>
        </>
    );
}
export default Search;