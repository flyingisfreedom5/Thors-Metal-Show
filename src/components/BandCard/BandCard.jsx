import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <>
      <Link to={`/bands/${props.band.title}`} className="band-link">
        <div
          style={{
            background: `url(${props.band.poster_path}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.band.title}</h1>
            <h2>Members:[props.band.members}</h2>
            <h3>Albums List: {props.band.albums_list}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
