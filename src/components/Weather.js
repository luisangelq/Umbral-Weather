import PropTypes from "prop-types";

const Weather = ({result}) => {

    const {name, main } = result;

    if(!name) return null;

    //transform kelvin to celsius
    const celsius = (e) => {
       return parseFloat(e - 273.15).toFixed(2);
    } 

    return(
        <div className="card-panel white">
            <div className="black-text">
                <h2>The Weather from {name} is:</h2>
                <p className="temperatura">
                    {celsius(main.temp)}<span>&#x2103;</span>
                </p>
                <p>Maximum temperature:
                    {celsius(main.temp_max)}<span>&#x2103;</span>
                </p>
                <p>Minimum temperature:
                    {celsius(main.temp_min)}<span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;