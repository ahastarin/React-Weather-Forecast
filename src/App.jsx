import { useReducer, useState } from "react";
import { WeatherContext, WeatherDispatchContext } from "./context/WeatherContext"
import WeatherLayout from "./components/layouts/WeatherLayout";
import { getWeather } from "./service/weather.service";

export default function App() {

  const [weather, dispatch] = useReducer(weatherReducer, initialWeather);

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url('city.jpg')" }}>
      <WeatherContext.Provider value={weather}>
        <WeatherDispatchContext.Provider value={dispatch}>
          <WeatherLayout></WeatherLayout>
        </WeatherDispatchContext.Provider>
      </WeatherContext.Provider>
    </div>
  )
}

function weatherReducer(weather, action) {
  switch (action.type) {
    case 'SEARCH': {

      return action.data

    } default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let initialWeather;

function setInitialWeather(data) {
  initialWeather = data;
}

getWeather((data) => {
  setInitialWeather(data)
}, 'jakarta');




