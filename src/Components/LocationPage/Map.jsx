import { MapContainer, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../../icon-location.svg";
import MapMarker from "./MapMarker";
import { Link } from "react-router-dom";

function Map() {
    const marker = new Icon({
        iconUrl: markerIcon,
        iconSize: [50,60]
    });

  return (
    <div className="map-container">
        <Link to="/" className="home-btn">
            <img src="./images/icon-arrow-left.svg" alt="Arrow" />
            <button>Back to home</button>
        </Link>
        <MapContainer center={[41.481930, -71.310373]} zoom={20} scrollWheelZoom={true}>
            <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapMarker location={[41.481930, -71.310373]} markerIcon={marker} />
        </MapContainer>
    </div>
  )
}

export default Map;