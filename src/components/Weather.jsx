import React, { useState } from 'react'

const Weather = ({weather, temp}) => {
 
  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnitTemp = () => {
    setIsCelsius(!isCelsius)
  }



  return (
  
    <section className='text-xl'>
     
      <h2 className='text-center mb-4 font-bold text-2xl tracking-wider'>{weather.name} - {weather.sys.country}</h2>
      
      <section className='grid gap-4 sm:grid-cols-two'>

        <article className='bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-items-center items-center py-2 px-2 '>

          <h3 className='capitalize col-start-1 col-end-3 '>{weather.weather[0].description}</h3>

          <h2 className='text-4xl sm:text-6xl'>{isCelsius ? `${temp.celsius} °C` : `${temp.fahrenheit} °F`} </h2>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" /></div>

        </article>

        <article className='bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-center justify-items py-2 sm:grid-cols-1 sm:px-2 sm:py-0'>

          <div className='flex text-sm justify-center items-center gap-1 px-2'>
            <div>
              <img src="/images/wind.png" alt="" />
            </div>
            <h5>{weather.wind.speed} m/s</h5>
          </div>

          <div className='flex text-sm justify-center items-center gap-1 px-2'>
            <div>
              <img src="/images/humidity.png" alt="" />
            </div>
            <h5>{weather.main.humidity} %</h5>
          </div>

          <div className='flex text-sm justify-center gap-1 items-center px-2'>
            <div>
              <img src="/images/preassure.png" alt="" />
            </div>
            <h5>{weather.main.pressure} hPa</h5>
          </div>
        </article>
      </section>

      <button className='bg-blue-500 py-2 px-6 text-white font-bold rounded-full hover:bg-blue-800 duration-200 text-sm block mx-auto mt-4' onClick={changeUnitTemp}>Change to °C/°F</button>


<p className='text-sm text-sky-50 text-center absolute bottom-3 left-1/2 -translate-x-1/2'>Elaborado por Ivan Jojoa</p>

    </section>


    
  )
}

export default Weather
