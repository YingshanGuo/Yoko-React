var React = require('react');
var EmojiEditor = require('./EmojiEditor');
var CanvasPic = require('./CanvasPic');
var Gallery = require('./Gallery');
require('../src/system.css')

var Home = React.createClass({
    render: function () {
        return (
            <div className="content-container container-center container--x-large">
                <div className="col-sm-12 col-md-12 col-lg-12 row">
                    <EmojiEditor />
                    <CanvasPic />
                </div>
                <Gallery />
            </div>
        )
    }
});

module.exports = Home; 
