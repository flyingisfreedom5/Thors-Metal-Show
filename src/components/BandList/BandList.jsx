import { Link } from "react-router-dom";

export default function BandList(props) {
  return (
    <>
      <Link to={`/bands/${props.band._id}`} className="band-link">
        <div
          style={{
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.band.title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
