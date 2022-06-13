import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBandPage.css';


export default function NewBandPage({ handleAddBand }) {
  const navigate = useNavigate();
  const [newBand, setNewBand] =useState({
    title: "",
    members: "",
    albumsList: ""
  });

  

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddBand(newBand);
    navigate("/bands");
  }

  function handleChange(evt) {
  setNewBand({...newBand,[evt.target.name]:evt.target.value})
  }
 
  return (
    <>
    <h2>Please Create New Band</h2>
    <form onSubmit={handleSubmit}>
        <textarea className="input-text" onChange= {handleChange}
          value={newBand.title}
          name = 'title'
          placeholder="New Band"
          required
        />
         <textarea className="input-text" onChange= {handleChange}
          value={newBand.members}
          name = 'members'
          placeholder="Members"
          required
        />
        <textarea className="input-text" onChange= {handleChange}
          value={newBand.albumsList}
          name = 'albumsList'
          placeholder="Albums List"
          required
        />
        <button className="button" type="submit">ADD BAND</button>
      </form>
    </>
  );
}