var React = require('react');
var ForcastResult = require('../components/ForcastResult');
var weatherhelpers = require('../utils/weatherhelpers');


var ForcastResultContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log('getInitialState')
        return {
            cityname: ''
        }
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        console.log('QUERY', query);
        console.log('componentDidMount');

    },
    handleSubmitCity: function (e) {
        e.preventDefault();
        var cityname = this.state.cityname;
        this.setState({
            cityname: ''
        });
        this.context.router.push({
            pathname: '/forcastDetail',
            query: {
                cityname: this.state.cityname
            }
        })
    },
    handleUpdateCity: function (e) {
        this.setState({
            cityname: e.target.value
        })
    },


    render: function () {
        return (
            <ForcastResult
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                cityname={this.state.cityname}/>

        );
    }
});

module.exports = ForcastResultContainer;