import { useState, useRef, useEffect } from 'react';


export default function DeleteComment({handleDeleteComment, comment, band}) {
    const [deleteComment, setDeleteComment] =useState({
     content: {comment},
    });
    
      
    function handleSubmit(evt) {
     evt.preventDefault();
     handleDeleteComment(deleteComment, band._id);
    
    }
      
    function handleChange(evt) {
     setDeleteComment({... deleteComment, [evt.target.name] : evt.target.value})
    }
    
return (

<form onSubmit={handleSubmit} >
<button type="submit"
onClick={handleDeleteComment}>DELETE COMMENT</button>
</form>

);
}