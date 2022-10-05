import { SET_FILTERED_RECORDS } from "../reducers/actionTypes"

export default function filterRecords(records, search, dispatch) {
    try {
        let objResponse = [];
        records.data.map((record) => {
            return (objResponse = [
                ...objResponse,
                {
                    nameSurname: record[0],
                    company: record[1],
                    email: record[2],
                    date: record[3],
                    country: record[4],
                    city: record[5],
                },
            ]);
        });

        let initFilteredRecords = [];
        if (search.length > 1) {
            objResponse
                .filter((record) =>
                    record.nameSurname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((record) => {
                    return (initFilteredRecords = [...initFilteredRecords, record]);
                });
            objResponse
                .filter(
                    (record) =>
                        !record.nameSurname
                            .toLowerCase()
                            .includes(search.toLowerCase()) &&
                        record.company.toLowerCase().includes(search.toLowerCase())
                )
                .map((record) => {
                    return (initFilteredRecords = [...initFilteredRecords, record]);
                });
            dispatch({
                type: SET_FILTERED_RECORDS,
                payload: initFilteredRecords,
            });
        }
    } catch (err) {
        return console.log(err);
    }
}