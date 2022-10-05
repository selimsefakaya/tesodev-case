import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../../context/AppContext";
import searchIcon from "../../images/search.png";

const SearchForm = () => {
    const { search, handleSearch, currentPage } = useApp();

    return (
        <form className="search-form">
            <input
                type="text"
                className="input-search"
                onChange={handleSearch}
                value={search}
            />
            <img src={searchIcon} alt="search icon" className="icon-search" />
            {search.length > 1 ? (
                <Link
                    to={{
                        pathname: "/search",
                        search: `?q=${search}&page=${currentPage}`,
                    }}
                >
                    <button className="btn-search">Search</button>
                </Link>
            ) : (
                <Link>
                    <button disabled className="disable-btn">
                        Search
                    </button>
                </Link>
            )}
        </form>
    );
};

export default SearchForm;
