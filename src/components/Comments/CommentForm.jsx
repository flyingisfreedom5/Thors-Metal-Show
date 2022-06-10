import React from 'react'
import { useState } from "react";

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
        onChange={handleChange}
        value={newComment.content}
        name="content"
        placeholder="New Comment"
      />
      <button type="submit">ADD COMMENT</button>
    </form>
  );
}
