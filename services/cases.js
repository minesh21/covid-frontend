import { environment } from '../environments';

function get(province, from, to) {
    return new Promise((resolve, reject) => {
        const url =`${environment.baseServerUrl}/cases/?province=${province}&from=${from}&to=${to}`;
        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    })
}

export const CaseService = {
    get,
}