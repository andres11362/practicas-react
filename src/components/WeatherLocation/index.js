import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/TransformWeather';
import { api_weather } from './../../constants/api_url';
import './styles.css';
import getUrlWeatherByCity from '../../services/getWeatherUrlByCity';


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        };
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")
    }
        
    handleUpdateClick = () => {

        const api_weather = getUrlWeatherByCity();

        fetch(api_weather).then( response => {
            return response.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState ({
                 data: newWeather
            });
        });
    }    

    render(){
        const { city, data } = this.state

        console.log("render")

        return (
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                {data ? <WeatherData data={ data }></WeatherData> :  <CircularProgress></CircularProgress> }
                {/* <button onClick={ this.handleUpdateClick }>Actualizar</button> */}
               
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;