import { SUN } from "../constants/weathers";
import convert from 'convert-units';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(2);
}

const getWeatherState = weather_state =>{
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState();
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;

}

export default transformWeather;