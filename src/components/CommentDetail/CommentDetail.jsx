
export default function CommentDetail({comment }) {
  
  return (
        <div className="CommentDetail">
           <p> {comment.content} </p>
           <p> {comment.userName} </p>
        </div>
        )
}


