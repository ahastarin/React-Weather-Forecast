import { useContext, useRef, useState } from "react";
import { WeatherContext, WeatherDispatchContext } from "../../context/WeatherContext"
import { getWeather } from "../../service/weather.service";

const CurrentWeather = () => {

    const weather = useContext(WeatherContext);
    const dispatch = useContext(WeatherDispatchContext);
    console.log(weather)
    const location = useRef();

    const dateObj = new Date();
    const date = dateObj.toDateString();
    const time = `${dateObj.getHours()} : ${dateObj.getMinutes()}`;

    if (weather !== undefined) {
        let Location = `${weather.location.name.toUpperCase()}, ${weather.location.country.toUpperCase()}`
        return (
            <div className="h-96 flex flex-col justify-between">
                <div className="font-bold text-lg p-5 font-sans font-normal">
                    <p>📅 {weather.location.localtime.split(" ")[0]}</p>
                    <p className="my-1">🕘 {weather.location.localtime.split(" ")[1]}</p>
                    <p>🌫 {weather.current.wind_kph}KM/H</p>
                </div>
                <div className="flex flex-col justify-between px-5 py-2 bg-gradient-to-t from-black opacity-85 text-white">
                    <h1 className="font-bold text-7xl font-sans white mb-4">{weather.current.temp_c}℃</h1>
                    <h3 className="font-normal text-xl font-sans">📍 {Location} </h3>
                    <div className="flex h-fit items-center mt-6 md:w-2/4">
                        <input
                            className="rounded w-3/4 h-6 mr-3 p-2 text-black md:p-5"
                            type="text"
                            ref={location}
                            placeholder="Search Location ...." />
                        <button className="flex justify-center bg-blue-600 h-6 w-1/4 rounded font-bold text-sm md:p-5 md:items-center"
                            onClick={() => {
                                getWeather((data) => {
                                    dispatch({
                                        type: "SEARCH",
                                        data: data
                                    })
                                }, location.current.value)
                            }}
                        >
                            search
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentWeather