import { useState, useRef, useEffect } from 'react';


export default function Comments({ handleAddComment, band, comments }) {
    comments.map(c => { 
        return <BandDetailPage key={comments} />
      })
    }
    const [newComment, setNewComment] =useState({
     content: "",
    });
    console.log(band);
      
    function handleSubmit(evt) {
     evt.preventDefault();
     handleAddComment(newComment, band._id);
    
    }
      
    function handleChange(evt) {
     setNewComment({... newComment, [evt.target.name] : evt.target.value})
    }
    
return (

<form onSubmit={handleSubmit}>
<textarea onChange= {handleChange}
  value={newComment.content}
  name = 'content'
  placeholder="New Comment"
/>
<button type="submit">ADD COMMENT</button>
</form>

);
}