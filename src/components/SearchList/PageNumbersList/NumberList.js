import React from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";

const NumberList = ({ pageNumbers }) => {
    const { currentPage, changePage } = useApp();

    return (
        <>
            {pageNumbers.map((number, count) =>
                number === currentPage ? (
                    <li key={number} className="number-page-li page-active">
                        {number}
                    </li>
                ) : number < 4 || number > pageNumbers[pageNumbers.length - 4] ? (
                    <li
                        key={number}
                        className="number-page-li"
                        onClick={() => changePage(number)}
                    >
                        {number}
                    </li>
                ) : (
                    ((count === 3 && number < currentPage) ||
                        (count >= 3 &&
                            number > currentPage &&
                            count === pageNumbers[pageNumbers.length - 5])) && (
                        <li key={number} className="number-dot">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                    )
                )
            )}
        </>
    );
};

export default NumberList;
