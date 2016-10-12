var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers=require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log('getInitialState')
        return {
            isloading: true,
            playersInfo: []
        }
    },
    componentWillMount:function(){
        console.log('componentWillMount');
    },
    componentDidMount:function(){
        var query=this.props.location.query;
        //console.log('QUERY',query);
        // console.log('componentDidMount');
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
        .then(function(players){
            //console.log('PLAYERS',players)
            this.setState({
                isloading:false,
                playersInfo:[players[0],players[1]]
            })
        }.bind(this))
    },
    componentWillReceiveProps:function(){
        console.log('componentWillReceiveProps');
    },
     componentWillUnmount:function(){
        console.log('componentWillUnmount');
    },
    handleInitiateBattle:function(){
        this.context.router.push({
            pathname:'/results',
            state:{
                playersInfo:this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmBattle
            isloading={this.state.isloading}
            onInitiateBattle={this.handleInitiateBattle}
            playersInfo={this.state.playersInfo}
            />
        );
    }
});

module.exports = ConfirmBattleContainer;