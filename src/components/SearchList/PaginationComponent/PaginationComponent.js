import React, { useState } from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";
import * as comparators from "../../../actions/comparators";

import RecordItem from "../RecordItem/RecordItem";
import PaginateNumbers from "../PageNumbersList/PaginateNumbers";

const PaginationComponent = () => {
    const {
        filteredRecords,
        classDateAs,
        classDateDes,
        classNameAs,
        classNameDes,
        currentPage
    } = useApp();
    const [recordsPerPage] = useState(5);
    const pageNumbers = [];
    let showRecords = [];
    let sortedRec = [];
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    for (
        let i = 1;
        i <= Math.ceil(filteredRecords.length / recordsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    filteredRecords.map((item) => sortedRec.push(item));

    if (classNameAs === "sort-list-li sort-li-active") {
        showRecords = sortedRec
            .sort(comparators.ComparatorNameAs)
            .slice(indexOfFirstRecord, indexOfLastRecord);
    } else if (classNameDes === "sort-list-li sort-li-active") {
        showRecords = sortedRec
            .sort(comparators.ComparatorNameDes)
            .slice(indexOfFirstRecord, indexOfLastRecord);
    } else if (classDateAs === "sort-list-li sort-li-active") {
        showRecords = sortedRec
            .sort(comparators.ComparatorDateAs)
            .slice(indexOfFirstRecord, indexOfLastRecord);
    } else if (classDateDes === "sort-list-li sort-li-active") {
        showRecords = sortedRec
            .sort(comparators.ComparatorDateDes)
            .slice(indexOfFirstRecord, indexOfLastRecord);
    } else {
        showRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
    }

    return (
        <>
            <ul className="records-list-ul">
                {showRecords.map((record, index) => (
                    <div className="box-record-li" key={index}>
                        <RecordItem record={record} />
                        {index !== showRecords.length - 1 && (
                            <span className="seperator"></span>
                        )}
                    </div>
                ))}

                {showRecords.length === 0 && (
                    <li className="no-record">There is no record.</li>
                )}

                <PaginateNumbers pageNumbers={pageNumbers} showRecords={showRecords} />
            </ul>
        </>
    );
};

export default PaginationComponent;
