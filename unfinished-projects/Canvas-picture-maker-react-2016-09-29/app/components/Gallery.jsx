const React = require('react');
const PicStore = require('./stores/PicStore');
const GalleryDetail = require('./GalleryDetail');
const { pictures } = PicStore;
require('../src/system.css');

var Gallery = React.createClass({
    render() {
        let GalleyPic = pictures();
        let picture = Object.keys(GalleyPic).map(pic => {
            return (
                <GalleryDetail key={pic} id={GalleyPic[pic].id} imagePath={GalleyPic[pic].imagePath}/>
            );
        });

        return (
            <div className="col-md-12 p-vertical--x-large">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                    <h2> Gallery</h2>
                </div>
                {picture}
            </div>
        )
    }
});

module.exports = Gallery;