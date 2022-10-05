import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../../../context/AppContext";
import "./style.scss";
import locationIcon from "../../../images/location.png";

const ResultPreview = () => {
    const { filteredRecords, search } = useApp();

    let prevRecords = [];
    for (let i = 0; i < 3; i++) {
        filteredRecords[i]
            ? (prevRecords = [...prevRecords, filteredRecords[i]])
            : (prevRecords = [...prevRecords]);
    }

    let searchClass =
        filteredRecords.length && search.length > 1
            ? "result-preview-show"
            : "result-preview-hidden";

    return (
        <div className="box-result-preview">
            <div className={searchClass}>
                <ul className="result-preview-ul">
                    {filteredRecords.length > 0 &&
                        prevRecords.map((record, index) => (
                            <Link key={index} className="result-preview-link">
                                <li className="result-preview-li">
                                    <img src={locationIcon} alt="icon" className="li-icon" />
                                    <div className="li-content">
                                        <span>{record.nameSurname}</span>
                                        <p>{record.company}</p>
                                    </div>
                                </li>
                                {index < prevRecords.length - 1 && (
                                    <span className="seperator"></span>
                                )}
                            </Link>
                        ))}
                </ul>
                <Link
                    to={{
                        pathname: "/search",
                        search: `?q=${search}&page=1`,
                    }}
                    className="show-more"
                >
                    <span className="show-more">Show more..</span>
                </Link>
            </div>
        </div>
    );
};

export default ResultPreview;
