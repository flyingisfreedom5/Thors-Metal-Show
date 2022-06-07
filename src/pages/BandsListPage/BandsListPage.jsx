import { useState, useEffect } from 'react';
import * as bandsAPI from '../../utilities/bands-api'
import BandList from "../../components/BandList/BandList"
import './BandsListPage.css'

export default function BandsPage(props) {
  return (
    <div className="container">
      {
        props.bands.map(band => {
          return <BandList key={band.title} band={band} />
        })
      }
    </div>
  )
}