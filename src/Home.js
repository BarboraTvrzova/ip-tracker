import React from 'react'
import Search from "./Search"
import GoogleMapReact from 'google-map-react';
import marker from "./img/marker.png"


const AnyReactComponent = () => <div>
  <img src={marker} alt="" /></div>;

const Home = () => {
  const defaultProps = {
    center: {
      lat: 50.0755,
      lng: 14.4378,
    },
    zoom: 13,
  };

  return (
    <div>
      <Search />
      <div className="map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCVoSZ2xc6gv8lwo2uNoyUXiz7teAZNN-g" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          >
          <AnyReactComponent
            lat={50.0755}
            lng={14.4378}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Home
