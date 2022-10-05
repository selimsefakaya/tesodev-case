import { SET_ERROR, RESET_INPUTS } from "../reducers/actionTypes";

export default async function addRecord(
    nameSurname,
    company,
    email,
    date,
    country,
    city,
    records,
    dispatch
) {
    const regEmail =
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nameSurname.length < 4 || nameSurname.length > 40) {
        dispatch({
            type: SET_ERROR,
            payload: [
                "NameError",
                "The name should consist of at least 3, maximum 40 characters and only letters.",
                "error-box",
            ],
        });
    } else if (country.length < 2 || country.length > 40) {
        dispatch({
            type: SET_ERROR,
            payload: [
                "CountryError",
                "Country must be at least 2 characters and at most 40 characters.",
                "error-box",
            ],
        });
    } else if (city.length < 2 || city.length > 40) {
        dispatch({
            type: SET_ERROR,
            payload: [
                "CityError",
                "City must be at least 2 characters and at most 40 characters.",
                "error-box",
            ],
        });
    } else if (!regEmail.test(email)) {
        dispatch({
            type: SET_ERROR,
            payload: ["EmailError", "Enter a correct email.", "error-box"],
        });
    } else {
        records.data.push([nameSurname, company, email, date, country, city]);
        localStorage.setItem("records", JSON.stringify(records));
        dispatch({
            type: SET_ERROR,
            payload: ["Success", "Record successfully added.", "success-box"],
        });

        dispatch({
            type: RESET_INPUTS,
        });
    }
}
