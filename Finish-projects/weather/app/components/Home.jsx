var React = require('react');
var PropTypes = React.PropTypes;
require('../src/system.css')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function Home(props) {
    return (
        <div className="container  container-background" style={{ border: '3px solid blue', width: '100%', height: '100%' }}>
            <div className="row"  >
                <div className="col-xs-12 col-md-12 col-lg-12 is-Transformed"  >
                    <div className="col-center-block" >
                        <form onSubmit={props.onSubmitCity} className="navbar-form navbar-center" role="search">
                            <h1>Enter a City and State</h1>
                            <div className="form-group">
                                <input onChange={props.onUpdateCity} value={props.cityname} type="text" className="form-control" placeholder="City" />
                            </div>
                            <button type="submit" className="btn btn-success navbar-btn">Search</button>
                            
                            <Link to='/forcastResult'>
                                <button type='button' className='btn btn-lg btn-success'>
                                    Get Start
                                </button>
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

Home.PropTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    cityname: PropTypes.string.isRequired
}

module.exports = Home;