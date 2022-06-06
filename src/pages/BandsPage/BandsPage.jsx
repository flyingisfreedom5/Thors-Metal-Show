import BandCard from "../../components/BandCard/BandCard"

export default function BandsPage(props) {
 
  return (
    <div className="container">
      {props.bands.map((band) => {
        return <BandCard key={band.title} band={band} />;
      })}
    </div>
  );
}