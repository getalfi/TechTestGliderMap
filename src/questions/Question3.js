import React, {useEffect, useState} from "react";
import Endpoints from "../util/Endpoints";
import GliderMap from "../components/GliderMap";

export default function Question3 (props) {
  //


  const [stops, setStops] = useState([]);

  useEffect(() => {
    fetchStops();
  }, [])

  const fetchStops = () => {
    fetch(Endpoints.STOPS)
      .then(res => res.json())
      .then(newStops => {
        if (newStops.stops.length) {
          setStops(newStops.stops);
        }
      })
      .catch(e => console.log(e))
  }

  const fetchStopInfo = (stop) => {
    fetch(Endpoints.STOP_INFO + '/' + stop.id)
      .then(res => res.json())
      .then(stopInfo => {
        //do something
      })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <GliderMap
        stops={stops}
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkHRuOEvL8BERtTR0oIB-mw8e0QkMVA2U&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px`, margin: 20 }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
