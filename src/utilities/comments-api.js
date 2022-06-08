import sendRequest from './send-request';
const BASE_URL = '/api/comments';



export function addComment(commentData) {
    return sendRequest(BASE_URL, 'POST', commentData);
}

