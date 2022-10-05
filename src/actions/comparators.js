export function ComparatorNameAs(a, b) {
    if (a.nameSurname.toUpperCase() < b.nameSurname.toUpperCase()) return -1;
    if (a.nameSurname.toUpperCase() > b.nameSurname.toUpperCase()) return 1;
}

export function ComparatorNameDes(a, b) {
    if (a.nameSurname.toUpperCase() < b.nameSurname.toUpperCase()) return 1;
    if (a.nameSurname.toUpperCase() > b.nameSurname.toUpperCase()) return -1;
}

export function ComparatorDateAs(a, b) {
    if (Number(a.date.slice(6, 10)) < Number(b.date.slice(6, 10))) return -1;
    if (Number(a.date.slice(6, 10)) > Number(b.date.slice(6, 10))) return 1;
    if (Number(a.date.slice(6, 10)) === Number(b.date.slice(6, 10))) {
        if (Number(a.date.slice(3, 5)) < Number(b.date.slice(3, 5))) return -1;
        if (Number(a.date.slice(3, 5)) > Number(b.date.slice(3, 5))) return 1;
        if (Number(a.date.slice(3, 5)) === Number(b.date.slice(3, 5))) {
            if (Number(a.date.slice(0, 2)) < Number(b.date.slice(0, 2))) return -1;
            if (Number(a.date.slice(0, 2)) > Number(b.date.slice(0, 2))) return 1;
        }
    }
}

export function ComparatorDateDes(a, b) {
    if (Number(a.date.slice(6, 10)) < Number(b.date.slice(6, 10))) return 1;
    if (Number(a.date.slice(6, 10)) > Number(b.date.slice(6, 10))) return -1;
    if (Number(a.date.slice(6, 10)) === Number(b.date.slice(6, 10))) {
        if (Number(a.date.slice(3, 5)) < Number(b.date.slice(3, 5))) return 1;
        if (Number(a.date.slice(3, 5)) > Number(b.date.slice(3, 5))) return -1;
        if (Number(a.date.slice(3, 5)) === Number(b.date.slice(3, 5))) {
            if (Number(a.date.slice(0, 2)) < Number(b.date.slice(0, 2))) return 1;
            if (Number(a.date.slice(0, 2)) > Number(b.date.slice(0, 2))) return -1;
        }
    }
}