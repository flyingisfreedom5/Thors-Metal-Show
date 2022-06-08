import { useState, useRef, useEffect } from 'react';


export default function Comments({ handleAddComment, band, comments }) {
    const [newComment, setNewComment] =useState({
     content: "",
    });
    
      
    function handleSubmit(evt) {
     evt.preventDefault();
     handleAddComment(newComment, band._id);
    
    }
      
    function handleChange(evt) {
     setNewComment({... newComment, [evt.target.name] : evt.target.value})
    }
    
return (

<form onSubmit={handleSubmit} >
<textarea onChange= {handleChange}
  value={newComment.content}
  name = 'content'
  placeholder="New Comment"
/>
<button type="submit">ADD COMMENT</button>
</form>

);
}