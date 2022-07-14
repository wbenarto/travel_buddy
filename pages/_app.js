import '../styles/globals.css'
import Script from 'next/script'
import GooglePlacesScript from "../components/GooglePlacesScript";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GooglePlacesScript /> */}
     
      {/* <Head>
        <script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`} />
      </Head> */}
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
