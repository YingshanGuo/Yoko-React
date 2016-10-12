const React = require('react');
const EditorStore = require('./stores/EditorStore');
const {changeEditor} = EditorStore;
require('../src/system.css')

const EmojiEditorDetail = React.createClass({
    getInitialState () {
        return { value: 'hello' };
    },
    onKeyUpFun(id, value) {
        this.setState({ value: event.target.value });
        console.log("id & value: ", id, value);
        //changeEditor();
    },

    render: function () {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                <label className="col-sm-6 col-md-6 col-lg-6">{this.props.name}</label>
                <input type={this.props.emoxjiType} name={this.props.id} className="col-sm-6 col-md-6 col-lg-6" defaultValue={this.props.emojiValue} onChange={this.onKeyUpFun.bind(this, this.props.id, this.value) } />
            </div>
        )
    }
});

module.exports = EmojiEditorDetail;