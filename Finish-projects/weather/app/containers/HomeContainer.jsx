var react = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
    contextTypes:{
        router:React.PropTypes.object.isRequired
    },

    getInitialState() {
        console.log("初始化");
        return {
            cityname: ''
        }
    },
    handleUpdateCity(e) {
        this.setState({
            cityname: e.target.value
        })
    },
    componentWillMount:function(){
        console.log('willMount');
    },
    handleSubmitCity: function () {
        console.log("submit");
        // e.preventDefault();
        var cityname = this.state.cityname;
        this.setState({
            cityname: ''
        });
        this.context.router.push(
            {pathname:'/cityname'}
        )

    },
    render: function () {
        return (
            <Home
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                cityname={this.state.cityname}/>
        )
    }
});

module.exports = HomeContainer;