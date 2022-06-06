import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewBandPage from '../NewBandPage/NewBandPage';
import BandsListPage from '../BandsListPage/BandsListPage';
import NavBar from '../../components/NavBar/NavBar';
import BandDetailPage from '../BandDetailPage/BandDetailPage'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [bands, setBands] = useState([]);
  
  function addBand(band) {
    setBands([...bands, { title: "",
    members: "",
    albumsList: "" }]);
  }


  

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/bands/:bandTitle" element={<BandDetailPage bands={bands} />} />
            <Route path="/bands/new" element={<NewBandPage />} />
            <Route path="/bands" element={<BandsListPage addBand ={addBand} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
