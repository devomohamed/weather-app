const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=0fb00df071ce4bb52685fab0b0e6f20a&query=30.050,31.250'


request({ url, json: true }, (error, response) => {
    //low level error 
    if (error) {
        console.log('Error Has Occurred');
    } else if (response.body.error) {
        console.log(response.body.error.type);
    } else {
        // console.log(response.body);
        console.log(`temeture: ${response.body.current.temperature}`);
        console.log(`Weather Descriptions: ${response.body.current.weather_descriptions[0]}`);
    }

})