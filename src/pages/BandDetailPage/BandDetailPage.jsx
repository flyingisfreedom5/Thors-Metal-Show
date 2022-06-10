import React from 'react'
import { useParams } from "react-router-dom";
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/Comments/CommentForm'

export default function BandDetailPage({ bands, handleAddComment, setBands}) {
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
        {band.albumsList}
            
        </ul>
      </div>
     <Comments bands={bands} band={band} handleAddComment={handleAddComment} setBands={setBands} />
     <CommentForm band={band} handleAddComment={handleAddComment} />
     
      
        
    </div>
    </>
  );
}
