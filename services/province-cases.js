import { environment } from '../environments';

function get(from) {
    return new Promise((resolve, reject) => {
        const url =`${environment.baseServerUrl}/province-cases/?from=${from}`;
        fetch(url, {method: 'GET'})
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    })
}

export const ProvinceCaseService = {
    get
}