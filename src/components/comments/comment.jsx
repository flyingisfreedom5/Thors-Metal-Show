

const Comment =({comment}) => {
   
    return (
        <div className="comment">
            <div className= "comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.user}</div>
                    <div>{comment.createdAt}</div>
                </div>
                <div className="comment=text">{comment.body}</div>
            </div>

        </div>
        
    )
};


export default Comment;