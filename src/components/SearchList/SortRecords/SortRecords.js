import React from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";
import icon from "../../../images/sort.png";

import {
    SORT_BY_NAME_ASCENDING,
    SORT_BY_NAME_DESCENDING,
    SORT_BY_DATE_ASCENDING,
    SORT_BY_DATE_DESCENDING,
} from "../../../reducers/actionTypes";

const SortRecords = () => {
    const { classNameAs, classNameDes, classDateAs, classDateDes, sortList } = useApp();

    return (
        <div className="container-sort">
            <div className="sort-header">
                <img src={icon} alt="sort" width="16px" />
                <span>Order by</span>
            </div>
            <ul className="sort-list-ul">
                <li
                    className={classNameAs}
                    onClick={() => sortList(SORT_BY_NAME_ASCENDING)}
                >
                    Name ascending
                </li>
                <li
                    className={classNameDes}
                    onClick={() => sortList(SORT_BY_NAME_DESCENDING)}
                >
                    Name descending
                </li>
                <li
                    className={classDateAs}
                    onClick={() => sortList(SORT_BY_DATE_ASCENDING)}
                >
                    Year ascending
                </li>
                <li
                    className={classDateDes}
                    onClick={() => sortList(SORT_BY_DATE_DESCENDING)}
                >
                    Year descending
                </li>
            </ul>
        </div>
    );
};

export default SortRecords;
