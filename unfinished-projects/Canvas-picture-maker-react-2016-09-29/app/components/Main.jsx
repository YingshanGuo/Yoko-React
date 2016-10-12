var React = require('react');
var Home = require('./Home');
require('../src/system.css');

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container ">
                <a name="top">
                </a>
                <div className="container-fluid" style={{ background: '#E2E6E4' }}>
                    <div className="navbar-form navbar-left">
                        <a className="title-control">Emoji Editor</a>
                    </div>
                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" defaultValue="name" />
                        </div>
                        <button type="submit" className="btn btn-success navbar-btn ">Search</button>
                    </form>
                </div>
                <Home />
                <a href="#top">
                    <div id="top_div" className="img-thumbnail">
                        <div style={{ fontSize: 25, paddingTop: 8, color: 'black' }}>TOP</div>
                    </div>
                </a>
            </div>
        );
    }
});

module.exports = Main;