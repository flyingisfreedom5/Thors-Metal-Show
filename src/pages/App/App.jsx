import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewBandPage from '../NewBandPage/NewBandPage';
import BandsListPage from '../BandsListPage/BandsListPage';
import NavBar from '../../components/NavBar/NavBar';
import BandDetailPage from '../BandDetailPage/BandDetailPage'
import * as BandsAPI from '../../utilities/bands-api';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [bands, setBands] = useState([]);
  
  function handleAddBand(band) {
    addBand(band)
  }


useEffect(() => { 
  async function getAllBands() {
    const bands = await BandsAPI.getAll()
    setBands(bands);
  }
 getAllBands();
}, [] )

async function addBand(data) {
 const band = await BandsAPI.add(data) 
 setBands([... bands, band])
}


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/bands/:bandTitle" element={<BandDetailPage bands={bands} />} />
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
