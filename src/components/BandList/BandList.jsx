import { Link } from "react-router-dom";

export default function BandList(props) {
  return (
    <>
      <Link to={`/bands/${props.band.title}`} className="band-link">
        <div
          style={{
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.band.title}</h1>
            <h2>Members:{props.band.members}</h2>
            <h3>Albums List: {props.band.albumsList}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
