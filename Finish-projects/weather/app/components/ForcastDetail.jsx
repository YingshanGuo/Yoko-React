var React = require('react');


// <pre>{JSON.stringify(props.cityInfo, null, 2) }</pre> 

function ForcastDetail(props) {
    return (
        props.cityInfo.main
            ?
            <div className="jumbotron col-sm-12 text-center transparent-bg" >                            
                <h1 > {props.cityInfo.name}</h1>
                <p> {props.cityInfo.weather[0].description}</p>
                <p>min temp: {props.cityInfo.main.temp_min} degrees</p>
                <p>max temp: {props.cityInfo.main.temp_max} degrees</p>
                <p>humidity: {props.cityInfo.main.humidity}</p>
            </div>
            : null
    )
}


module.exports = ForcastDetail;