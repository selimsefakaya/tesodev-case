import React from "react";

import NextBTN from "../NextButton/NextBTN";
import NumberList from "./NumberList";
import PreviousBTN from "../PreviousButton/PreviousBTN";

const PaginateNumbers = ({ pageNumbers, showRecords }) => {
    return (
        <ul className="paginate-pages">
            <PreviousBTN />

            <NumberList pageNumbers={pageNumbers} />

            <NextBTN pageNumbers={pageNumbers} showRecords={showRecords} />
        </ul>
    );
};

export default PaginateNumbers;
