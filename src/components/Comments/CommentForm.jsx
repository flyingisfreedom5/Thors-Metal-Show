import React from 'react'
import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm({ handleAddComment, band }) {
  const [newComment, setNewComment] = useState({
    content: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddComment(newComment, band._id);
  }

  function handleChange(evt) {
    setNewComment({ ...newComment, [evt.target.name]: evt.target.value });
    console.log(handleChange);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-text"
        onChange={handleChange}
        value={newComment.content}
        name="content"
        placeholder="New Comment"
      />
      <button className="button" type="submit">ADD COMMENT</button>
    </form>
  );
}
