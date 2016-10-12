var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var axios = require('axios');

window.myTest = () => {

    var id = "YOUR_CLIENT_ID";
    var sec = "YOUR_SECRET_ID";
    var param = "?client_id" + id + "client_secret=" + sec;
    let promiseResult = axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=zhuhai&type=accurate&APPID=10632fb01bb9f7cc0786f1d8f5577a38&cnt=5')
        .then(info => {
            console.log("我在执行");
            return info.data.list[0];
        })
    console.log(promiseResult);
    
  let [head, ...tail] = [1, 2, 3, 4];   
  console.log("tail: "+tail);


}

ReactDOM.render(
    routes,
    document.getElementById('app')
);   