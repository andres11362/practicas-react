import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/TransformWeather';
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
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
    }
        
    handleUpdateClick = () => {

        const api_weather = getUrlWeatherByCity(this.state.city);

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

        const { onWeatherLocationClick } = this.props;

        const { city, data } = this.state

        return (
            <div className="weatherLocationCont" onClick={ onWeatherLocationClick }>
                <Location city={ city }></Location>
                {data ? <WeatherData data={ data }></WeatherData> :  <CircularProgress></CircularProgress> }
                {/* <button onClick={ this.handleUpdateClick }>Actualizar</button> */}
               
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default WeatherLocation;