import { useState, useEffect } from 'react';
import * as bandsAPI from '../../utilities/bands-api'
import BandList from "../../components/BandList/BandList"

export default function BandsPage({ bands }) {
 const allBands = bands.map((b, index ) =>  <p key={index}>{b.title}</p> ) 
  
  return (
    <div className="container">
      <h1>Thor's Bands</h1>
     {allBands}
      
    </div>
  );
}