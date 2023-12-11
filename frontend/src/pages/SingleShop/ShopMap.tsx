import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Location } from "../../@types/@types";


interface shopMapProps{
  location:Location
}
const ShopMap = ({location}:shopMapProps) => {
    const position:[number, number] = [location.lat, location.lon];
  return (
  <div className="map-container">
<MapContainer center={position} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

    </div>

  )
}

export default ShopMap