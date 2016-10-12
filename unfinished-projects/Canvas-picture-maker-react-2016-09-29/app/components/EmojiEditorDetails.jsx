var React = require('react');
var EmojiEditorDetail = require('./EmojiEditorDetail');
require('../src/system.css')

var EmojiEditorDetails = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                    <label className="col-sm-12 col-md-12 col-lg-12 font-size-medium">基本设置</label>
                </div>
                <EmojiEditorDetail/>
                
                <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                    <label className="col-sm-6 col-md-6 col-lg-6">填充颜色</label>
                    <input type="text" name="myformBackgroundColor" className="col-sm-6 col-md-6 col-lg-6" defaultValue="#E2E6E4"  />
                </div>
            </div>
        )
    }
});

module.exports = EmojiEditorDetails;