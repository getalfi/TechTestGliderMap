import React, { useState, useEffect } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const BELFAST_DEFAULT_LOCATION = {
  lat: 54.607868,
  lng: -5.926437
}

const GliderMap = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={BELFAST_DEFAULT_LOCATION}
    >
      <Marker
        position={BELFAST_DEFAULT_LOCATION}
        label={'Hi!'}
      />
    </GoogleMap>
  )
}))

export default GliderMap;
