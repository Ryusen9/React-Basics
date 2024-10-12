import props from 'prop-types';
const Weather = ({temp}) => {
    if (temp === null) {
        return <p>Invalid Input</p>
    } else if (temp < 15) {
        return <p>It is Cold Outside</p>
    } else if (temp >= 15 && temp <= 25) {
        return <p>It is a nice day outside</p>
    } else {
        return <p>It is hot outside</p>
    }
}
Weather.propTypes = {
    temp: props.number.isRequired
}
export default Weather