const React = require('react');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const Main = require('../components/Main');
const Home = require('../components/Home');
const PromptContainer = require('../containers/PromptContainer');
const ConfirmBattleContainer=require('../containers/ConfirmBattleContainer');
const ResultsContainer=require('../containers/ResultsContainer');

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute  component={Home}/>
            <Route path='playerOne' header='Player One'component={PromptContainer}/>
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
            <Route path='battle' component={ConfirmBattleContainer} />           
            <Route path='results' component={ResultsContainer} />           
        </Route>
    </Router>
);

module.exports = routes;