import sendRequest from './send-request';
const BASE_URL = '/api/bands';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(bandData) {
    return sendRequest(BASE_URL, 'POST', bandData);
}

// export const commentPost = (value, id)  => async(dispatch) => {
//     try {
//        const { data } = await api.comment(value, id);
//     } catch (error) {

//     }
// }

// export const comment = (value, id) => API.post(`/bands/${id}/commentPost`, { value });