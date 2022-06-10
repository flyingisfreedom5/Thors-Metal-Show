import React from 'react'
import BandList from "../../components/BandList/BandList"
import './BandsListPage.css'

export default function BandsPage(props) {
  return (
    <div className="row" >
      <div class="col s12 m6">
      {
        props.bands.map(band => {
          return <BandList key={band.title} band={band} />
        })
      }
      </div>
    </div>
  )
}