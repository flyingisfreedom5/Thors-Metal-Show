import { useState, useRef, useEffect } from 'react';


export default function UpdateComment({handleUpdateComment, comment, band}) {
    const [updateComment, setUpdateComment] =useState({
     content: {comment},
    });
    
      
    function handleSubmit(evt) {
     evt.preventDefault();
     handleUpdateComment(updateComment, band._id);
    
    }
      
    function handleChange(evt) {
     setUpdateComment({... updateComment, [evt.target.name] : evt.target.value})
    }
    
return (

<form onSubmit={handleSubmit} >
<input onChange= {handleChange}
 
  name = 'content'
  placeholder="Update Comment"
/>
<button type="submit">UPDATE COMMENT</button>
</form>

);
}