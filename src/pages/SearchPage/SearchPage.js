import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../../context/AppContext";
import "./style.scss";
import tesodev from "../../images/tesodev.png";

import SearchForm from "../../components/SearchForm/SearchForm";
import AddRecordButton from "../../components/AddRecordButton/AddRecordButton";
import PaginationComponent from "../../components/SearchList/PaginationComponent/PaginationComponent";
import SortRecords from "../../components/SearchList/SortRecords/SortRecords";

const SearchPage = () => {
  const { clearSearch } = useApp();

  return (
    <div className="body-search-page">
      <div className="container-search-page">
        <div className="top-s-p">
          <Link to="/" onClick={clearSearch}>
            <img src={tesodev} alt="" width="149px" />
          </Link>
          <div className="top-s-p-search">
            <SearchForm />
          </div>
          <AddRecordButton />
        </div>
        <div className="pagination">
          <PaginationComponent />
          <SortRecords />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
