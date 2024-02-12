import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"

const Forecast = () => {
    const weather = useContext(WeatherContext);
    const forecast = weather.forecast.forecastday[0].hour;
    // console.log(forecast)
    // 
    return (
        <div className="p-5 bg-black opacity-85 text-white">
            <h1 className="font-medium text-2xl mt-10 underline">Hourly Forecast</h1>
            <div className="mt-14 h-96 overflow-y-scroll no-scrollbar">
                {forecast.map((e, id) => {
                    const time = e.time.split(" ")[1]

                    return (
                        <div key={id} className="flex justify-between my-4 text-2xl font-light">
                            <p>{time}</p>

                            <p className="flex"><img
                                className="w-8  "
                                src={e.condition.icon} />{e.temp_c}℃</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Forecast