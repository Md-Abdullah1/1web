import { MapContainer, TileLayer } from "react-leaflet";

const CountriesMap = () => {
  const positionUSA = { lat: 51.505, lng: -0.09 };
  return (
    <MapContainer className="jvector-map-height z-0" style={{ height: 300 }} zoom={13} center={positionUSA}
      attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default CountriesMap;
