const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const address = `${latitude}, ${longitude}`;
  const url = `http://api.weatherstack.com/current?access_key=59b9ff54410fccb3e8d456b82a2e1e3c&query=${address}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    }
    if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}. It feels like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
