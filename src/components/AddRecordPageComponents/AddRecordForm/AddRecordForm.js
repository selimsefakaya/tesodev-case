import React, { useState } from "react";

import { useApp } from "../../../context/AppContext";
import "./style.scss";
import {
    SET_NAME_SURNAME,
    SET_COUNTRY,
    SET_CITY,
    SET_EMAIL,
} from "../../../reducers/actionTypes";
import {
    handleErrorName,
    handleErrorCountry,
    handleErrorCity,
    handleErrorEmail,
} from "../../../actions/handleErrors";

const AddRecordForm = () => {
    const { handleChange, handleSubmit, nameSurname, country, city, email } = useApp();

    const [nameSurnameC, setNameSurnameC] = useState(["box-input", "".false]);
    const [countryC, setCountryC] = useState(["box-input", ""]);
    const [cityC, setCityC] = useState(["box-input", ""]);
    const [emailC, setEmailC] = useState(["box-input", ""]);

    return (
        <div className="box-add-form">
            <form onSubmit={handleSubmit}>
                <div className={nameSurnameC[0]}>
                    <label htmlFor="nameSurname">Name Surname</label>
                    <input
                        type="text"
                        placeholder="Enter name and surname"
                        name={SET_NAME_SURNAME}
                        value={nameSurname}
                        onChange={handleChange}
                        onBlur={() => handleErrorName(nameSurname, setNameSurnameC)}
                    />
                    <p>{nameSurnameC[1]}</p>
                </div>
                <div className={countryC[0]}>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        placeholder="Enter a country"
                        name={SET_COUNTRY}
                        value={country}
                        onChange={handleChange}
                        onBlur={() => handleErrorCountry(country, setCountryC)}
                    />
                    <p>{countryC[1]}</p>
                </div>
                <div className={cityC[0]}>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        placeholder="Enter a city"
                        name={SET_CITY}
                        value={city}
                        onChange={handleChange}
                        onBlur={() => handleErrorCity(city, setCityC)}
                    />
                    <p>{cityC[1]}</p>
                </div>
                <div className={emailC[0]}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter an email (abc@xyz.com)"
                        name={SET_EMAIL}
                        value={email}
                        onChange={handleChange}
                        required
                        onBlur={() => handleErrorEmail(email, setEmailC)}
                    />
                    <p>{emailC[1]}</p>
                </div>
                {nameSurname.length > 0 &&
                    country.length > 0 &&
                    city.length > 0 &&
                    email.length > 0 ? (
                    <div className="btn-add-record">
                        <button>Add</button>
                    </div>
                ) : (
                    <div className="btn-add-record">
                        <button disabled className="disable-btn">
                            Add
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddRecordForm;
