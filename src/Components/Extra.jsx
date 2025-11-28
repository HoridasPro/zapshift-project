import React, { use, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Services from "./../Pages/Services";

const Extra = ({ jsonPromise }) => {
  const position = [23.685, 90.3563];
  const serviceCenters = use(jsonPromise);
  const mapRef = useRef(null);
  const handleLocation = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord, 13);
    }
  };

  return (
    <div>
      <h1>this is coverarge</h1>
      <div>
        <form onSubmit={handleLocation}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              name="location"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      <div className="border w-[1380px] h-[700px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[700px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Services area :{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Extra;
