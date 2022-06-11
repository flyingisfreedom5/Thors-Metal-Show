import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewBandPage from '../NewBandPage/NewBandPage';
import BandsListPage from '../BandsListPage/BandsListPage';
import NavBar from '../../components/NavBar/NavBar';
import BandDetailPage from '../BandDetailPage/BandDetailPage'
import * as BandsAPI from '../../utilities/bands-api';
import * as CommentsAPI from '../../utilities/comments-api';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  const [bands, setBands] = useState([]);
  
  function handleAddBand(band) {
    addBand(band)
  }
  
  async function handleAddComment(comment, id) {
    const updatedBand = await CommentsAPI.addComment(comment, id)
    const updatedBands = bands.map(b => b._id === updatedBand._id ? updatedBand : b) 
    setBands(updatedBands)
  }


useEffect(() => { 
  async function getAllBands() {
    const bands = await BandsAPI.getAll()
    setBands(bands);
  }
  if (user) getAllBands();
}, [user] );

async function addBand(data) {
 const band = await BandsAPI.add(data) 
 setBands([...bands, band])}




  return (
    <main className="App">
      { user ?
        <>
        
          <NavBar user={user} setUser={setUser} />
          
          <Routes>
            {/* Route components in here */}
            <Route path="/bands/:id" element={<BandDetailPage bands={bands} setBands= {setBands}
             handleAddComment={handleAddComment}/>} />
            <Route path="/bands/new" element={<NewBandPage handleAddBand ={handleAddBand} />} />
            <Route path="/bands" element={<BandsListPage bands={bands}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
