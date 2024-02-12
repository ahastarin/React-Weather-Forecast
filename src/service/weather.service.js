import axios from 'axios';
export const getWeather = (callback, location) => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=27854a5dcaa8417ebc085229241102&&q=${location}`)
        .then((response) => {
            callback(response.data)
        })
        .catch(function (error) {
            throw error;
        })
}



