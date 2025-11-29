import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Extra from "../Components/Extra";
const jsonPromise = fetch("/jsonData.json").then((res) => res.json());

const Coverage = () => {
  return (
    <div>
      <Extra jsonPromise={jsonPromise}></Extra>
    </div>
  );
};

export default Coverage;
