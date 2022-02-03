import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCfM_9vlwM33eJCEFDz5hfETZNGBaTeao" strategy="onLazyload" /> */}
    <Component {...pageProps} />
    </>
  )

}

export default MyApp
