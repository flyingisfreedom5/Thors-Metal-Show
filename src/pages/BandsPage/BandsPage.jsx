import { checkToken } from "../../utilities/users-service";
import BandCard from "../../components/BandCard/BandCard"

export default function BandsPage(props) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <div className="container">
      {props.bands.map((band) => {
        return <BandCard key={band.title} band={band} />;
      })}
    </div>
  );
}