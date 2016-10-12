var React = require('react');
require('../src/system.css')

var Main = React.createClass({
    render: function () {
        return (
            <div className='main-container '>
                <div className='container-fluid' style={{ background: 'rgba(252, 90, 44, 0.89)' }}>
                    <div className="navbar-form navbar-left">
                        <h3>Hello from Main!</h3>
                    </div>
                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="City" />
                        </div>
                        <button type="submit" className="btn btn-success navbar-btn">Search</button>
                    </form>
                </div>
                <div className='content-container' >
                {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;