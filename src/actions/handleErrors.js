const reg = /[^a-zA-ZşŞıİçÇöÖüÜğĞ ]/;
const regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


export const handleErrorName = (valueInput, setNameSurnameC) => {
    if (
        valueInput.length < 4 ||
        valueInput.length > 60 ||
        reg.test(valueInput)
    ) {
        setNameSurnameC([
            "box-input error-input",
            "The name should consist of at least 3, maximum 40 characters and only letters.",
        ]);
    } else {
        setNameSurnameC(["box-input", ""]);
    }
};

export const handleErrorCountry = (valueInput, setCountryC) => {
    if (
        valueInput.length < 2 ||
        valueInput.length > 40 ||
        reg.test(valueInput)
    ) {
        setCountryC([
            "box-input error-input",
            "Country must be at least 2 characters and at most 40 characters and only letters.",
        ]);
    } else {
        setCountryC(["box-input", ""]);
    }
};

export const handleErrorCity = (valueInput, setCityC) => {
    if (
        valueInput.length < 2 ||
        valueInput.length > 40 ||
        reg.test(valueInput)
    ) {
        setCityC([
            "box-input error-input",
            "City must be at least 2 characters and at most 40 characters and only letters.",
        ]);
    } else {
        setCityC(["box-input", ""]);
    }
};

export const handleErrorEmail = (valueInput, setEmailC) => {
    if (!regEmail.test(valueInput)) {
        setEmailC(["box-input error-input", "Enter a correct email."]);
    } else {
        setEmailC(["box-input", ""]);
    }
};