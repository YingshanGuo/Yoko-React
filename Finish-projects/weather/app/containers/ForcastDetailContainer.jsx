var React = require('react');
var ForcastDetail = require('../components/ForcastDetail');
var weatherhelpers = require('../utils/weatherhelpers');

var ForcastDetailContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log('getInitialState')
        return {
            cityname: '',
            cityInfo: {}
        }
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        var query = this.props.location.query;

        console.log('QUERY', query);
        weatherhelpers.getforcastInfo(query.cityname)
            .then(function (forcastInfo) {
                 console.log(forcastInfo);
                this.setState({
                    cityInfo: forcastInfo
                })
            }.bind(this))
        console.log('Detial   componentDidMount');
    },

    render: function () {

        return (
            <ForcastDetail cityInfo={this.state.cityInfo}/>
        );
    }
});

module.exports = ForcastDetailContainer;