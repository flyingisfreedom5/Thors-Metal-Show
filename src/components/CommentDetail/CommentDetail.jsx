import React from 'react'
import * as CommentsAPI from '../../utilities/comments-api';
import "./CommentDetail.css";

export default function CommentDetail({bands, comment, setBands }) {
  
  async function deleteComment(id) {
    const deletedComment = await CommentsAPI.delComment(id)
    console.log(deletedComment);
    const updatedBands = bands.map(b => b._id === deletedComment._id ? deletedComment : b) 
    setBands(updatedBands)
  }
  
  return (
        <>
        <div className="CommentDetail">
           <p> {comment.content} </p>
           <p> {comment.userName} </p>
        </div>
        
        <button className="button" onClick={() => deleteComment(comment._id)} type="submit">DELETE COMMENT</button>
        </>
        )
}


