import React from 'react';
import WeatherIcons from 'react-weathericons';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER
} from '../../../constants/weathers';
const icons = {
    [SUN] : "day-sunny",
    [CLOUD]: 'cloud',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "2x"

    if(icon){
        return (<WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>)
    }else{
        return (<WeatherIcons className="wicon" name={"day-sunny"} size="2x"></WeatherIcons>)
    }
   
}
const WeatherTemperature = ({ temperature, weatherState }) => {
    return(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${ temperature }` }</span>
        <span className="temperatureType">{ `C°` }</span>
    </div>
    )
}; 

export default WeatherTemperature;