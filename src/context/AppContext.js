import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appReducer } from "../reducers/";
import * as actionTypes from "../reducers/actionTypes";
import { initialState } from "./initialState";
import addRecord from "../actions/addRecord";
import filterRecords from "../actions/filterRecords"

const Context = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        getRecords();
    }, []);

    function getRecords() {
        dispatch({
            type: actionTypes.SET_RECORDS,
            payload: state.records,
        });
    }

    // ***** Add Record *****
    const handleChange = (e) => {
        dispatch({
            type: e.target.name,
            payload: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecord(
            state.nameSurname,
            state.company,
            state.email,
            state.date,
            state.country,
            state.city,
            state.records,
            dispatch
        );
    };

    // Close action for Info-box
    const closeInfo = () => {
        dispatch({
            type: actionTypes.CLOSE_INFO,
            payload: "box-info hidden",
        });
    };


    // ***** Search Actions *****
    const query = useLocation().search;
    const queries = query.split("&");
    const querySearch = queries[0].slice(3);
    const queryPage = queries[1] ? Number(queries[1].slice(5)) : null;
    const querySort = queries[2] ? queries[2].slice(5) : null;
    const navigate = useNavigate();

    // The parameters in the url are used with the query string.
    useEffect(() => {
        dispatch({
            type: actionTypes.SET_SEARCH,
            payload: querySearch,
        });
        dispatch({
            type: actionTypes.CHANGE_CURRENT_PAGE,
            payload: queryPage,
        });
        dispatch({
            type: querySort,
        });
    }, []);

    // Function that set states in hook based on change made in search input. 
    const handleSearch = (e) => {
        dispatch({
            type: actionTypes.SET_SEARCH,
            payload: e.target.value.replace(/^\s+/g, ""),
        });
        dispatch({
            type: actionTypes.SET_SEARCH_CLASS,
        });
        if (queries[0].includes("?q")) {
            navigate(
                `/search?q=${e.target.value}&page=1&${(state.classNameAs === "sort-list-li sort-li-active" ||
                    state.classNameDes === "sort-list-li sort-li-active" ||
                    state.classDateAs === "sort-list-li sort-li-active" ||
                    state.classDateDes === "sort-list-li sort-li-active") &&
                `sort=${querySort}`
                }`
            );
        }
        dispatch({
            type: actionTypes.CHANGE_CURRENT_PAGE,
            payload: 1,
        });
    };

    // Method that filters records with change of search.
    useEffect(() => {
        filterRecords(state.records, state.search, dispatch);
    }, [state.search]);

    // Method to sort records according to sorting criteria
    const sortList = (typeOrder) => {
        dispatch({
            type: typeOrder,
        });
        changePage(1);
        typeOrder !== querySort
            ? navigate(`/search?q=${querySearch}&page=${1}&sort=${typeOrder}`)
            : navigate(`/search?q=${querySearch}&page=${1}`);
    };

    
    // Action to change current page
    const changePage = (number) => {
        dispatch({
            type: actionTypes.CHANGE_CURRENT_PAGE,
            payload: number,
        });
        if (queries[0].includes("?q")) {
            navigate(
                `/search?q=${querySearch}&page=${number}&${querySort && `sort=${querySort}`
                }`
            );
        }
    };

    // Action to clear search term
    const clearSearch = () => {
        dispatch({
            type: actionTypes.CLEAR_SEARCH,
        });
    };

    // Declaring data to be transferred out of context
    const data = {
        ...state,
        dispatch,
        handleChange,
        handleSubmit,
        handleSearch,
        closeInfo,
        changePage,
        clearSearch,
        sortList,
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useApp = () => useContext(Context);
export default Provider;
