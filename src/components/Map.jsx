import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';

const Map = () => {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40.4093, 49.8671]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition}>
          <Popup>Popup</Popup>
        </Marker>

        {/* <ChangeCenter position={mapPosition} />
        <DetectClick /> */}
      </MapContainer>
    </div>
  );
};

export default Map;
