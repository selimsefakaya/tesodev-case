import React from "react";

import locationIcon from "../../../images/location.png";
import "./style.scss";

const RecordItem = ({ record }) => {
    return (
        <li className="record-li">
            <div className="box-icon">
                <img src={locationIcon} alt="icon" width="20px" />
            </div>
            <div className="record-content">
                <div className="record-left flex-record">
                    <span>{record.nameSurname}</span>
                    <span>
                        {record.city}, {record.country}
                    </span>
                </div>
                <div className="record-right flex-record">
                    <span>{record.company}</span>
                    <span>{record.date.substring(0, 10)}</span>
                </div>
            </div>
        </li>
    );
};

export default RecordItem;
