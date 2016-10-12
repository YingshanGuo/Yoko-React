const React = require('react');
const EditorStore = require('./stores/EditorStore');
const { addChangeListener } = EditorStore;
require('../src/system.css')

const CanvasPic = React.createClass({
    componentDidMount() {
        addChangeListener(this.forceUpdate.bind(this));
    },
    toSavePic() {

    },
    render: function () {
        return (
            <div className="col-sm-6 col-md-6 col-lg-6  ">
                <div className="col-md-12">
                    <canvas id="myCanvas" height={350} className="img-control " style={{ border: '1px solid #d3d3d3' }}>
                        Sorry!Your browser does not support the HTML5 canvas tag.
                    </canvas>
                    <a type="submit" className="btn btn-success btn-lg m-vertical--medium" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onClick={this.toSavePic }>
                        下载
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = CanvasPic;