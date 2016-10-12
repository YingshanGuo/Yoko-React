var React = require('react');
var propTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className='col-sm-12'>
                <form onSubmit={props.onSubmitUser}>
                    <div className="from-group">
                        <input
                            className="form-control"
                            placeholder="Github Username"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            type="text"/>
                    </div>
                    <div className="from-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Prompt.propTypes = {
    header: propTypes.string.isRequired,
    onSubmitUser: propTypes.func.isRequired,
    onUpdateUser: propTypes.func.isRequired,
    username: propTypes.string.isRequired
},

module.exports = Prompt;