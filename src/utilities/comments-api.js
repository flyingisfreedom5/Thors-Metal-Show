import sendRequest from './send-request';
const BASE_URL = '/api/comments';



export function addComment(commentData, id) {
    return sendRequest(`${BASE_URL}`, 'POST', {commentData, id});
}
export function delComment(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}