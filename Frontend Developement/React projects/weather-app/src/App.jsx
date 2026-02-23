import { useState } from "react"
import './App.css';


function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState("")
  const [loading, Setloading]=useState(false)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSearch = async () => {
    
    if (!city) return
    Setloading(true)
    setError("")
    setWeather(null)


    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )

      const data = await response.json()
      console.log(data) 

      if (data.cod !== 200) {
        setError(data.message)
        return
      }

      setWeather(data)
    } catch (error) {
      setError("Failed to fetch weather")
    }
    finally{
      Setloading(false)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />

      <button onClick={handleSearch} className="button">Search</button>

      {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      {loading && <div className="spinner"></div>}

      {weather && (
        <div className="weatherCard">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default App
