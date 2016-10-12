var axios = require('axios');


function getCityInfo(cityname) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&type=accurate&APPID=10632fb01bb9f7cc0786f1d8f5577a38')
}

function getCityInfos(cityname) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityname + '&type=accurate&APPID=10632fb01bb9f7cc0786f1d8f5577a38&cnt=5')
}

var helpers = {
    getforcastInfo: function (cityname) {
        return getCityInfo(cityname)
            .then(info => {
                console.log("我在执行");
                return info.data;
            }).catch(function (err) {
                console.warn('Error in getforcastsInfo', err)
            })
    }
};

module.exports = helpers;