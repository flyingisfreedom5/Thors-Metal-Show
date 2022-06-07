import { useParams } from "react-router-dom";
import Comments from '../../components/Comments/Comments';

export default function BandDetailPage({ bands }) {
  let { bandTitle } = useParams();

  let band = bands.find((b) => b.title === bandTitle);
  
  return (
    <div className="flex">
      <div>
        <h1>{band.title}</h1>
        <h2>Members: {band.members}</h2>
        <h3>Albums List:</h3>
        <ul>
            <li>{band.albumsList}</li>
        </ul>
        
      </div>
      {/* <img src={`${movie.poster_path}`} alt="" /> */}
    </div>
  );
}