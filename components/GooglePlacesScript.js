import React from "react";
import getConfig from "next/config";
import Script from "next/script";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const GOOGLE_MAPS_API_KEY =
  serverRuntimeConfig.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  publicRuntimeConfig.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// const source = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_API_KEY}`
const source = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
const GooglePlacesScript = () => {
  return (
    <Script type="text/javascript" src={source} strategy="beforeInteractive" />
  );
};

export default GooglePlacesScript;