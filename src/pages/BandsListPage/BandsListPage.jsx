import { useState, useEffect } from 'react';
import * as bandsAPI from '../../utilities/bands-api'
import BandList from "../../components/BandList/BandList"

export default function BandsPage(props) {
  const [bands, setBands] = useState([]);
  
  useEffect(function() {
    async function getBands() {
      const bands = await bandsAPI.getAll();
      setBands(bands);
    }
    getBands();
  }, []);
 
  async function handleAddBand(bandData) {
    const band = await bandsAPI.add(bandData);
    setBands([...bands, band]);
  }
  return (
    <div className="container">
      <h1>Thor's Bands</h1>
      <BandList
      bands={bands}
      />
    </div>
  );
}