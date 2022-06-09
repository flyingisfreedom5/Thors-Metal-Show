import sendRequest from './send-request';
const BASE_URL = '/api/comments';



export function addComment(commentData, id) {
    return sendRequest(`${BASE_URL}`, 'POST', {commentData, id});
}
export function deleteComment(commentData, id) {
    return sendRequest(`${BASE_URL}`, 'DELETE', {commentData, id});
}