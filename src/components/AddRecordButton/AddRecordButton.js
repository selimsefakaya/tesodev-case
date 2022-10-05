import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const AddRecordButton = () => {
    return (
        <div className="box-btn-add">
            <Link to="/add-new-record">
                <button className="btn-add">Add New Record</button>
            </Link>
        </div>
    );
};

export default AddRecordButton;
