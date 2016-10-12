const React = require('react');
const EmojiEditorDetail = require('./EmojiEditorDetail');
const TextSetting = require('./TextSetting');
const EditorStore = require('./stores/EditorStore');
const {Editor} = EditorStore;
require('../src/system.css')

const EmojiEditor = React.createClass({
    render: function () {
         let BasicEditor = Editor();
         let BasicSetting = Object.keys(BasicEditor).map(obj => {

             return (
                 <EmojiEditorDetail key={obj} id={BasicEditor[obj].id}  name={BasicEditor[obj].name} emojiType={BasicEditor[obj].emojiType} emojiValue={BasicEditor[obj].emojiValue} />
             );
         });
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 p-horizontal--x-large ">
                    <h2 id="editTitle" className="p-horizontal--x-large">Emoji Editor</h2>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 p-horizontal--x-large ">
                    <form name="myform">
                        <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                            <button type="button" className="btn btn-default btn-sm ">打开本地图片</button>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                            <label className="col-sm-12 col-md-12 col-lg-12 font-size-medium">基本设置</label>
                        </div>
                        {BasicSetting}
                        <div>
                            <TextSetting/>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <a type="submit" className="btn btn-primary  m-vertical--medium col-sm-6 col-md-6 col-lg-6" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} >
                                    清空
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = EmojiEditor;