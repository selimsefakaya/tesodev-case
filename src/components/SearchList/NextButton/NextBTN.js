import React from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";

const NextBTN = ({ pageNumbers, showRecords }) => {
    const { currentPage, changePage } = useApp();

    return (
        <>
            {currentPage === pageNumbers[pageNumbers.length - 1] ||
                showRecords.length === 0 ? (
                <li key="next" className="number-page-li page-change-deactive">
                    Next
                </li>
            ) : (
                <li
                    key="next"
                    className="number-page-li page-change"
                    onClick={() => changePage(currentPage + 1)}
                >
                    Next
                </li>
            )}
        </>
    );
};

export default NextBTN;
