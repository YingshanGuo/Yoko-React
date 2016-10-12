var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
//var ForcastResultContainer = require('../containers/ForcastResultContainer');
//var ForcastDetailContainer = require('../containers/ForcastDetailContainer');


// <IndexRoute  component={Home}/>
var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute   component={Home}/>
            {/* <Route path='forcastDetail'  component={ForcastDetailContainer}/>*/}
                      
        </Route>
    </Router>
);

module.exports = routes;