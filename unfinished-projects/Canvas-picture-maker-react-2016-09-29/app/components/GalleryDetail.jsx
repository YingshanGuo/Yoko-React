var React = require('react');
require('../src/system.css')

var GalleryDetail = React.createClass({
    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-3 p-around--medium ">
                <img id={this.props.id} className="img-responsive img-thumbnail " alt="Responsive image " src={this.props.imagePath}  />
            </div>
        )
    }
});

module.exports = GalleryDetail;