import { environment } from '../environments';

function get(province, from, to) {
    return new Promise((resolve, reject) => {
        const url =`${environment.baseServerUrl}/active-cases/?province=${province}&from=${from}&to=${to}`;
        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    })
}

function fetchAllProvinces(from) {
    return new Promise((resolve, reject) => {
        const url =`${environment.baseServerUrl}/province-cases/?&from=${from}`;
        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    })
}

export const ActiveCaseService = {
    get,
    fetchAllProvinces
}