import * as actionTypes from "./actionTypes";

export default function reducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_NAME_SURNAME:
            return {
                ...state,
                nameSurname: action.payload,
            };

        case actionTypes.SET_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };

        case actionTypes.SET_CITY:
            return {
                ...state,
                city: action.payload,
            };

        case actionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };

        case actionTypes.RESET_INPUTS:
            return {
                ...state,
                nameSurname: "",
                email: "",
                date: `${new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()}/${new Date().getMonth() < 9 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}/${new Date().getFullYear()}`,
                country: "",
                city: "",
            };

        case actionTypes.SET_RECORDS:
            return {
                ...state,
                records: action.payload,
            };

        case actionTypes.SET_ERROR:
            return {
                ...state,
                errType: action.payload[0],
                errMsg: action.payload[1],
                errClass: "box-info show",
                infoClass: action.payload[2]
            };

        case actionTypes.CLOSE_INFO:
            return {
                ...state,
                errClass: action.payload,
            };

        case actionTypes.SET_SEARCH:
            return {
                ...state,
                search: action.payload,
                classDateDes: "sort-list-li",
                classDateAs: "sort-list-li",
                classNameAs: "sort-list-li",
                classNameDes: "sort-list-li"
            };

        case actionTypes.SET_FILTERED_RECORDS:
            return {
                ...state,
                filteredRecords: action.payload,
                sortedList: action.payload
            };


        case actionTypes.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case actionTypes.CLEAR_SEARCH:
            return {
                ...state,
                search: ""
            }

        case actionTypes.SORT_BY_NAME_ASCENDING:
            return {
                ...state,
                classNameAs: "sort-list-li sort-li-active",
                classDateDes: "sort-list-li",
                classDateAs: "sort-list-li",
                classNameDes: "sort-list-li",
            }

        case actionTypes.SORT_BY_NAME_DESCENDING:
            return {
                ...state,
                classNameDes: state.classNameDes === "sort-list-li" ? "sort-list-li sort-li-active" : "sort-list-li",
                classDateDes: "sort-list-li",
                classNameAs: "sort-list-li",
                classDateAs: "sort-list-li",
            }

        case actionTypes.SORT_BY_DATE_ASCENDING:
            return {
                ...state,
                classDateAs: state.classDateAs === "sort-list-li" ? "sort-list-li sort-li-active" : "sort-list-li",
                classDateDes: "sort-list-li",
                classNameAs: "sort-list-li",
                classNameDes: "sort-list-li",
            }

        case actionTypes.SORT_BY_DATE_DESCENDING:
            return {
                ...state,
                classDateDes: state.classDateDes === "sort-list-li" ? "sort-list-li sort-li-active" : "sort-list-li",
                classDateAs: "sort-list-li",
                classNameAs: "sort-list-li",
                classNameDes: "sort-list-li",
            }

        default:
            return state;
    }
}
