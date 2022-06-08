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
import rock from '../../images/rock.png';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  const [bands, setBands] = useState([]);
  const [comments, setComments] = useState([]);
  
  function handleAddBand(band) {
    addBand(band)
  }
  
  function handleAddComment(comment, id) {
    addComment(comment, id)
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
async function addComment(data, id) {
 const comment = await CommentsAPI.addComment(data, id) 
 setComments([... comments, comment])
}



  return (
    <main className="App">
      { user ?
        <>
        <img src= {rock} alt= "rock-and-roll" height="80" />
          <NavBar user={user} setUser={setUser} />
          
          <Routes>
            {/* Route components in here */}
            <Route path="/bands/:id" element={<BandDetailPage bands={bands}
             handleAddComment={handleAddComment} comments={comments} />} />
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
