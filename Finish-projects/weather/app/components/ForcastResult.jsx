var React = require('react');
var PropTypes = React.PropTypes;
require('../src/system.css')


function ForcastResult(props) {
    return (
        <div className="is-Transformed container-background">
        <form onSubmit={props.onSubmitCity} className="navbar-form navbar-center" role="search">
            <h1>Enter a City and State</h1>
                <div className="form-group">
                    <input onChange={props.onUpdateCity} value={props.cityname} type="text" className="form-control" placeholder="City" />
                </div>
            <button type="submit" className="btn btn-success navbar-btn">Search</button>
        </form>    
        </div>
    );
};

ForcastResult.PropTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    cityname: PropTypes.string.isRequired
},

module.exports = ForcastResult;