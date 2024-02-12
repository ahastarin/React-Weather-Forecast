import CurrentWeather from "./../fragments/CurrentWeather";
import Forecast from "../fragments/Forecast";
const WeatherLayout = () => {
    return (
        <div className="h-max">
            <CurrentWeather></CurrentWeather>
            <Forecast></Forecast>
        </div>
    )
}

export default WeatherLayout;