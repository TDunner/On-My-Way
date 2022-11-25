import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

/*const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center",
        height: "100vh",
      }}
    >
      <h1>Map</h1>
    </div>
  );
};*/

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1CUsYM9FyK_xqRoRjiR72RoW5gC3TqYM",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Mapped />;
}

function Mapped() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="mapContainer"
    ></GoogleMap>
  );
}
