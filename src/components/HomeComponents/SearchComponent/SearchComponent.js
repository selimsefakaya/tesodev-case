import React from "react";
import "./style.scss";

import ResultPreview from "../ResultPreview/ResultPreview";
import SearchForm from "../../SearchForm/SearchForm";

const SearchComponent = () => {
    return (
        <div className="container-search-form">
            <SearchForm />
            <ResultPreview />
        </div>
    );
};

export default SearchComponent;
