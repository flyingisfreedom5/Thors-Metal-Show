import React from 'react'
import { Link } from "react-router-dom";

export default function BandList(props) {
  return (
    <div class="row">
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
      <div class="card-content white-text">
      <>
      <Link to={`/bands/${props.band._id}`} className="band-link">
        <div>
          <div className="title">
          <span class="card-title">{props.band.title}</span>
          </div>
        </div>
      </Link>
      </>
      </div>
      </div>
      </div>
    </div>
  );
}
