import React from 'react'

function Search(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.HandleSearch}>
                    <input type="search" placeholder="Search for an anime..." required value={props.search} onChange={e => props.SetSearch(e.target.value)}></input>
                </form>
            </div>
        </main>
    )
}

export default Search