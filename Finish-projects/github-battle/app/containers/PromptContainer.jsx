var React = require('react');

var Prompt = require('../components/Prompt');

// this.state, this.props
var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            username: ''
        }
    },

    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    },

    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        if (this.props.routeParams.playerOne) {
            //go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
            // console.log(this.context);
        } else {
            //go to playerTwo
            this.context.router.push('/playerTwo/' + this.state.username)
            // console.log(this.context);
        }
    },
    
    render: function () {
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}  />
        )
    }
});

module.exports = PromptContainer;