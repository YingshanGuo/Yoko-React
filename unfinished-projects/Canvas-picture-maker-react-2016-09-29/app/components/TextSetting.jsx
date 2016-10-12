const React = require('react');
require('../src/system.css')

var TextSetting = React.createClass({
TextOnChange(){

},
    render: function () {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12 p-vertical--small ">
                <label className="col-sm-12 col-md-12 col-lg-12 font-size-medium">文本设置</label>
                
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <label>字体选择</label>
                    <select id="fontStyle" value="Georgia" onChange={this.TextOnChange}>
                        <option>Georgia</option>
                        <option>Verdana</option>
                        <option>STHeiti</option>
                        <option>STSong</option>
                    </select>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6">
                    <label>字体颜色</label>
                    <select id="fontColor" value="white" onChange={this.TextOnChange}>
                        <option>white</option>
                        <option>blue</option>
                        <option>red</option>
                        <option>yellow</option>
                        <option>grey</option>
                        <option>green</option>
                        <option>black</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <label>字体大小</label>
                    <select id="fontSize" value="12" onChange={this.TextOnChange}>
                        <option>12</option>
                        <option>14</option>
                        <option>16</option>
                        <option>18</option>
                        <option>20</option>
                        <option>22</option>
                        <option>24</option>
                        <option>26</option>
                        <option>28</option>
                        <option>32</option>
                        <option>36</option>
                    </select>
                </div>
                <label className="col-sm-12 col-md-12 col-lg-12">顶部文字</label>
                <textarea rows={2} id="formTopfillText" className="col-sm-12 col-md-12 col-lg-12" value="请输入文字"  onChange={this.TextOnChange}/>
                <label className="col-sm-12 col-md-12 col-lg-12">底部文字</label>
                <textarea rows={2} id="formBottomfillText" className="col-sm-12 col-md-12 col-lg-12" value="请输入文字" onChange={this.TextOnChange}/>
            </div>
        )
    }
});

module.exports = TextSetting;