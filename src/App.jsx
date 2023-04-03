import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Weather from './components/Weather'


function App() {

  const [weather, setWeather] = useState()

  const [coords, setCoords] = useState()

  const [temp, setTemp] = useState()

  const success = (pos) => {
  const currentCords = {
    lat:pos.coords.latitude, 
    lon:pos.coords.longitude 
  }
  setCoords (currentCords)
  }

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
},
[])

useEffect (()=> {
 if (coords){
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=2aabd4b9b6015d6fcf4618c2f9dd795c`
  
  axios.get(URL)
  .then((res)=>{
    setWeather (res.data)
    const celsius = (res.data.main.temp - 273.15).toFixed(2)
    const fahrenheit = (celsius * (9/5) + 32).toFixed(2)
    const newTemps = { 
      celsius, fahrenheit
    }
    setTemp(newTemps)
  })
  .catch((err)=>{console.log (err)})
 }
},[coords])


const images = ["bg1","bg2"]
const now = new Date().getHours()
const [isDay, setIsDay] = useState(images[0])
//profe lo intente pero no pude hacer la fucnion para cambiar la imagen en los backgrouds

return (
    <div className={`App ${isDay} grid place-content-center min-h-screen bg bg-cover px-2 `}>
   

     {
      weather ? (
        <Weather weather={weather} temp={temp} />
      ) : (
        <Loader />
      )
     }
        
    </div>
  )
}

export default App
