import dataFromLocal from "../mockData.json";

const dataFromLS = JSON.parse(localStorage.getItem("records"));

export const initialState = {
    nameSurname: "",
    company: "TESODEV",
    email: "",
    date: `${new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate()
        }/${new Date().getMonth() < 9
            ? `0${new Date().getMonth() + 1}`
            : new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
    country: "",
    city: "",
    errType: "",
    errMsg: "",
    errClass: "box-info hidden",
    records: dataFromLS ? dataFromLS : dataFromLocal,
    search: "",
    filteredRecords: [],
    currentPage: 1,
    classNameAs: "sort-list-li",
    classNameDes: "sort-list-li",
    classDateAs: "sort-list-li",
    classDateDes: "sort-list-li",
};