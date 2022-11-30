import React, {useState} from 'react';

const Search = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="search_container">
            <div className="search">
                <input placeholder="Search Pokemon" onChange={onChangeHandler} />
            </div>
            <div>
                <button onClick={onButtonClickHandler} >Search</button>
            </div>
        </div>
    );
}

export default Search;