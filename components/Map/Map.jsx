import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import Script from 'next/script'


import mapStyles from './mapStyles'
import useStyles from './styles.js'


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData, defaultCoord }) => {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)')

    return (
        <>
            {/* <Script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`} strategy='beforeInteractive' /> */}

            <div className={classes.mapContainer}>
                <h1>Maps</h1>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
                    strategy='beforeInteractive'
                    defaultCenter={defaultCoord}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                    onChange={(e) => {
                        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                        setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    }}
                    onChildClick={(child) => setChildClicked(child)}
                >
                    {places?.map((place, i) => (
                        <div className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            {!isDesktop ? (
                                <Paper elevation={3} style={{ background: 'teal' }}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <LocationOnOutlinedIcon style={{ fill: "white" }} color='primary' fontSize='large' />
                                </Paper>

                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )}
                        </div>
                    ))}
                    {weatherData?.weatherData?.map((data, i) => {

                        console.log(data.weatherData[0].description)
                    }
                        // (
                        //     <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        //         <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                        //     </div>
                        // )

                    )}

                </GoogleMapReact>



            </div>
        </>

    )
}

export default Map