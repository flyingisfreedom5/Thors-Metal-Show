import CommentDetailPage from '../../pages/CommentDetailPage/CommentDetailPage'

export default function Comments({ band, handleAddComment, comment }) {
  
  return (
        band.comments.map(c => {
        <CommentDetailPage band={band} key={c._id} comment={c} handleAddComment={handleAddComment} />
        })
   
  )
}


