import CommentDetail from '../../components/CommentDetail/CommentDetail'

export default function Comments({ band }) {
  
  return (
        band.comments.map(c => <CommentDetail key={c._id} comment={c} />)
  );
}


