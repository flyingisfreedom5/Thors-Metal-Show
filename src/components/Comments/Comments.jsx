import React from 'react'
import CommentDetail from '../../components/CommentDetail/CommentDetail'

export default function Comments({ bands, band, setBands }) {
  
  return (
        band.comments.map(c => <CommentDetail bands={bands} key={c._id} comment={c} setBands={setBands} />)
  );
}


