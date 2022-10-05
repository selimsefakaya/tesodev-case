import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../../context";
import "./style.scss";
import tesodev from "../../images/tesodev.png";
import back from "../../images/back.png";

import AddRecordForm from "../../components/AddRecordPageComponents/AddRecordForm/AddRecordForm";
import InfoComp from "../../components/AddRecordPageComponents/InfoComponent/InfoComp";

const AddRecordPage = () => {
    const { search, currentPage, clearSearch } = useApp();

    return (
        <div className="container-add-page">
            <div className="head-add-page">
                <Link to="/" onClick={clearSearch}>
                    <img src={tesodev} width="149px" alt="tesodev" />
                </Link>
                <Link
                    to={{
                        pathname: "/search",
                        search: `?q=${search}&page=${currentPage}`,
                    }}
                    className="return-list"
                >
                    <img src={back} alt="back" className="img-back" />
                    <h3>Return to List Page</h3>
                </Link>
            </div>
            <AddRecordForm />
            <InfoComp />
        </div>
    );
};

export default AddRecordPage;
