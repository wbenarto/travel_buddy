import {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Map from '../components/Map/Map'
import List from '../components/List/List'
import PlaceDetails from '../components/PlaceDetails/PlaceDetails'
import {CssBaseline, Grid} from '@material-ui/core'
import styles from '../styles/Home.module.css'
import { getPlacesData, getWeatherData } from './api/index'
import { CodeOutlined, LocationCityRounded } from '@material-ui/icons'
import Script from 'next/script'


export default function Home() {
  const [city, setCity] = useState([])
  const [places, setPlaces] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const [childClicked, setChildClicked] = useState(null)
  const [coordinates, setCoordinates] = useState( {})
  const [bounds, setBounds] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [autocomplete, setAutocomplete] = useState(null);

  const defaultCenterGoogle = {lat: 37.774929499999985, lng: -122.4194155}

  // console.log(coordinates)
  // Only on load
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  // Rating 
  useEffect(()=>{
    const filteredPlaces = places?.filter((place)=> place.rating > rating);
    setFilteredPlaces(filteredPlaces)
  }, [rating])

  // Type and bounds
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
    setIsLoading(true)

    getWeatherData(coordinates.lat, coordinates.lng)
    .then((data)=> {
      setWeatherData(data)
      console.log(data) 
    })


    getPlacesData(type,bounds.sw, bounds.ne)
    .then((data)=>{

      setPlaces(data?.filter((place)=>place.name && place.num_reviews > 0))
      setFilteredPlaces([])
      setIsLoading(false)
    })
  }
  }, [type, bounds])

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({lat, lng})
  }
  // Weather Api when City changes
  // useEffect(()=>{
    
  // },[city])

  return (
    <>
      <CssBaseline />
      
      <Grid container style={{width:'100%'}}>
        <Grid item xs={12} md={6}>
          <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
          <List 
            isLoading={isLoading} 
            places={filteredPlaces?.length ? filteredPlaces : places} 
            childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map 
          isLoading={isLoading}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          defaultCoord={defaultCenterGoogle}
          coordinates={coordinates}
          places={filteredPlaces?.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
          weatherData={weatherData}
          />
        </Grid>
      </Grid>      
    </>
  )
}
