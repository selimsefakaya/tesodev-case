import React from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";
import closeIcon from "../../../images/closeIcon.svg";

const InfoComp = () => {
    const { errType, errMsg, errClass, closeInfo, infoClass } = useApp();

    return (
        <div className={errClass}>
            <div className="container-info">
                <div className="info-close">
                    <div className="box-close" onClick={closeInfo}>
                        <img src={closeIcon} alt="close" width="8px" />
                    </div>
                </div>

                <h5>Error while adding</h5>

                <div className={infoClass}>
                    <span>"{errType}"</span>
                </div>

                <p className="error-text">{errMsg}</p>
            </div>
        </div>
    );
};

export default InfoComp;
