
export default function CommentDetailPage({ band, handleAddComment, comment }) {
  
  return (
        <div className="CommentDetail">
            {band.comments.map(c => <p key={c._id}>{c.comments.content}</p>)}
        </div>
        )
}


