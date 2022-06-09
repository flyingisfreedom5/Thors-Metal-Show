import { useParams } from "react-router-dom";
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/Comments/CommentForm'
import UpdateComment from '../../components/Comments/UpdateComment';
import DeleteComment from '../../components/Comments/DeleteComment';

export default function BandDetailPage({ bands, handleAddComment, comments}) {
  let { id } = useParams();

  let band = bands.find((b) => b._id === id);
  if(!band) return null;


  return (
    <>
    <div className="flex">
      <div>
        <h1>{band.title}</h1>
        <h2>Members: {band.members}</h2>
        <h3>Albums List:</h3>
        <ul>
            <li>{band.albumsList}</li>
        </ul>
      </div>
     <Comments band={band} handleAddComment={handleAddComment} />
     <CommentForm band={band} handleAddComment={handleAddComment} />
     
      
        
    </div>
    </>
  );
}
