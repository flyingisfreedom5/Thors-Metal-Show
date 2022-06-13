import React from 'react'
import BandList from "../../components/BandList/BandList"
import './BandsListPage.css'
import heavyMetal from '../../images/heavyMetal.png'

export default function BandsPage(props) {
  return (
    <div >
    <div className="center" >
      <div class="col m12 l6">
        <div className="card blue-grey darken-1 center">
          <div className="card-content white-text ">
            <span class="card-title center">Bands</span>
            <div>
            <img class="responsive-img" src={heavyMetal} alt="heavyMetal" />
            </div>
            <div className="center" style={{marginLeft:'850px'}}>
      {
        props.bands.map(band => {
          return <BandList key={band.title} band={band} />
        })
      }
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}