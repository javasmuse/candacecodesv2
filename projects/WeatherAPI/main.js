// fetch the weather from open weather api
fetch('https://api.openweathermap.org/data/2.5/weather?zip=34232&units=imperial&appid=6e0d8a14c454b5a04af88b6054f71f99').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    console.log(data.name);

    //location
    const local = data.name;
    const localPlace = document.getElementById('city');
    localPlace.innerHTML = local;

    //air temp rounded
    const tempFloat = data.main.temp;
    const temp = Math.round(tempFloat);
    const tempPlace = document.getElementById('temp');
    tempPlace.innerHTML = temp;

    //current conditions
    const currently = data.weather[0].main;
    const currPlace = document.getElementById('condy');
    currPlace.innerHTML = currently;

    // date and time
    function UnixTimeStamp2(t) {
        var dt = new Date(t * 1000);
        // var hr = dt.getHours();
        // var m = "0" + dt.getMinutes();
        // var s = "0" + dt.getSeconds();
        return dt;
    }

    const tod = data.dt;

    const todC = UnixTimeStamp2(tod);
    const todayPlace = document.getElementById('today');
    todayPlace.innerHTML = todC;


    //sunrise / set and convert from UNIX timestamp
    function UnixTimeStamp(t) {
        var dt = new Date(t * 1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
    }

    const sunrise = data.sys.sunrise;
    const sunriseC = UnixTimeStamp(sunrise);
    const sunrisePlace = document.getElementById('sunny');
    sunrisePlace.innerHTML = sunriseC;

    const sunset = data.sys.sunset;
    sunsetC = UnixTimeStamp(sunset);
    const sunsetPlace = document.getElementById('setty');
    sunsetPlace.innerHTML = sunsetC;

    //wind direction
    const convertWD = data.wind.deg;

    let windConversion = 'south';

    function convertWind(windy) {
        if (windy > 348 || windy <= 11) {
            windConversion = 'N';
            return (windConversion);
        } else if (windy > 11 && windy <= 33) {
            windConversion = 'NNE';
            return (windConversion);
        } else if (windy > 33 && windy <= 56) {
            windConversion = 'NE';
            return (windConversion);
        } else if (windy > 56 && windy <= 78) {
            windConversion = 'ENE';
            return (windConversion);
        } else if (windy > 78 && windy <= 101) {
            windConversion = 'E';
            return (windConversion);
        } else if (windy > 101 && windy <= 123) {
            windConversion = 'ESE';
            return (windConversion);
        } else if (windy > 123 && windy <= 146) {
            windConversion = 'SE';
            return (windConversion);
        } else if (windy > 146 && windy <= 168) {
            windConversion = 'SSE';
            return (windConversion);
        } else if (windy > 168 && windy <= 191) {
            windConversion = 'S';
            return (windConversion);
        } else if (windy > 191 && windy <= 213) {
            windConversion = 'SSW';
            return (windConversion);
        } else if (windy > 213 && windy <= 236) {
            windConversion = 'SW';
            return (windConversion);
        } else if (windy > 236 && windy <= 258) {
            windConversion = 'WSW';
            return (windConversion);
        } else if (windy > 258 && windy <= 281) {
            windConversion = 'W';
            return (windConversion);
        } else if (windy > 281 && windy <= 303) {
            windConversion = 'WNW';
            return (windConversion);
        } else if (windy > 303 && windy <= 326) {
            windConversion = 'NW';
            return (windConversion);
        } else if (windy > 326 && windy <= 348) {
            windConversion = 'NNW';
            return (windConversion);
        }
    }


    const windDir = document.getElementById('windD');
    windDir.innerHTML = convertWind(convertWD);

    //wind speed rounded
    const windSpeedFloat = data.wind.speed;
    const windSpeed = Math.round(windSpeedFloat);
    const windSp = document.getElementById('windS');
    windSp.innerHTML = windSpeed;


}).catch((err) => {
    console.log(error);

});