import React from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";

const PreviousBTN = () => {
    const { currentPage, changePage } = useApp();

    return (
        <>
            {currentPage <= 1 ? (
                <li key="prev" className="number-page-li page-change-deactive">
                    Previous
                </li>
            ) : (
                <li
                    key="prev"
                    className="number-page-li page-change"
                    onClick={() => changePage(currentPage - 1)}
                >
                    Previous
                </li>
            )}
        </>
    );
};

export default PreviousBTN;
