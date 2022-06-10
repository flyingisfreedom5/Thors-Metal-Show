import React from 'react'
import { useState } from 'react';


export default function NewBandPage({ handleAddBand }) {
  const [newBand, setNewBand] =useState({
    title: "",
    members: "",
    albumsList: ""
  });

  

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddBand(newBand);
  }

  function handleChange(evt) {
  setNewBand({...newBand,[evt.target.name]:evt.target.value})
  }
 
  return (
    <>
    <h2>Please Create New Band</h2>
    <form onSubmit={handleSubmit}>
        <textarea onChange= {handleChange}
          value={newBand.title}
          name = 'title'
          placeholder="New Band"
          required
        />
         <textarea onChange= {handleChange}
          value={newBand.members}
          name = 'members'
          placeholder="Members"
          required
        />
        <textarea onChange= {handleChange}
          value={newBand.albumsList}
          name = 'albumsList'
          placeholder="Albums List"
          required
        />
        <button type="submit">ADD BAND</button>
      </form>
    </>
  );
}