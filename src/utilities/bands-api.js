import sendRequest from './send-request';
const BASE_URL = '/api/bands';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(bandData) {
    return sendRequest(BASE_URL, 'POST', bandData);
}