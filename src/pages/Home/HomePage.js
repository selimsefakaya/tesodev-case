import React from "react";

import "./style.scss";
import tesodev from "../../images/tesodev.png";

import AddRecordButton from "../../components/AddRecordButton/AddRecordButton";
import SearchComponent from "../../components/HomeComponents/SearchComponent/SearchComponent";
import TopNews from "../../components/HomeComponents/TopNews/TopNews";
import Footer from "../../components/HomeComponents/Footer/Footer";

const HomePage = () => {
    return (
        <div className="body-home">
            <AddRecordButton />
            <div className="header-main">
                <img src={tesodev} width="278px" alt="tesodev" />
                <span>Search app</span>
            </div>
            <h2 className="head-search">Find in records</h2>
            <div className="search-home">
                <SearchComponent />
            </div>
            <TopNews />
            <Footer />
        </div>
    );
};

export default HomePage;
